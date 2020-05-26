import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    height: calc(100% - 60px);
    width: 100%;
  }

  body, html {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Inter, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
  }
 }
`;