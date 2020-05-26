import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

const Login: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);
    
    return(
        <Container>
            MyFinances

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                
            />
        </Container>
    );
}

export default Login; 