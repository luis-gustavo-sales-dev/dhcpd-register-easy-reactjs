import { CpuInfo } from "os";
import { useEffect } from "react";
import { CreateDevices } from "../../../entities/CreateDevices";
import { Device } from "../../../entities/Device";
import { useDeviceContext } from "../../../hooks/deviceDataApplication";
import { useDeviceTypeContext } from "../../../hooks/deviceTypeDataApplication";
import { useGroupContext } from "../../../hooks/groupDataApplication";
import ActionButton from "../../ActionButton";
import InputForm from "../../InputForm";
import Loading from "../../Loading";
import DeviceComponent from "../DeviceComponent";
import { Container } from "./style";


export default function DeviceListComponent() {

  const { devices, getDevicesWithCpf, loadingDevices, setLoadingDevices, setDevices, devicesToCreate, setDevicesToCreate, createDevices, deleteDevicesWithCpfAndMac } = useDeviceContext();

  const { selectedGroup } = useGroupContext();

  const { selectedDeviceType } = useDeviceTypeContext();

  useEffect( () => {
    async function start() {
      setLoadingDevices(true);
      setDevices([])
    }
    start()
  },[])

  async function postDevicesToServer() {
    devicesToCreate.group.id = selectedGroup.id
    devicesToCreate.deviceType.id = selectedDeviceType.id
    setDevicesToCreate(devicesToCreate)

    setLoadingDevices(true);
    console.log("devicesToCreate: ")
    console.log(devicesToCreate)
    await createDevices(devicesToCreate);
    devicesToCreate.cpf && await getDevicesWithCpf(devicesToCreate.cpf);
    setLoadingDevices(false)

  }

  async function handleDeleteDevices(cpf: string, mac: string) {
    setLoadingDevices(true)
    await deleteDevicesWithCpfAndMac(cpf, mac)
    await getDevicesWithCpf(devicesToCreate.cpf);
    setLoadingDevices(false)
  }


  return <Container>
    {
      devices && devices.length >= 1 && !loadingDevices ?
        devices.map( (d) => {
          // console.log(d)
          return <DeviceComponent closeButtonFunction={() => {
            handleDeleteDevices(d.ids.cpf, d.ids.mac)
          }} device={d} key={d.ids.mac} />
        })
      :
      <>
        {
          loadingDevices  ? <Loading /> :<h2>Não há registros para esse CPF</h2>
        }
      </>
    }
    <ActionButton text="SEND" action={postDevicesToServer}/>
  </Container>
}