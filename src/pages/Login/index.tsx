import React from 'react';
import { Container, FormContainer, Form, Input, ButtonLogin, Label } from './styles';

const Login: React.FC = () => {
    
    function handleLogin(e: any) {
        e.preventDefault();

        alert('clicado');
    }

    return(
        <Container>
            <FormContainer onSubmit={handleLogin}>
                <Form>
                    <Label htmlFor="Email">E-mail</Label>
                    <Input
                       id="Email" 
                    />
                    <Label htmlFor="Password">Senha</Label>
                    <Input
                        id="Password"
                    />
                    <ButtonLogin type="submit">Login</ButtonLogin>
                </Form>
            </FormContainer>

        </Container>
    );
}

export default Login; 