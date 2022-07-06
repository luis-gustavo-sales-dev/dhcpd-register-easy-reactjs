import { useEffect } from "react";
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

  const { devices, getDevicesWithCpf, loadingDevices, setLoadingDevices, setDevices, devicesToCreate, setDevicesToCreate, createDevices } = useDeviceContext();

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

    await createDevices(devicesToCreate);
    setLoadingDevices(true);
    await getDevicesWithCpf(devicesToCreate.cpf);
    setLoadingDevices(false);
  }


  return <Container>
    {
      devices && devices.length >= 1 && !loadingDevices ?
        devices.map( (d) => {
          // console.log(d)
          return <DeviceComponent device={d} key={d.ids.mac} />
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