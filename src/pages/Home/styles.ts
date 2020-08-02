import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const MenuLeft = styled.div`
    display: flex;
    width: 6%;
    height: 100%;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex: 1;
    margin: 25px;
    margin-top: 85px;
`;

export const Card = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    padding: 25px;
    align-self: stretch;
    height: 45%;
    -webkit-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.22);
    -moz-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.22);
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.22);
`;

export const TitleCard = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 18px;
    margin-right: 7px;
`;

export const TitleBold = styled(TitleCard)`
    font-weight: bold;
    margin-right: 0;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const TotalExpenses = styled.div`
    border-style: solid;
    display: flex;
    flex-direction: row;
    border-width: 1px;
    border-color: #68618A;
    border-radius: 10px;
    padding: 15px 12px;
`;

export const TotalSpent = styled(TotalExpenses)`
    border-color: #FFAE24;
    margin-left: 10px;
`;

export const ButtonCreate = styled(TotalSpent)`
    background-color: #3723AE;
    border-color: #3723AE;
    padding: 5px 12px;
`;

export const TotalEarnings = styled(TotalExpenses)`
    border-color: #FFD9CF;
`;

export const ButtonMenu = styled.div`
    width: 45px;
    height: 45px;
    margin: 15px;
    border-radius: 12px;
    background-color: #68618A;
`;

export const ButtonCreateArrow = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #68618A;
`;

export const TextButtonCreate = styled.p`
    color: #FFF;
    font-size: 15px;
`;

export const Container50 = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    width: 50%;
`;

export const ContainerButton = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;

export const ContainerPieChart = styled.div`
    width: 100px;
    height: 100px;
    border-width: 5px;
    border-color: #FFF;
`