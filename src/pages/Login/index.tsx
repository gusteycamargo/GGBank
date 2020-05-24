import React, { useContext } from 'react';
import { Header } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

const Login: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);
    
    return(
        <Header>
            Login

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                
            />
        </Header>
    );
}

export default Login; 