import React, { useState, useEffect } from 'react';
import { Container, Card, CardGreen, ContainerAlignSelf, ButtonSeeMoreTransactions, ContainerAlignSelfEnd, TitlePaymentType, LittleTitle, ContainerFlex, TitleEstablishment, LineTransfer, TextTransfer, JCCenter, ButtonSeeMore, TextButtonCreateCard, LittleTitleLastCard, TextButtonTransfer, Cash, Cents, ButtonTransfer, ButtonCreateCard, Currency, Row, RowCenter, JCBetweenColumn, JCBetween, NumberAccount, Column, GGBankTitle, CardBanks, SeparatorMargin, LastCards, MT30 } from './styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import ClockLoader from "react-spinners/ClockLoader";
import api from '../../services/api';
import { FiArrowRight } from "react-icons/fi";
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
              <JCBetweenColumn>
                <JCBetween>
                  <LittleTitle>Conta principal</LittleTitle>
                  <LittleTitle>Saldo disponível</LittleTitle>
                </JCBetween>
                <MT30/>
                <JCBetween>
                  <Column>
                    <GGBankTitle>Sua conta na GGBank</GGBankTitle>
                    <NumberAccount>1234 5678 9012 1025</NumberAccount>
                  </Column>
                  <RowCenter>
                    <Cash>68.756,</Cash>
                    <Cents>56</Cents>
                    <Currency>R$</Currency>
                  </RowCenter>
                </JCBetween>
                <MT30/>
                <Row>
                  <ButtonTransfer>
                    <TextButtonTransfer>Tranferir dinheiro</TextButtonTransfer>
                  </ButtonTransfer>
                  <ButtonCreateCard>
                    <TextButtonCreateCard>Solicitar cartão</TextButtonCreateCard>
                  </ButtonCreateCard>
                </Row>
              </JCBetweenColumn>
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
              <JCCenter>
                <LittleTitleLastCard>Últimas transações</LittleTitleLastCard>
                <ButtonSeeMore>
                  <FiArrowRight color="#FFF" size="20px"/>
                </ButtonSeeMore>
              </JCCenter>
              <MT30 style={{marginTop: "15px"}}/>
              <LineTransfer>
                <ContainerAlignSelf>
                  <TextTransfer>Hoje</TextTransfer>
                </ContainerAlignSelf>
                <ContainerFlex>
                  <TitleEstablishment>Starbucks Cafe</TitleEstablishment>
                </ContainerFlex>
                <ContainerFlex>
                  <TitlePaymentType>Cartão de débito</TitlePaymentType>
                </ContainerFlex>
                <ContainerFlex>
                  <TextTransfer>Comida</TextTransfer>
                </ContainerFlex>
                <ContainerAlignSelfEnd>
                  <TextTransfer>- R$45.00</TextTransfer>
                </ContainerAlignSelfEnd>
              </LineTransfer>
              <LineTransfer>
                <ContainerAlignSelf>
                  <TextTransfer>Hoje</TextTransfer>
                </ContainerAlignSelf>
                <ContainerFlex>
                  <TitleEstablishment>Starbucks Cafe</TitleEstablishment>
                </ContainerFlex>
                <ContainerFlex>
                  <TitlePaymentType>Cartão de débito</TitlePaymentType>
                </ContainerFlex>
                <ContainerFlex>
                  <TextTransfer>Comida</TextTransfer>
                </ContainerFlex>
                <ContainerAlignSelfEnd>
                  <TextTransfer>- R$45.00</TextTransfer>
                </ContainerAlignSelfEnd>
              </LineTransfer>
              <LineTransfer>
                <ContainerAlignSelf>
                  <TextTransfer>Hoje</TextTransfer>
                </ContainerAlignSelf>
                <ContainerFlex>
                  <TitleEstablishment>Starbucks Cafe</TitleEstablishment>
                </ContainerFlex>
                <ContainerFlex>
                  <TitlePaymentType>Cartão de débito</TitlePaymentType>
                </ContainerFlex>
                <ContainerFlex>
                  <TextTransfer>Comida</TextTransfer>
                </ContainerFlex>
                <ContainerAlignSelfEnd>
                  <TextTransfer>- R$45.00</TextTransfer>
                </ContainerAlignSelfEnd>
              </LineTransfer>
              <LineTransfer>
                <ContainerAlignSelf>
                  <TextTransfer>Hoje</TextTransfer>
                </ContainerAlignSelf>
                <ContainerFlex>
                  <TitleEstablishment>Starbucks Cafe</TitleEstablishment>
                </ContainerFlex>
                <ContainerFlex>
                  <TitlePaymentType>Cartão de débito</TitlePaymentType>
                </ContainerFlex>
                <ContainerFlex>
                  <TextTransfer>Comida</TextTransfer>
                </ContainerFlex>
                <ContainerAlignSelfEnd>
                  <TextTransfer>- R$45.00</TextTransfer>
                </ContainerAlignSelfEnd>
              </LineTransfer>
              <LineTransfer>
                <ContainerAlignSelf>
                  <TextTransfer>Hoje</TextTransfer>
                </ContainerAlignSelf>
                <ContainerFlex>
                  <TitleEstablishment>Starbucks Cafe</TitleEstablishment>
                </ContainerFlex>
                <ContainerFlex>
                  <TitlePaymentType>Cartão de débito</TitlePaymentType>
                </ContainerFlex>
                <ContainerFlex>
                  <TextTransfer>Comida</TextTransfer>
                </ContainerFlex>
                <ContainerAlignSelfEnd>
                  <TextTransfer>- R$45.00</TextTransfer>
                </ContainerAlignSelfEnd>
              </LineTransfer>
              <LineTransfer>
                <ContainerAlignSelf>
                  <TextTransfer>Hoje</TextTransfer>
                </ContainerAlignSelf>
                <ContainerFlex>
                  <TitleEstablishment>Starbucks Cafe</TitleEstablishment>
                </ContainerFlex>
                <ContainerFlex>
                  <TitlePaymentType>Cartão de débito</TitlePaymentType>
                </ContainerFlex>
                <ContainerFlex>
                  <TextTransfer>Comida</TextTransfer>
                </ContainerFlex>
                <ContainerAlignSelfEnd>
                  <TextTransfer>- R$45.00</TextTransfer>
                </ContainerAlignSelfEnd>
              </LineTransfer>
              <ButtonSeeMoreTransactions>
                <TextTransfer style={{ marginRight: "5px", fontSize: "15px" }}>Ver mais</TextTransfer>
                <FiArrowRight color="#066B5D" size="20px"/>
              </ButtonSeeMoreTransactions>
              
            </LastCards>

            <SeparatorMargin/>

            <LastCards>
              <JCCenter>
                <LittleTitleLastCard>Todas as despesas</LittleTitleLastCard>
                <ButtonSeeMore>
                  <FiArrowRight color="#FFF" size="20px"/>
                </ButtonSeeMore>
              </JCCenter>
            </LastCards>
          </JCBetween>
        </Container>
    );
}

export default withRouter(Home); 