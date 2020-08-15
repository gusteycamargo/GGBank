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
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 1px solid #bed4ff;
    padding: 35px;
    background-color: ${props => props.theme.colors.card};
`;

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 15px;
    padding-bottom: 10px;
`;

export const Input = styled.input`
    height: 46px;
    width: 100%;
    padding: 0 20px;
    color: #333;
    font-size: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 15px;

    &:focus:not(:disabled) {
        outline: none;
        box-shadow: inset #06f 0 0 0 1px,inset #fff 0 0 0 100px!important;
    }

    &:hover {
        box-shadow: inset #b1b0b5 0 0 0 1px,inset #fff 0 0 0 100px!important;
    }
`;

export const ButtonLogin = styled.button`
    color: #fff;
    font-size: 16px;
    background-color: #066B5D;
    height: 46px;
    padding: 0 20px;
    border: 0;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        trasition: 1s;
        background-color: #066B5D;
    }
`;