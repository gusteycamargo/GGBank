import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.text};
    padding: 0 30px;
`;