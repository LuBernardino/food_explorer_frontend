import { useState, useEffect } from "react";

import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Card } from "../../components/Card";
import { Container } from "./styles";
import FlavorImage from "../../assets/svg/flavorimage.svg";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [cart, setCart] = useState(0);

  function handleAddCart() {
    setCart(prev => prev + 1);
  }

  function handleRemoveCart() {
    setCart(prev => prev - 1);
  }

  function handleSearch(query) {
    setSearch(query);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/?search=${search}`);
      setMeals(response.data.filter((dish) => dish.category_id === 1));
      setDesserts(response.data.filter((dish) => dish.category_id === 2));
      setDrinks(response.data.filter((dish) => dish.category_id === 3));
    }

    fetchDishes();
  }, [search]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Navbar handleSearch={handleSearch} cart={cart}/>

      <img src={FlavorImage} alt="imagem com macarrons" />

      <div className="carrouselcards">
        <h1>Refeições</h1>
        <div className="cards">
          <Swiper
            slidesPerView={isMobile ? 1.5 : Math.min(meals.length, 3.9)}
            spaceBetween={isMobile ? 16 : 27}
            freeMode={true}
            navigation={!isMobile}
            loop={true}
            modules={[Navigation]}
            style={{
              "--swiper-navigation-color": "white",
              "--swiper-navigation-size": "27.5px",
            }}
          >
            {meals.map((item) => (
              <SwiperSlide key={item.id}>
                <Card dish={item} isMobile={isMobile} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="carrouselcards">
        <h1>Sobremesas</h1>
        <div className="cards">
          <Swiper
            slidesPerView={isMobile ? 1.5 : Math.min(desserts.length, 3.9)}
            spaceBetween={isMobile ? 16 : 27}
            freeMode={true}
            navigation={!isMobile}
            loop={true}
            modules={[Navigation]}
            style={{
              "--swiper-navigation-color": "white",
              "--swiper-navigation-size": "27.5px",
            }}
          >
            {desserts.map((item) => (
              <SwiperSlide key={item.id}>
                <Card dish={item} isMobile={isMobile} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="carrouselcards">
        <h1>Bebidas</h1>
        <div className="cards">
          <Swiper
            slidesPerView={isMobile ? 1.5 : Math.min(drinks.length, 3.9)}
            spaceBetween={isMobile ? 16 : 27}
            freeMode={true}
            navigation={!isMobile}
            loop={true}
            modules={[Navigation]}
            style={{
              "--swiper-navigation-color": "white",
              "--swiper-navigation-size": "27.5px",
            }}
          >
            {drinks.map((item) => (
              <SwiperSlide key={item.id}>
                <Card dish={item} isMobile={isMobile} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
