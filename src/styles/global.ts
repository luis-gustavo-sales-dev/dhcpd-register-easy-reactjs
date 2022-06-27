import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${ theme.colors.shape };
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, label {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

 

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  label {
    font-size: 1.05rem ;
    color: ${ theme.colors.textTitle } ;
  }

  input {
    padding: 6px;
    border: none;
    width: 100% ;
    background: ${ theme.colors.textTitle };
    color: ${ theme.colors.shape } ;
    font-weight: 500 ;
    outline: none ;
    font-size: 1.05rem ;
    border-radius: 6px ;

    &:focus {
      transition: all 0.4s ease;
      transform: scale(1.01);
      box-shadow: 3px 5px 5px ${ theme.colors.greenLight100 };
    }
  }

`