import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  background: ${({ theme }) => theme.colors.shape  } ;
  opacity: 0;
  
  &.animation {
    transition: all .9s;
    opacity: 1;
  }
`

export const Fields = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: space-around ;
  padding: 48px ;
`

export const ActionButtons = styled.div`
  text-align: right ;
  padding: 12px ;
  
`