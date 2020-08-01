import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const MenuLeft = styled.div`
    display: flex;
    width: 8%;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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