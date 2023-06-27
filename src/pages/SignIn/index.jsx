import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';


import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Main } from './styles';


export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    
    function handleSignIn() {
        signIn({ email, password });
    }

    return(
        <Main>
            <Logo id="logo"/>
            <Container>
                <form onSubmit={e => { e.preventDefault(); handleSignIn(); }}>
                    <h1>Faça login</h1>
                    <Input
                        title='Email'
                        required
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        title='Senha'
                        required
                        placeholder='No mínimo 6 caracteres'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button
                        width="100%"
                        title='Entrar'
                        type="submit"
                    />
                    
                    <Link to='/register'><p>Criar uma conta</p></Link>
                </form>
            </Container>
        </Main>

    )
}