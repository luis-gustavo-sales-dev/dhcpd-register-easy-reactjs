import React from 'react';
import { ThemeProvider } from 'styled-components';
// import logo from './logo.svg';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import { Container } from './style';
import theme from './styles/theme';
import { GlobalStyle } from "./styles/global";
import { DataApplicationProvider } from './hooks/dataapplication';

function App() {
  const title: string = "DHCP Register Tool"

  return (
    <>
     <ThemeProvider theme={theme}>
       <DataApplicationProvider>
        <Container>
          <AppRoutes>
            <Header actualRouter={title} />
          </AppRoutes>
        </Container>
       </DataApplicationProvider>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
  
}

export default App;
