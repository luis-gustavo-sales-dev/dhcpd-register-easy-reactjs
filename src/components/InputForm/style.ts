import styled from "styled-components";

interface InputFormProps {
  columns?: string;
  fontSize?: string;
}

export const Container = styled.div<InputFormProps>`
  width: 100% ;
  display: grid ;
  grid-template-columns: ${ (props) => props.columns} ;
`

export const Label = styled.label<InputFormProps>`
  font-size: ${({ fontSize }) => !!fontSize ? fontSize : "1rem"}  ;

`

export const Input = styled.input<InputFormProps>`
  width: 100% ;
  font-size: ${({ fontSize }) => !!fontSize ? fontSize : "1.1rem"}  ;
`