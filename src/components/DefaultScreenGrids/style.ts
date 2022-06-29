import styled from "styled-components";

interface DefaultScreenGrids {
  colums: string;
}

export const Container = styled.div<DefaultScreenGrids>`
  height: 80% ;
  display: grid;
  grid-template-columns: ${ (props) => props.colums };
  grid-gap: 16px;
  padding: 16px;
  opacity: 0;
  margin: 0px 20%;
  
  &.animation {
    transition: all .9s;
    opacity: 1;
  }
`