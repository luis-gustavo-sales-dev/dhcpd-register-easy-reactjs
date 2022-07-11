import { ClearInputField, Container, Input, Label } from "./style";
import {InputHTMLAttributes, FC, RefObject, useRef} from 'react'

interface InputFormsProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  fontSize?: string;
  columns: string;
  showClear?: boolean;
  onClickClearInputFieldButton?: () => void;
}

export default function InputForm({ labelName, columns, fontSize, showClear, onClickClearInputFieldButton, ...rest }:InputFormsProps) {

  return (
    <Container columns={columns}>
      { labelName ? <Label>{labelName}</Label> : null}
      <Input {...rest} fontSize={fontSize}/>
      <ClearInputField showClear={showClear} onClick={onClickClearInputFieldButton}  />
    </Container>
  );
}