import { Container } from './styles';

export function Button({ icon, title, loading = false, ...rest }) {

    return(
        <Container
            disabled={loading}
            {...rest}
        >
            { icon && <img src={icon}/>}
            { title }
            {/* { loading ? 'Carregando...' : title } */}
        </Container>
    );
}