import { Device } from "../../../entities/Device"
import InputForm from "../../InputForm"
import { CloseButton, Container, } from "./style"

interface DeviceComponentProps {
  device: Device;
}

export default function DeviceComponent({ device }:DeviceComponentProps) {
  return <Container>
      <InputForm columns="1fr" fontSize="1rem" readOnly value={device.group.name}/>
      <InputForm columns="1fr" fontSize="1rem" readOnly value={device.deviceType.name}/>
      <InputForm columns="1fr" fontSize="1rem" readOnly value={device.ids.mac} />
      <CloseButton />
    </Container>
}