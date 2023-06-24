
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { Card } from '../../components/Card';
import { Container } from './styles';
import FlavorImage from '../../assets/svg/flavorimage.svg'
import DishParma from '../../assets/svg/DishParma.svg';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export function Home() {
    const sections = ['Refeições', 'Sobremesas', 'Bebidas'];
    const slidesPerView = 4;
    const [isMobile, setIsMobile] = useState(false);

    const data = [
        { id: 1, image: DishParma, title: 'Suco de Maracuja', description: 'Teste Teste', value: 10, favorite: false },
        { id: 2, image: DishParma, title: 'Teste 2', description: 'Teste Teste', value: 10, favorite: false },
        { id: 3, image: DishParma, title: 'Teste 3', description: 'Teste Teste', value: 10, favorite: true },
        { id: 4, image: DishParma, title: 'Teste 4', description: 'Teste Teste', value: 10, favorite: false },
        { id: 5, image: DishParma, title: 'Teste 5', description: 'Teste Teste', value: 10, favorite: false },
        { id: 6, image: DishParma, title: 'Teste 6', description: 'Teste Teste', value: 10, favorite: true },
        { id: 7, image: DishParma, title: 'Teste 7', description: 'Teste Teste', value: 10, favorite: false },
        { id: 8, image: DishParma, title: 'Teste 8', description: 'Teste Teste', value: 10, favorite: false },
        { id: 9, image: DishParma, title: 'Teste 9', description: 'Teste Teste', value: 10, favorite: true },
        { id: 10, image: DishParma, title: 'Teste 10', description: 'Teste Teste', value: 10, favorite: false },
        { id: 11, image: DishParma, title: 'Teste 11', description: 'Teste Teste', value: 10, favorite: false },
        { id: 12, image: DishParma, title: 'Teste 12', description: 'Teste Teste', value: 10, favorite: true },
        { id: 13, image: DishParma, title: 'Teste 13', description: 'Teste Teste', value: 10, favorite: false },
        { id: 14, image: DishParma, title: 'Teste 14', description: 'Teste Teste', value: 10, favorite: false },
        { id: 15, image: DishParma, title: 'Teste 15', description: 'Teste Teste', value: 10, favorite: true },
    ];


    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return(
        <Container>
            <Navbar/>

            <img src={ FlavorImage } alt='imagem com macarrons' />

            {sections.map((section, index) =>
                (
                    <div className='carrouselcards' key={index}>
                        <h1>{section}</h1> 
                        <div className='cards'>
                            {/* <RxCaretLeft onClick={handlePrevious}/> */}
                            <Swiper
                                slidesPerView={isMobile ? 1.5 : 4}
                                spaceBetween={isMobile ? 16 : 27}
                                freeMode={true}
                                navigation={!isMobile}
                                loop={true}
                                modules={[Navigation]}
                                className="mySwiper"
                                style={{
                                    "--swiper-navigation-color": "white",
                                    "--swiper-navigation-size": "27.5px",
                                }}
                            >
                                {data.map(item => 
                                    <SwiperSlide key={item.id}>
                                        <Card dish={item} isMobile={isMobile}/>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            {/* <RxCaretRight onClick={handleNext}/> */}
                        </div>
                    </div>
                )
            )}
            <Footer />
        </Container>

    )
}