import React, { useState, useEffect } from 'react';
import { Container, Card, CardGreen, ContainerAlignSelf, ButtonSeeMoreTransactions, ContainerAlignSelfEnd, TitlePaymentType, LittleTitle, ContainerFlex, TitleEstablishment, LineTransfer, TextTransfer, JCCenter, ButtonSeeMore, TextButtonCreateCard, LittleTitleLastCard, TextButtonTransfer, Cash, Cents, ButtonTransfer, ButtonCreateCard, Currency, Row, RowCenter, JCBetweenColumn, JCBetween, NumberAccount, Column, GGBankTitle, CardBanks, SeparatorMargin, LastCards, MT30 } from './styles';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import ClockLoader from "react-spinners/ClockLoader";
import api from '../../services/api';
import { FiArrowRight } from "react-icons/fi";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

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
      { country: 'Russia', area: 12 },
      { country: 'Canada', area: 7 },
      { country: 'USA', area: 7 },
      { country: 'China', area: 7 },
      { country: 'Brazil', area: 6 },
      { country: 'Australia', area: 5 },
      { country: 'India', area: 2 },
      { country: 'Others', area: 55 },
    ];

    const config = {
      forceFit: true,
      title: {
        visible: true,
        text: '环图',
      },
      description: {
        visible: true,
        text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。',
      },
      radius: 0.8,
      padding: 'auto',
      data,
      angleField: 'value',
      colorField: 'type',
    };

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
              <MT30 style={{marginTop: "15px"}}/>
              <JCBetween>
                <Column style={{ flex: 1 }}>
                  <LittleTitle>dia</LittleTitle>
                  <RowCenter style={{ marginTop: "10px" }}>
                    <Cash style={{ fontSize: "17px" }}>68.756,</Cash>
                    <Cents style={{ fontSize: "15px" }}>56</Cents>
                    <Currency style={{ fontSize: "17px" }}>R$</Currency>
                  </RowCenter>
                </Column>
                <Column style={{ flex: 1 }}>
                  <LittleTitle>semana</LittleTitle>
                  <RowCenter style={{ marginTop: "10px" }}>
                    <Cash style={{ fontSize: "17px" }}>68.756,</Cash>
                    <Cents style={{ fontSize: "15px" }}>56</Cents>
                    <Currency style={{ fontSize: "17px" }}>R$</Currency>
                  </RowCenter>
                </Column>
                <Column style={{ flex: 1 }}>
                  <LittleTitle>mês</LittleTitle>
                  <RowCenter style={{ marginTop: "10px" }}>
                    <Cash style={{ fontSize: "17px" }}>68.756,</Cash>
                    <Cents style={{ fontSize: "15px" }}>56</Cents>
                    <Currency style={{ fontSize: "17px" }}>R$</Currency>
                  </RowCenter>
                </Column>
              </JCBetween>
              <LineTransfer/>
              <MT30 style={{marginTop: "15px"}}/>
              <LittleTitleLastCard>Último mês</LittleTitleLastCard>
              <RowCenter style={{ width: '100%', justifyContent: 'center' }}>
                <Chart
                  data={data}
                  height={200}
                  width={200}
                >
                  <PieSeries
                    valueField="area"
                    argumentField="country"
                  />
                </Chart>
                <p>teste</p>
              </RowCenter>
            </LastCards>
          </JCBetween>
        </Container>
    );
}

export default withRouter(Home); 