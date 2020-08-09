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
    height: 400px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const LittleTitle = styled.p`
    font-size: 13px;
    color: #AAA;
    font-weight: bold;
`;