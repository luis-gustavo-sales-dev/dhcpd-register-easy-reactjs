import React from 'react';
import { ThemeProvider } from 'styled-components';
// import logo from './logo.svg';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import { Body, Container } from './style';
import { COLORS } from './styles/COLORS';
import { GlobalStyle } from "./styles/global";

function App() {
  const title: string = "Header Title"
  const theme = {
    colors: COLORS
  }
  return (
    <>
     <ThemeProvider theme={theme}>
        <Container>
          <AppRoutes>
            <Header actualRouter={title} />
            <Body />
          </AppRoutes>
        </Container>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
  
}

export default App;
