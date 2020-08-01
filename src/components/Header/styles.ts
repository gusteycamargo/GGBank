import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    position: absolute;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    color: ${props => props.theme.colors.text};
    padding: 0 30px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.35);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.35);
`;