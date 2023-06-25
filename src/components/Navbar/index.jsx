import { BsSearch } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { api } from '../../services/api';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { Search } from '../Search';
import { Container } from './styles';

import Menu from '../../assets/svg/Menu.svg';
import Close from '../../assets/svg/Close.svg';
import Receipt from '../../assets/svg/Receipt.svg';
import SignOut from '../../assets/svg/SignOut.svg';

export function Navbar() {

    const [search, setSearch] = useState("");
    const [tagsSelected, setTagsSelected] = useState([]);
    const [showMenu, setShowMenu] = useState(true);

    const navigate = useNavigate();

    // useEffect(() => {
    //     async function fetchNotes() {
    //         const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
    //         setNotes(response.data);
    //     }

    //     fetchNotes();

    // }, [tagsSelected, search]);

    useEffect(() => {
        function handleResize() {
            setShowMenu(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])


    const handleBack = () => {
        navigate('/')
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <Container>
            <img className='menu-open' src={Menu} alt="Icone de menu" onClick={toggleMenu}/>
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <header>
                    <img 
                        className='menu-close' 
                        src={Close} 
                        alt="Icone de menu"
                        onClick={toggleMenu}
                    />
                    <h1>Menu</h1>
                </header>

                <Search
                    className='search-menu'
                    icon={BsSearch}
                    placeholder='Busque por pratos ou ingredientes'
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Link to='/'>
                    <h2>Sair</h2>
                </Link>

            </div>

            <Logo 
                fontSize='24px'
            />

            {!showMenu && 
                (<Search
                    icon={BsSearch}
                    placeholder='Busque por pratos ou ingredientes'
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                />)
            }

            <Button
                icon={Receipt}
                title='Pedidos (0)'
            />

            <Link to='/'>
                <a className='out' href=""><img src={SignOut} alt="Icone de Sair" /></a>
                <a className='requests' href=""><img src={Receipt} alt="Icone de Pedidos" />
                    <p>0</p>
                </a>
            </Link>
        </Container>
    )
}