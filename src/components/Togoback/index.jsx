import { Container } from './styles';
import { RxCaretLeft } from "react-icons/rx";

export function TogoBack({ title, ...rest }) {
    return(
        <Container {...rest}>
            <button><RxCaretLeft/></button>
            <h1>voltar</h1>
        </Container>
    )
}