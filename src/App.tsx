import React from 'react';
import { ThemeProvider } from 'styled-components';
// import logo from './logo.svg';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import { Container } from './style';
import theme from './styles/theme';
import { GlobalStyle } from "./styles/global";

function App() {
  const title: string = "Header Title"

  return (
    <>
     <ThemeProvider theme={theme}>
       <Container>
        <AppRoutes>
          <Header actualRouter={title} />
        </AppRoutes>
       </Container>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
  
}

export default App;
