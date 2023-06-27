import { Container } from "./styles";
import logotype from "../../assets/svg/logotype.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Logo({ fontSize, footer = false, ...rest }) {
  const navigate = useNavigate();

  const { user } = useAuth();

  return (
    <Container onClick={() => navigate("/")} fontSize={fontSize} {...rest}>
      <img src={logotype} alt="logo do food explorer" />
      <h1>food explorer</h1>
      {user && user.admin && !footer ? <span>admin</span> : null}
    </Container>
  );
}
