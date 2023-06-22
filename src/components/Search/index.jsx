import { Container } from './styles';

export function Search({ icon: Icon, title, border, ...rest }) {
    return(
        <Container $border={border}>
            {Icon && <Icon size={20} />}
            <label>{title}</label>
            <input {...rest} />
        </Container>
    )
}