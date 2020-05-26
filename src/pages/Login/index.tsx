import React from 'react';
import { Container, FormContainer, Form, Input, ButtonLogin, Label } from './styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
interface ChildComponentProps extends RouteComponentProps<any> {}

const Login: React.FC<ChildComponentProps> = ({ history }) => {
    
    function handleLogin(e: any) {
        e.preventDefault();

        history.push('/home');
    }

    return(
        <Container>
            <FormContainer onSubmit={handleLogin}>
                <Form>
                    <Label htmlFor="Email">E-mail</Label>
                    <Input
                       id="Email" 
                       type="email"
                    />
                    <Label htmlFor="Password">Senha</Label>
                    <Input
                        id="Password"
                        type="password"
                    />
                    <ButtonLogin type="submit">Login</ButtonLogin>
                </Form>
            </FormContainer>

        </Container>
    );
}

export default withRouter(Login); 