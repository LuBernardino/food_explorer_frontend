import { Container } from "./styles";

export function Button({ icon, title, loading = false, ...rest }) {
  return (
    <Container {...rest}>
      {icon && <img src={icon} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
