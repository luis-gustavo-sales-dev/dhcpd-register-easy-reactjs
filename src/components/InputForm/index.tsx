import { Container, Input, Label } from "./style";
import {InputHTMLAttributes, FC} from 'react'

interface InputFormsProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  columns: string;
}

export default function InputForm({ labelName, columns, ...rest }:InputFormsProps) {
  return (
    <Container columns={columns}>
      <Label>{labelName}</Label>
      <Input {...rest} />
    </Container>
  );
}