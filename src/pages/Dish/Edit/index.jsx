import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from "../../../services/api";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { Dropdown } from "../../../components/Dropdown";
import { TogoBack } from "../../../components/togoback";
import { Textarea } from "../../../components/Textarea";
import { IngredientTag } from "../../../components/IngredientTag";
import { ButtonUploadFile } from "../../../components/ButtonUploadFile";
import { Container, Form, Dish, Ingredient, Buttons } from "./styles";

import UploadSimple from "../../../assets/svg/UploadSimple.svg";

export function DishEdit() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(1);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`);

      const dish = response.data;

      setName(dish.name);
      //   setImage(dish.image);
      setIngredients(dish.ingredients.map((ingredient) => ingredient.name));
      setPrice(dish.price);
      setDescription(dish.description);
      setCategory(dish.category_id);
    }

    async function getCategories() {
      const categories = await api.get("/categories");
      setCategories(categories.data);
    }

    getCategories();
    fetchDish();
  }, []);

  async function removeDish() {
    const confirmation = confirm(`Certeza que deseja remover o ${name}`);
    if (confirmation) {
      await api.delete(`/dishes/${id}`);
      toast.success("Prato removido!");
      navigate("/");
    }
  }

  async function editDish() {
    const notANumber = isNaN(price) || price === "";

    if (price < 0 || notANumber) {
      return toast.warn(`Preencha o campo preço com um valor válido!`);
    }

    if (!name) {
      return;
    }

    if (newIngredient != "") {
      return toast.warn(
        `Clique no + para adicionar o ingrediente tag: ${newIngredient}. ou limpe o campo!`
      );
    }

    if (ingredients.length === 0) {
      return toast.warn("Informe ao menos o ingrediente principal do prato!");
    }

    await api
      .put(`/dishes/${id}`, {
        name,
        category_id: category,
        price: parseFloat(price),
        description,
        ingredients,
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível atualizar");
        }
      });

    if (image) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", image);

      await api.patch(`dishes/image/${id}`, fileUploadForm);
    }

    toast.success("Prato atualizado!");
    setName("");
    setIngredients([]);
    setPrice(0);
    setDescription("");
    setCategories(1);
    navigate("/");
  }

  function handleUploadImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  return (
    <Container>
      <ToastContainer />
      <Navbar />

      <TogoBack onClick={() => navigate("/")}/>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          editDish();
        }}
      >
        <h1>Editar prato</h1>
        <Dish>
          <ButtonUploadFile
            onChange={handleUploadImage}
            icon={UploadSimple}
            width="229px"
            title="Imagem do Prato"
          />

          <Input
            required
            type="text"
            title="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Salada Ceasar"
          />

          <Dropdown
            options={categories}
            selected={category}
            onChange={(e) => setCategory(e.target.value)}
            title="Categoria"
            placeholder="Refeição"
          />
        </Dish>

        <Ingredient>
          <div className="add-new-ingredients">
            <h1>Ingredientes</h1>
            <div className="ingredients">
              {ingredients.map((ingredient, index) => (
                <IngredientTag
                  key={index}
                  value={ingredient}
                  isNew={false}
                  onClick={() => handleRemoveIngredients(ingredient)}
                />
              ))}
              <IngredientTag
                isNew={true}
                value={newIngredient}
                onClick={handleAddIngredients}
                onChange={(e) => setNewIngredient(e.target.value)}
              />
            </div>
          </div>

          <Input
            required
            title="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="R$ 00,00"
          />
        </Ingredient>

        <Textarea
          required
          title="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />

        <Buttons>
          <Button type="button" className="dark" onClick={removeDish} title="Excluir prato" />
          <Button type="submit" title="Salvar alterações" />
        </Buttons>
      </Form>

      <Footer />
    </Container>
  );
}
