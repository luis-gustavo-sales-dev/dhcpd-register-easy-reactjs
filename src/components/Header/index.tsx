import { Container, Content } from "./styles";
import logoImg from "../../logo.svg";
import { MenuButton } from "../MenuButton";

interface HeaderProps {
  actualRouter: string;
}

export function Header( { actualRouter }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <MenuButton url="/" text="DashBoard" />
        <MenuButton url="/devices" text="Dispositivos" />
        <MenuButton url="/groups" text="Grupos" />
        {actualRouter}
      </Content>
    </Container>
  );
}