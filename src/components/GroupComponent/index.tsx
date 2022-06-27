import { Container } from "./style";

interface GroupProps {
  name: string;
  isActive: boolean;
  action: () => void;
}

export default function GroupComponent({ name, isActive }:GroupProps) {
  return <>
    <Container isActive={isActive} >{name}</Container>
  </>
}