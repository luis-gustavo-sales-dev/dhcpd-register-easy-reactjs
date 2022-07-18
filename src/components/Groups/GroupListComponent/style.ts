import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column ;
  padding: 12px;
  border-radius: 12px ;
  justify-content: space-evenly;
  align-items: center ;
  background: ${( {theme} ) => theme.colors.background } ;
  
`