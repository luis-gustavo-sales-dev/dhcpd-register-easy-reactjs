import InputForm from "../../InputForm";
import { Container } from "./style";


export default function DeviceListComponent() {

  return <Container>
    <InputForm labelName="Servidor - 10.12.160.5/22" columns="2fr 2fr" value={"000000000000"}/>
    <InputForm labelName="Servidor - 10.10.160.5/22" columns="2fr 2fr" value={"000000000000"}/>
    <InputForm labelName="Servidor - 10.17.160.5/22" columns="2fr 2fr" value={"000000000000"}/>
  </Container>
}