import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    padding: 0 30px;
`;