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
import { Tag } from "../../../components/tag";
import { Container, Main, Dish, Ingredient, Buttons } from './styles';
import { Count } from "../../../components/Count";
import { TogoBack } from "../../../components/togoback";
import { Textarea } from "../../../components/Textarea";

export function DishEdit() {
  return (
      <Container>
        <Navbar />

        <TogoBack/>

        <Main>

            <h1>Editar prato</h1>
            <Dish>
                <Input

                    title='Imagem do Prato'
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

                    title='Ingredientes'
                    // placeholder='Selecione imagem'
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
