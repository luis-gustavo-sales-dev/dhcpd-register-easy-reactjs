import styled from "styled-components";

interface InputFormProps {
  columns?: string;
  fontSize?: string;
  showClear?: boolean;
}

export const Container = styled.div<InputFormProps>`
  width: 100% ;
  display: grid ;
  grid-template-columns: ${ (props) => props.columns} ;
  position: relative ;
`

export const Label = styled.label<InputFormProps>`
  font-size: ${({ fontSize }) => !!fontSize ? fontSize : "1rem"}  ;

`

export const Input = styled.input<InputFormProps>`
  width: 100% ;
  font-size: ${({ fontSize }) => !!fontSize ? fontSize : "1.1rem"}  ;
`

export const ClearInputField = styled.div<InputFormProps>`
  display: ${({ showClear }) => !!showClear ? "block" : "none" };
  // display: none ;
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50% ;
  background: ${({ theme }) => theme.colors.red } ;
  top: -10px;
  right: -10px;
  cursor: pointer;
`