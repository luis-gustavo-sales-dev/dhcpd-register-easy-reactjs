import styled from "styled-components";

interface InputFormProps {
  columns: string;
}

export const Container = styled.div<InputFormProps>`
  width: 100% ;
  display: grid ;
  grid-template-columns: ${ (props) => props.columns} ;
`

export const Label = styled.label`
  font-size: 1rem ;

`

export const Input = styled.input`
  width: 100% ;
`