import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiSettings, FiMail, FiBell, FiLogOut } from "react-icons/fi";
import { logout } from '../../services/auth';
interface Props {
    toggleTheme(): void;
}

const Login: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);
    
    return(
        <Container>
            <p>GGBank</p>
            
            <div>
                <FiSettings size="20px" style={{marginRight: "10px"}}/>
                <FiMail size="20px" style={{marginRight: "10px"}}/>
                <FiBell size="20px" style={{marginRight: "10px"}}/>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offHandleColor="#333"
                />
                <FiLogOut 
                    size="20px" 
                    style={{
                        marginLeft: "20px",
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                    }}
                    onClick={() => logout()}
                />
            </div>
        </Container>
    );
}

export default Login; 