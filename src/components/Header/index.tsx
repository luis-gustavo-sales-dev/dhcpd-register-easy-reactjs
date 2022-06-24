import { Container, Content } from "./styles";
import logoImg from "../../logo.svg";
import { ActionButton } from "../Button";

interface HeaderProps {
  actualRouter: string;
}

export function Header( { actualRouter }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <ActionButton text="DashBoard" />
        <ActionButton text="Dispositivos" />
        <ActionButton text="Grupos" />
        {actualRouter}
      </Content>
    </Container>
  );
}