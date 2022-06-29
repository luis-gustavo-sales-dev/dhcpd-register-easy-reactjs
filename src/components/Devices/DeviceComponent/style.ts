import styled from "styled-components";



export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-column-gap: 12px ;
  position: relative;
`

export const CloseButton = styled.div`
  position: absolute ;
  top: -12px;
  right: -12px ;
  width: 24px;
  height: 24px;
  background: ${ ({theme}) => theme.colors.red};
  border-radius: 50% ;
  cursor: pointer;
`