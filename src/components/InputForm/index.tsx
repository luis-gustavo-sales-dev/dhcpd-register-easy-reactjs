import { Container, Input, Label } from "./style";

interface InputFormsProps {
  labelName: string;
  inputValue? : string;
}

export default function InputForm({ labelName, inputValue }:InputFormsProps) {
  return (
    <Container>
      <Label>{labelName}</Label>
      <Input value={inputValue} />
    </Container>
  );
}