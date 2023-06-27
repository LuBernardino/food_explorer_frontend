import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Main } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    const toastOptions = {
      position: toast.POSITION.TOP_RIGHT,
    };

    const redirect = () => {
      navigate("/");
    };

    if (!name || !email || !password) {
      toast.error("Preencha todos os campos!", toastOptions);
      return;
    }

    if (password.length < 6) {
      toast.error("A Senha deve conter no mínimo 6 digitos!", toastOptions);
      return;
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!", {
          ...toastOptions,
        });

        setTimeout(redirect, 3000);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message, toastOptions);
        } else {
          toast.error("Não foi possível cadastrar", toastOptions);
        }
      });
  }

  return (
    <Main>
      <Logo id="logo"/>
      <ToastContainer />
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <h1>Crie sua conta</h1>
          <Input
            title="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button width="100%" title="Criar conta" type="submit" />

          <Link to="/">
            <p>Já tenho uma conta</p>
          </Link>
        </form>
      </Container>
    </Main>
  );
}
