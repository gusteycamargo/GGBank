import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const FormContainer = styled.div`
    width: 600px;
    height: 450px;
    display: flex;
    flex-direction: column;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 1px solid #bed4ff;
    padding: 35px;
`;

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 11.2px;
`;

export const Input = styled.input`
    height: 46px;
    width: 100%;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const ButtonLogin = styled.button`
    color: #fff;
    font-size: 16px;
    background: ${props => props.theme.colors.primary};
    height: 46px;
    padding: 0 20px;
    border: 0;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;