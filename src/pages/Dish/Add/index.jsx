import { useState, useEffect } from "react";
import { api } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Form, Dish, Ingredient, Buttons } from "./styles";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { ButtonUploadFile } from "../../../components/ButtonUploadFile";
import { Dropdown } from "../../../components/Dropdown";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { TogoBack } from "../../../components/Togoback";
import { Textarea } from "../../../components/Textarea";

import UploadSimple from "../../../assets/svg/UploadSimple.svg";
import { IngredientTag } from "../../../components/IngredientTag";

export function DishAdd() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(1);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCategories() {
        const categories = await api.get('/categories');
        setCategories(categories.data);
    }

    getCategories();

  }, []);

  async function addDish() {
    const notANumber = isNaN(price) || price === "";

    if (price < 0 || notANumber) {
        return toast.warn(
          `Preencha o campo preço com um valor válido!`
        );
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

    const response = await api.post('/dishes', {
      name,
      category_id: category,
      price: parseFloat(price),
      description,
      ingredients
    }).catch(error => {
        if(error.response) {
            toast.error(error.response.data.message);
        } else {
            toast.error("Não foi possível cadastrar");
        }
    });

    const id = response.data.id;

    if (image) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('image', image);

      await api.patch(`dishes/image/${id}`, fileUploadForm);
    }

    toast.success('Prato adicionado!');
    setName('');
    setIngredients([]);
    setPrice(0);
    setDescription('');

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
          addDish();
        }}
      >
        <h1>Adicionar prato</h1>
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
          <Button type="submit" title="Salvar alterações" />
        </Buttons>
      </Form>

      <Footer />
    </Container>
  );
}
