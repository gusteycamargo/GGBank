import React, { useState, useEffect } from 'react';
import { Container, FormContainer, Form, Input, ButtonLogin, Label } from './styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import ClockLoader from "react-spinners/ClockLoader";
import { login, getToken } from '../../services/auth';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import * as UserLoggedActions from '../../store/actions/userLogged/index';
import { UserLogged } from '../../store/actions/userLogged/types';
interface ChildComponentProps extends RouteComponentProps<any> {}

const Login: React.FC<ChildComponentProps> = ({ history }) => {
    const { addToast } = useToasts()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(getToken()) {
            history.push('/home');
        }
    }, []);

    function setUserLogged(value: UserLogged) {
        dispatch(UserLoggedActions.userLogged(value));
    }

    async function handleLogin(e: any) {
        e.preventDefault();
        if (!email || !password) {
            addToast('Preencha todos os campos para realizar o login!', {
                appearance: 'error',
                autoDismiss: true,
            })
        } else {
            try {
                setIsLoading(true);
                const response = await api.post("/sessions", { email, password });

                if(response.data.token) {
                    login(response.data.token);
                    const userLogged = await api.get("/userLogged");

                    setUserLogged(userLogged.data)   
                    console.log(userLogged.data);
                                     
                    history.push('/home');
                }

            } catch (err) {
                console.log(err);
                
                addToast('Ocorreu um erro ao realizar seu login, verifique seus dados e tente novamente!', {
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
            setIsLoading(false);
        }
    }

    return(
        <Container>
            <FormContainer onSubmit={handleLogin}>
                <Form>
                    <Label htmlFor="Email">E-mail</Label>
                    <Input
                       id="Email" 
                       type="email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                    />
                    <Label htmlFor="Password">Senha</Label>
                    <Input
                        id="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <ButtonLogin type="submit">
                        Login
                        <ClockLoader
                            size={15}
                            color={"#FFF"}
                            loading={isLoading}
                            css="margin-left: 10px"
                        />
                    </ButtonLogin>
                </Form>
            </FormContainer>

        </Container>
    );
}

export default withRouter(Login); 