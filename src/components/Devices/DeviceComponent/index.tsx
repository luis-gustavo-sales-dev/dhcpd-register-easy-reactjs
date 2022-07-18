import { Device } from "../../../entities/Device"
import { CloseButton } from "../../CloseButton";
import InputForm from "../../InputForm"
import { Container, } from "./style"

interface DeviceComponentProps {
  device: Device;
  closeButtonFunction: () => void;
}


export default function DeviceComponent({ device, closeButtonFunction }:DeviceComponentProps) {
  return <Container>
      <InputForm columns="1fr" fontSize="1rem" readOnly value={device.group.name}/>
      <InputForm columns="1fr" fontSize="1rem" readOnly value={device.deviceType.name}/>
      <InputForm columns="1fr" fontSize="1rem" readOnly value={device.ids.mac} />
      <CloseButton closeFunction={closeButtonFunction} />
    </Container>
}