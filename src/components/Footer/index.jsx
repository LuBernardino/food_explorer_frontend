import { Container } from './styles';
import { Logo } from '../Logo';

export function Footer() {
    return(
        <Container>
            <Logo className='dark'
                fontSize='24px'
            />
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}