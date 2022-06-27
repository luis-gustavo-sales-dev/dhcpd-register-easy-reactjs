import React from 'react';
// import logo from './logo.svg';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import { Body, Container } from './style';
import { GlobalStyle } from "./styles/global";

function App() {
  const title: string = "Header Title"
  return (
    <>
      <Container>
        <Header actualRouter={title} />
        <Body>
          <AppRoutes />
        </Body>
      </Container>
      <GlobalStyle />
    </>
  );
  
}

export default App;
