import styled from "styled-components";

export const Container = styled.div`
  height: 80% ;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;
  padding: 16px;


  div:first-child {
    background: ${({ theme }) => theme.colors.background };
  }
  div:nth-child(2) {
    background: ${({ theme }) => theme.colors.greenLight100 };
  }
`;