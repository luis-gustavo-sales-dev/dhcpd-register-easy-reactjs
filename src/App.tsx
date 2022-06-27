import React from 'react';
// import logo from './logo.svg';
import { Header } from './components/Header';
import DashBoardScreen from './screen/DashBoard';
import { Body, Container } from './style';
import { GlobalStyle } from "./styles/global";

function App() {
  const title: string = "Header Title"
  return (
    <>
      <Container>
        <Header actualRouter={title} />
        <Body>
          <DashBoardScreen />
        </Body>
      </Container>
      <GlobalStyle />
    </>
  );
  
}

export default App;
