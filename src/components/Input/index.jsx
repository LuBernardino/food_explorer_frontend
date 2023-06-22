import { Container } from './styles';

export function Input({ id, icon, title, ...rest }) {
    return(
        <Container>
            {/* { icon && <img src={icon}/>} */}
            <label htmlFor={id}>{title}</label>
            <input id={id} {...rest} />
        </Container>
    )
}