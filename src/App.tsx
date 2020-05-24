import React from 'react';
import api from './services/api';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark'; 
import { ThemeProvider } from 'styled-components';
import usePeristedState from './utils/usePersistedState';
import Login from './pages/Login';

function App() {
  const [theme, setTheme] = usePeristedState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
            <Login></Login>
                  {/* <Index toggleTheme={toggleTheme}></Index>
                  <Routes/> */}
      </ThemeProvider>
    );
}

export default App;
