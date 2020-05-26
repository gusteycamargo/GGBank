import React from 'react';
import { Container, FormContainer, Form, Input, ButtonLogin } from './styles';

const Login: React.FC = () => {
    
    function handleLogin(e: any) {
        e.preventDefault();

        alert('clicado');
    }

    return(
        <Container>
            <FormContainer onSubmit={handleLogin}>
                <Form>
                    <label>E-mail</label>
                    <Input
                        
                    />
                    <label>Senha</label>
                    <Input
                        
                    />
                    <ButtonLogin type="submit">Login</ButtonLogin>
                </Form>
            </FormContainer>

        </Container>
    );
}

export default Login; 