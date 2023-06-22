import { Container } from './styles';
import { Button } from '../Button';
import { Count } from '../Count';
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Card({ dish }) {

    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);

    function handleFavorite() {
        setFavorite(!favorite);
    }

    return(
        <Container>
            { favorite ? <FaHeart onClick={handleFavorite}/> : <FiHeart onClick={handleFavorite}/> } 
            <img src={dish.image} alt='Dish Image' />

            <h1>{dish.title} {'>'}</h1>
            <p>{dish.description}</p>
            <h2 className='value'>R$ {dish.value}</h2>
            
            <div className='card-footer'>
                <Count 
                    quantity={quantity} 
                    setQuantity={setQuantity}
                    maxQuantity={100}
                    value={1}
                />
                <Button title='incluir'/>
            </div>
        </Container>
    )
}