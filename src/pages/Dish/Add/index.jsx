// import { api } from '../../services/api';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { Input } from "../../../components/Input";

import { Button } from "../../../components/Button";
import { ButtonUploadFile } from "../../../components/ButtonUploadFile";
import { Dropdown } from "../../../components/Dropdown";

import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { Tag } from "../../../components/tag";
import { Container, Main, Dish, Ingredient, Buttons } from './styles';
import { Count } from "../../../components/Count";
import { TogoBack } from "../../../components/togoback";
import { Textarea } from "../../../components/Textarea";

import UploadSimple from '../../../assets/svg/UploadSimple.svg';
import { IngredientTag } from "../../../components/IngredientTag";


// // INGREDIENTS 


// //INGREDIENTS ADD AND REMOVE




export function DishAdd() {

    const [ingredients, setIngredients] = useState(['Cebola','Alface', 'Pimenta']);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddIngredients() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredients(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

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

            <h1>Adicionar prato</h1>
            <Dish>
                
                <ButtonUploadFile icon={UploadSimple} width="229px" title='Imagem do Prato'/>
 
                <Input
                    type='text'
                    title='Nome'
                    placeholder='Ex: Salada Ceasar'
                />

                <Dropdown
                    options={categories}
                    title='Categoria'
                    placeholder='Refeição'
                />
            </Dish>


            <Ingredient>
                <div className="add-new-ingredients">
                    <h1>Ingredientes</h1>
                    <div className="ingredients">
                        {
                            ingredients.map((ingredient, index) => 
                                (<IngredientTag 
                                    key={index} 
                                    value={ingredient} 
                                    isNew={false} 
                                    onClick={() => handleRemoveIngredients(ingredient)} />)
                            )
                        }
                        <IngredientTag isNew={true} 
                            value={newIngredient}
                            onClick={handleAddIngredients} 
                            onChange={e => setNewIngredient(e.target.value)}/>
                    </div>
                </div>

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
