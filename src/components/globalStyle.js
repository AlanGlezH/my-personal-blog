import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito', Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-size: 15px;
    margin: 0px;
    padding: 0px;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', Helvetica, Arial, Roboto, sans-serif;
  }
  `;
