import { useEffect } from "react";
import { Device } from "../../../entities/Device";
import { useDeviceContext } from "../../../hooks/deviceDataApplication";
import InputForm from "../../InputForm";
import Loading from "../../Loading";
import DeviceComponent from "../DeviceComponent";
import { Container } from "./style";


export default function DeviceListComponent() {

  const { devices, loadingDevices, setLoadingDevices, setDevices } = useDeviceContext();

  useEffect( () => {
    async function start() {
      setLoadingDevices(true);
      setDevices([])
    }
    start()
  },[])


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
  </Container>
}