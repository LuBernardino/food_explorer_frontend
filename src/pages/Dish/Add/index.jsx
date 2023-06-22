// import { api } from '../../services/api';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
// import { Container } from "./styles";
import { Input } from "../../../components/Input";
// import { AddTags } from "../../../components/AddIngredients";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { Tag } from "../../../components/tag";
import { Container, Main, Dish, Ingredient, Buttons } from './styles';
import { Count } from "../../../components/Count";
import { TogoBack } from "../../../components/togoback";
import { Textarea } from "../../../components/Textarea";

import UploadSimple from '../../../assets/svg/UploadSimple.svg';
import { AddIngredients } from "../../../components/AddIngredients";

// // INGREDIENTS 
// const [ingredients, setIngredients] = useState([]);
// const [newIngredients, setNewIngredients] = useState("");

// //INGREDIENTS ADD AND REMOVE
// function handleAddIngredients() {
//     setIngredients(prevState => [...prevState, newIngredients]);
//     setNewIngredients("");
// }

// function handleRemoveIngredients(deleted) {
//     setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted));
// }

export function DishAdd() {
  return (
      <Container>
        <Navbar />

        <TogoBack/>

        <Main>

            <h1>Adicionar prato</h1>
            <Dish>
                <Input
                    enabled
                    title='Imagem do Prato'
                    // placeholder={icon={SignOut} +  'dede'}
                    placeholder='Selecione imagem'
                />
                <Input

                    title='Nome'
                    placeholder='Ex: Salada Ceasar'
                />
                <Input

                    title='Categoria'
                    placeholder='Refeição'
                />
            </Dish>

            <Ingredient>
                <Input
                    {...<AddIngredients/>}
                    title='Ingredientes'
                    // placeholder='R$ 00,00'
                />

                <Input
                    title='Preço'
                    placeholder='R$ 00,00'
                />
            </Ingredient>

            <Textarea
                title='Descrição'
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            />

            <AddIngredients/>

            <Buttons>
                <Button
                    disabled
                    title='Salvar alterações'
                />
            </Buttons>

        </Main>

        <Footer />
    </Container>
  );
}
