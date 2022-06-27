import { Container, Content } from "./styles";
import logoImg from "../../logo.svg";
import { ActionButton } from "../ButtonComponent";

interface HeaderProps {
  actualRouter: string;
}

export function Header( { actualRouter }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <ActionButton url="/" text="DashBoard" />
        <ActionButton url="/devices" text="Dispositivos" />
        <ActionButton url="/groups" text="Grupos" />
        {actualRouter}
      </Content>
    </Container>
  );
}