import styled from "styled-components";

interface DefaultScreenGrids {
  animations: {
    show: false
  }
}

export const Container = styled.div`
  height: 80% ;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;
  padding: 16px;
  opacity: 0;
  margin: 0px 20%;
  
  &.animation {
    transition: all .9s;
    opacity: 1;
  }
`