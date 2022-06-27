import { Container, Input, Label } from "./style";

interface InputFormsProps {
  labelName: string;
}

export default function InputForm({ labelName }:InputFormsProps) {
  return (
    <Container>
      <Label>{labelName}</Label>
      <Input />
    </Container>
  );
}