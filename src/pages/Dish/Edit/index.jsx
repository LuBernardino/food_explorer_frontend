// import { api } from '../../services/api';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { useState,useEffect } from "react";
// import { Container } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { Dropdown } from "../../../components/Dropdown";
import { IngredientTag } from "../../../components/IngredientTag";


import { Tag } from "../../../components/tag";
import { Container, Main, Dish, Ingredient, Buttons } from './styles';
import { Count } from "../../../components/Count";
import { TogoBack } from "../../../components/togoback";
import { Textarea } from "../../../components/Textarea";
import { ButtonUploadFile } from "../../../components/ButtonUploadFile";
import UploadSimple from '../../../assets/svg/UploadSimple.svg';


export function DishEdit() {

    const categories = [{
        id: 1,
        title: 'Refeição'
    },
    {
        id: 2,
        title: 'Sobremesas',
    },
    {
        id: 3,
        title: 'Bebidas',
    }]

  return (
      <Container>
        <Navbar />

        <TogoBack/>

        <Main>

            <h1>Editar prato</h1>
            <Dish>

                <ButtonUploadFile icon={UploadSimple} width="229px" title='Imagem do Prato'/>

    
                <Input

                    title='Nome'
                    placeholder='Ex: Salada Ceasar'
                />
                <Dropdown
                    options={categories}
                    title='Categoria'
                    placeholder='Refeição'
                />
            </Dish>

            {/* <Ingredient>
                <div className="add-new-ingredients">
                    <h1>Ingredientes</h1>
                    <IngredientTag/>

                </div>

                <Input

                    title='Preço'
                    placeholder='R$ 00,00'
                />
            </Ingredient> */}

            <Textarea 
                title='Descrição'
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            />
            
            <Buttons>
                <Button className="dark"
                    title='Excluir prato'
                />
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
