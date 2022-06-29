import { Container, Input, Label } from "./style";
import {InputHTMLAttributes, FC} from 'react'

interface InputFormsProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  fontSize?: string;
  columns: string;
}

export default function InputForm({ labelName, columns, fontSize, ...rest }:InputFormsProps) {
  return (
    <Container columns={columns}>
      { labelName ? <Label>{labelName}</Label> : null}
      <Input {...rest} fontSize={fontSize}/>
    </Container>
  );
}