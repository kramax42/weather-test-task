import { createGlobalStyle } from 'styled-components';

import { fontSizes } from './sizes';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; 
    font-size: ${fontSizes[3]}px;
    color: darkblue;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }
  
  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
