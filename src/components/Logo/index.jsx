import { Container } from './styles';
// import { Admin } from './styles';
import logotype from '../../assets/svg/logotype.svg';

export function Logo({fontSize, ...rest}) {
    return(
        <Container fontSize={fontSize} {...rest}>
            <img src={ logotype } alt='logo do food explorer' />
            <h1>food explorer</h1>

            {/* <Admin>
                <p>admin</p>
            </Admin> */}
        </Container>
    )
}