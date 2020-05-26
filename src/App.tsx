import React from 'react';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark'; 
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('themeFinances', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header toggleTheme={toggleTheme}/>
              <Routes/>
        </ThemeProvider>
      </BrowserRouter>
    );
}

export default App;
