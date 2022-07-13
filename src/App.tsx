import React from 'react';
import { ThemeProvider } from 'styled-components';
// import logo from './logo.svg';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import { Container } from './style';
import theme from './styles/theme';
import { GlobalStyle } from "./styles/global";
import { GroupDataApplicationProvider } from './hooks/groupDataApplication';
import { DeviceTypeDataApplicationProvider } from './hooks/deviceTypeDataApplication';
import { DeviceDataApplicationProvider } from './hooks/deviceDataApplication';
import { TestDeviceDataApplicationProvider } from './hooks/hookTesteDataApplication';

function App() {
  const title: string = "DHCP Register"

  return (
    <>
     <ThemeProvider theme={theme}>
       <DeviceDataApplicationProvider>
        <DeviceTypeDataApplicationProvider>
          <GroupDataApplicationProvider>
            <TestDeviceDataApplicationProvider>
              <Container>
                <AppRoutes>
                  <Header actualRouter={title} />
                </AppRoutes>
              </Container>
            </TestDeviceDataApplicationProvider>
          </GroupDataApplicationProvider>
        </DeviceTypeDataApplicationProvider>
       </DeviceDataApplicationProvider>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
  
}

export default App;
