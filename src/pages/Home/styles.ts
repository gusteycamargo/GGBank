import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 30px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const JCBetween = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonSeeMoreTransactions = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
`;

export const JCCenter = styled(JCBetween)`
    align-items: center;
`;

export const JCBetweenColumn = styled(JCBetween)`
    flex-direction: column;
    height: 100%;
`;

export const SeparatorMargin = styled.div`
    margin: 0 15px;
`;

export const MT30 = styled.div`
    margin-top: 30px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled(Column)`
    flex-direction: row;
`;

export const ButtonTransfer = styled.button`
    width: 150px;
    height: 46px;
    background-color: #066B5D;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    outline: none;
`;

export const ButtonCreateCard = styled(ButtonTransfer)`
    background-color: ${props => props.theme.colors.background};
    margin-left: 15px;
`;

export const RowCenter = styled(Column)`
    flex-direction: row;
    align-items: center;
`;

export const Card = styled.div`
    padding: 30px;
    width: 58%;
    align-self: stretch;
    border-radius: 35px;
    background-color: ${props => props.theme.colors.card};
`;

export const GGBankTitle = styled.p`
    font-size: 22px;
    font-weight: bold;
`;

export const NumberAccount = styled.p`
    margin-top: 8px;
    font-size: 16px;
    color: #AAA;
`;

export const Cash = styled.p`
    font-size: 24px;
    font-weight: bold;
`;

export const Cents = styled(Cash)`
    font-size: 19px;
`;

export const Currency = styled(Cash)`
    color: #AAA;
    margin-left: 5px;
`;

export const CardGreen = styled(Card)`
    background-color: #066B5D;
    width: 38%;
`;

export const CardBanks = styled(Card)`
    display: flex;
    flex: 1;
    height: 110px;
    margin-top: 20px;
`;

export const TextButtonTransfer = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.theme.colors.textInverted}
`;

export const TextButtonCreateCard = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.theme.colors.text}
`;

export const LastCards = styled(Card)`
    width: 50%;
    height: 400px;
    align-self: normal;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const LittleTitle = styled.p`
    font-size: 13px;
    color: #AAA;
    font-weight: bold;
`;

export const LittleTitleLastCard = styled.p`
    font-size: 15px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
`;

export const ButtonSeeMore = styled.button`
    width: 40px;
    height: 40px;
    background-color: #066B5D;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    outline: none;
`;

export const LineTransfer = styled.div`
    width: 100%;
    padding: 12px 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #AAA;
    display: flex;
    flex-direction: row;
`;

export const TextTransfer = styled.p`
    font-size: 13px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const ContainerFlex = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-start;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const ContainerAlignSelf = styled.div`
    display: flex;
    align-self: stretch;
    padding-right: 30px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const ContainerAlignSelfEnd = styled.div`
    display: flex;
    align-self: stretch;
    padding-left: 30px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const TitleEstablishment = styled.p`
    font-size: 13px;
    color: #555;
    font-weight: bold;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const TitlePaymentType = styled(TitleEstablishment)`
    color: #AAA;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;