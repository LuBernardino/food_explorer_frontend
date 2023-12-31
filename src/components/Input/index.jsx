import { Container } from './styles';

export function Input({ id, icon, title, ...rest }) {
    return(
        <Container>
            <label htmlFor={id}>{title}</label>
            { icon && <img src={icon}/>}
            <input 
                id={id}
                {...rest} 
            />
        </Container>
    )
}