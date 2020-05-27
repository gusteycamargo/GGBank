import React, { useState } from 'react';
import { Container, FormContainer, Form, Input, ButtonLogin, Label } from './styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

interface ChildComponentProps extends RouteComponentProps<any> {}

const Login: React.FC<ChildComponentProps> = ({ history }) => {
    const { addToast } = useToasts()

    function handleLogin(e: any) {
        e.preventDefault();
        addToast('Ocorreu um erro ao realizar seu login, verifique seus dados e tente novamente!', {
            appearance: 'error',
            autoDismiss: true,
        })
        // if (!username || !password) {
        //     setError("Preencha todos os campos para continuar!");
        // } else {
        //     try {
        //         setIsLoading(true);
        //         const response = await api.post("/sessions", { username, password });
        //         login(response.data.token);
        //         const responseUser = await api.get('/userLogged');
        //         addUserAndCampus(responseUser.data.user, responseUser.data.campus);

        //         history.push('/home');
        //     } catch (err) {
        //         console.log(err);
                
        //         setError("Nome de usuário ou senha incorreta.");
        //     }
        //     setIsLoading(false);
        // }
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