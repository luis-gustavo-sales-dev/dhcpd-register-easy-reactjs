import { ClearInputField, Container, Input, Label } from "./style";
import {InputHTMLAttributes} from 'react'
import { CloseButton } from "../CloseButton";

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
      {showClear && <CloseButton closeFunction={onClickClearInputFieldButton}  />}
    </Container>
  );
}