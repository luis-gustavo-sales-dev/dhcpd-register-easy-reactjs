import { ClearInputField, Container, Input, Label } from "./style";
import {InputHTMLAttributes, FC, RefObject, useRef} from 'react'

interface InputFormsProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  fontSize?: string;
  columns: string;
  showClear?: boolean;
}

export default function InputForm({ labelName, columns, fontSize, showClear, ...rest }:InputFormsProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <Container columns={columns}>
      { labelName ? <Label>{labelName}</Label> : null}
      <Input {...rest} ref={inputEl} fontSize={fontSize}/>
      <ClearInputField showClear={showClear} onClick={ () => {
        
        console.log(inputEl)
      }}  />
    </Container>
  );
}