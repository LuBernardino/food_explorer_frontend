import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Search } from "../Search";
import { Container } from "./styles";

import { BsSearch } from "react-icons/bs";
import Menu from "../../assets/svg/Menu.svg";
import Close from "../../assets/svg/Close.svg";
import Receipt from "../../assets/svg/Receipt.svg";
import SignOut from "../../assets/svg/SignOut.svg";

export function Navbar({ handleSearch, cart = 0 }) {
  const [showMenu, setShowMenu] = useState(true);

  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setShowMenu(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <img
        className="menu-open"
        src={Menu}
        alt="Icone de menu"
        onClick={toggleMenu}
      />
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <header>
          <img
            className="menu-close"
            src={Close}
            alt="Icone de menu"
            onClick={toggleMenu}
          />
          <h1>Menu</h1>
        </header>

        <Search
          className="search-menu"
          icon={BsSearch}
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Link to="/">
          <h2>Sair</h2>
        </Link>
      </div>

      <Logo fontSize="24px" />

      {!showMenu && (
        <Search
          icon={BsSearch}
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      )}

      {user.admin ? (
        <Button title="Novo prato" onClick={() => navigate("/dish/add")} />
      ) : (
        <Button icon={Receipt} title={`Pedidos (${cart})`} />
      )}

      <Link to="/">
        <a className="out" onClick={handleSignOut}>
          <img src={SignOut} alt="Icone de Sair" />
        </a>
        <a className="requests" href="">
          <img src={Receipt} alt="Icone de Pedidos" />
          <p>{cart}</p>
        </a>
      </Link>
    </Container>
  );
}
