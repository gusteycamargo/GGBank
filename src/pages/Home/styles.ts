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
    padding: 10px;
    width: 25%;
    height: 40%;
    -webkit-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.22);
    -moz-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.22);
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.22);
`;

export const ButtonMenu = styled.div`
    width: 45px;
    height: 45px;
    margin: 15px;
    border-radius: 12px;
    background-color: #68618A;
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