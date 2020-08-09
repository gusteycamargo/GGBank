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

export const SeparatorMargin = styled.div`
    margin: 0 15px;
`;

export const Card = styled.div`
    width: 58%;
    height: 280px;
    border-radius: 35px;
    background-color: #FFF;
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

export const LastCards = styled(Card)`
    height: 400px;
    margin-top: 20px;
    margin-bottom: 20px;
`;