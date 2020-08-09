import React, { useState, useEffect } from 'react';
import { Container, Card, CardGreen, JCBetween, CardBanks, SeparatorMargin, LastCards } from './styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import ClockLoader from "react-spinners/ClockLoader";
import api from '../../services/api';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  } from 'recharts';

interface Expense {
    id: number;
    description: string;
    value: number;
    category: any;
}

interface ChildComponentProps extends RouteComponentProps<any> {}

const Home: React.FC<ChildComponentProps> = ({ history }) => {
    const { addToast } = useToasts()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listOfExpenses, setListOfExpenses] = useState<Expense[]>([]);

    const data = [
        {
          subject: 'Math', A: 120, B: 110, fullMark: 150,
        },
        {
          subject: 'Chinese', A: 98, B: 130, fullMark: 150,
        },
        {
          subject: 'English', A: 86, B: 130, fullMark: 150,
        },
        {
          subject: 'Geography', A: 99, B: 100, fullMark: 150,
        },
        {
          subject: 'Physics', A: 85, B: 90, fullMark: 150,
        },
        {
          subject: 'History', A: 65, B: 85, fullMark: 150,
        },
      ];

    useEffect(() => {
        
    }, [])

    // async function handleLogin(e: any) {
    //     e.preventDefault();
    //     if (!email || !password) {
    //         addToast('Preencha todos os campos para realizar o login!', {
    //             appearance: 'error',
    //             autoDismiss: true,
    //         })
    //     } else {
    //         try {
    //             setIsLoading(true);
    //             const response = await api.post("/sessions", { email, password });
    //             login(response.data.token);

    //             history.push('/home');
    //         } catch (err) {
    //             console.log(err);
                
    //             addToast('Ocorreu um erro ao realizar seu login, verifique seus dados e tente novamente!', {
    //                 appearance: 'error',
    //                 autoDismiss: true,
    //             })
    //         }
    //         setIsLoading(false);
    //     }
    // }

    return(
        <Container>
          <JCBetween>
            <Card>

            </Card>
            <CardGreen>
              
            </CardGreen>
          </JCBetween>
          <JCBetween>
            <CardBanks>

            </CardBanks>
            <SeparatorMargin/>
            <CardBanks>

            </CardBanks>
            <SeparatorMargin/>
            <CardBanks>

            </CardBanks>
            <SeparatorMargin/>
            <CardBanks>

            </CardBanks>
          </JCBetween>
          <JCBetween>
            <LastCards>

            </LastCards>
            <SeparatorMargin/>
            <LastCards>

            </LastCards>
          </JCBetween>
        </Container>
    );
}

export default withRouter(Home); 