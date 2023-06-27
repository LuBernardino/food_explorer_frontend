import { Container } from "./styles";
import { Button } from "../Button";
import { Count } from "../Count";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import imagePlaceholder from "../../assets/png/ImageDishPlaceholder.png";

export function Card({ dish, isMobile, handleAddCart, handleRemoveCart }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [addedInCart, setAddedInCart] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  const imageUrl = dish.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : imagePlaceholder;

  return (
    <Container isMobile={isMobile}>
      {user.admin ? (
        <PencilSimple onClick={() => navigate(`/dish/edit/${dish.id}`)} />
      ) : favorite ? (
        <FaHeart onClick={handleFavorite} />
      ) : (
        <FiHeart onClick={handleFavorite} />
      )}

      <img src={imageUrl} alt="Dish Image" />
      <Link to={`/dish/details/${dish.id}`}>
        <h1>
          {dish.name} {">"}
        </h1>
      </Link>
      <p>{dish.description}</p>
      <h2 className="value">R$ {dish.price}</h2>
      {!user.admin && (
        <div className="card-footer">
          <Count
            quantity={quantity}
            setQuantity={setQuantity}
            maxQuantity={100}
            value={1}
          />
          {!addedInCart ? (
            <Button
              title="incluir"
              onClick={() => {
                setAddedInCart(true);
                handleAddCart();
              }}
            />
          ) : (
            <Button
              title="remover"
              onClick={() => {
                setAddedInCart(false);
                handleRemoveCart();
              }}
            />
          )}
        </div>
      )}
    </Container>
  );
}
