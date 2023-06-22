import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { api } from '../../services/api';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { Search } from '../Search';
import { Container } from './styles';

import Receipt from '../../assets/svg/Receipt.svg';
import SignOut from '../../assets/svg/SignOut.svg';
import Menu from '../../assets/svg/Menu.svg';

export function Navbar() {

    const [search, setSearch] = useState("");
    const [tagsSelected, setTagsSelected] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();

    }, [tagsSelected, search]);

    const handleBack = () => {
        navigate('/')
    }

    return(
        <Container>

            <img src={Menu} alt="Icone de menu" />

            <Logo 
                fontSize='24px'
            />

            <Search
                icon={BsSearch}
                placeholder='Busque por pratos ou ingredientes'
                type='text'
                onChange={(e) => setSearch(e.target.value)}
            />

            <Button
                // icon={TfiReceipt}
                icon={Receipt}
                title='Pedidos (0)'
            />
            
            <Link to='/'>
                <a href=""><img src={SignOut} alt="Icone de Sair" /></a>
            </Link>
            {/* <a href=""><img src={SignOut} alt="" /></a> */}
        </Container>
    )
}