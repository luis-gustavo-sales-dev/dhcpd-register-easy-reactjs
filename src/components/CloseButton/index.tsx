import { Container } from "./style";

interface CloseButtonProps {
  closeFunction?: () => void;
}

export function CloseButton({ closeFunction }:CloseButtonProps) {
  return <Container onClick={closeFunction}>

  </Container>
}