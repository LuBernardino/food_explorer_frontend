import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Tag } from "../../../components/Tag";
import { Count } from "../../../components/Count";
import { TogoBack } from "../../../components/Togoback";
import { Container, Main, Tags, Items } from "./styles";
import { useAuth } from "../../../hooks/auth";

import { api } from "../../../services/api";

import imagePlaceholder from "../../../assets/png/ImageDishPlaceholder.png";

export function DishDetails() {
  const [dish, setDish] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  const { user } = useAuth();

  const imageUrl = dish.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : imagePlaceholder;

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`);
      setDish(response.data);
    }

    fetchDish();
  }, []);

  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <Navbar />

      <TogoBack onClick={() => navigate("/")} />

      <Main>
        <img src={imageUrl} alt="imagem do prato" />

        <div className="dishinfo">
          <h1>{dish.name}</h1>
          <p>{dish.description}</p>
          <Tags>
            {dish.ingredients &&
              dish.ingredients.map((ingredient) => (
                <Tag title={ingredient.name}></Tag>
              ))}
          </Tags>

          <Items>
            {user && !user.admin ? (
              <>
                <Count
                  quantity={quantity}
                  setQuantity={setQuantity}
                  maxQuantity={100}
                  value={1}
                />
                <Button title={`incluir ∙ R$ ${dish.price}`} />
              </>
            ) : (
              <Button
                title={"Editar prato"}
                onClick={() => navigate(`/dish/edit/${dish.id}`)}
              />
            )}
          </Items>
        </div>
      </Main>

      <Footer />
    </Container>
  );
}
