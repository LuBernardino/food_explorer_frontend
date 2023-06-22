// import { api } from '../../services/api';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/navbar";
import { Tag } from "../../../components/tag";
import { Count } from "../../../components/Count";
import { TogoBack } from "../../../components/togoback";
import { Container, Main, Tags, Items } from './styles';

import DishRavanello from '../../../assets/png/DishRavanelloG.png'

export function DishDetails() {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    function handleBack() {
        navigate("-1");
    }

    return (
        <Container>
            <Navbar />

            <TogoBack onClick={handleBack} />
            
            <Main>
                <img src={ DishRavanello } alt='imagem do prato' />

                <div className="dishinfo">
                    <h1>Salada Ravanello</h1>
                    <p>
                        Rabanetes, folhas verdes e molho agridoce salpicados 
                        com gergelim.
                    </p>
                    <Tags>
                        <Tag title='alface'/>
                        <Tag title='cebola'/>
                        <Tag title='pão naan'/>
                        <Tag title='pepino'/>
                        <Tag title='rabanete'/>
                        <Tag title='tomate'/>
                    </Tags>

                    <Items>
                        <Count
                            quantity={quantity} 
                            setQuantity={setQuantity}
                            maxQuantity={100}
                            value={1}
                        />
                        <Button title='incluir ∙ R$ 25,00'/>
                    </Items>
                </div>
            </Main>

            <Footer />
        </Container>
    );
}