import styled from "styled-components";

export const Container = styled.div`
  position: absolute ;
  top: -12px;
  right: -12px ;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.red};
  border-radius: 50% ;
  cursor: pointer;
`