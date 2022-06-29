import { Device } from "../../../entities/Device";
import InputForm from "../../InputForm";
import DeviceComponent from "../DeviceComponent";
import { Container } from "./style";


export default function DeviceListComponent() {

  let device: Device = {
    ids: {
      cpf: "122",
      mac: "00000"
    },
    devicetype: {
      id: 1,
      name: "Celular"
    },
    group: {
      name: "Servidor"
    }
  }
  return <Container>
    <DeviceComponent device={device} />
    <DeviceComponent device={device}/>
  </Container>
}