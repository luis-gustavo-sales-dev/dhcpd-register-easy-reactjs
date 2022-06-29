import styled from "styled-components";

export const Container = styled.div`
  display: flex ;
  align-items: center ;
  justify-content: center ;
  width: 100% ;
  height: 100% ;
`

export const Content = styled.div`

  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid ${ ({theme}) => theme.colors.green }; /* Blue */
  border-radius: 75%;
  width: 60px;
  height: 60px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`