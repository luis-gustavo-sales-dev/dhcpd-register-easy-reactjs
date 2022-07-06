import { AxiosError } from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CreateDevices } from "../entities/CreateDevices";
import { Device } from "../entities/Device";
import { api } from "../services/api";

interface ResponseErrorType {
  dateTime: string,
  status: number,
  title: string
}

interface DeviceDataApplicationProps {
  children: ReactNode;
}

interface ContextApplicationData {
  devices: Device[];
  setDevices: (devices: Device[]) => void;
  // Tem que retornar uma promise de void aqui
  getDevicesWithCpf: (cpf: string) => Promise<void>;
  deleteDevicesWithCpfAndMac: (cpf: string, mac: string) => Promise<void>;
  loadingDevices: boolean;
  setLoadingDevices: (loading: boolean) => void;
  deletingDevice: string;
  setDeletingDevice: (mac: string) => void;
  createDevices: (createDevices: CreateDevices) => Promise<void>;
  devicesToCreate: CreateDevices;
  setDevicesToCreate: (createDevices: CreateDevices) => void; 
}

const DeviceDataApplicationContext = createContext( {} as ContextApplicationData)

function DeviceDataApplicationProvider({ children }: DeviceDataApplicationProps) {

  const apiGatewayUrl = "dhcpregister"
  const dhcpDeviceUrl = apiGatewayUrl+"/deviceregisters"
  const dhcpCreateDeviceBulk = dhcpDeviceUrl + "/bulk"



  const [devicesToCreate, setDevicesToCreate] = useState<CreateDevices>({
    group: {
      id: 1
    },
    deviceType: {
      id: 1
    }
  } as CreateDevices)
  const [devices, setDevices] = useState([] as Device[]);
  const [loadingDevices, setLoadingDevices] = useState(true);
  const [deletingDevice, setDeletingDevice] = useState("");

  async function getDevicesWithCpf(cpf: string) {
    await api.get(dhcpDeviceUrl+"?cpf="+cpf)
      .then( response => { 
        const tempDevices: Device[] = [...response.data] ;
        setDevices(tempDevices);
      });
  }

  async function deleteDevicesWithCpfAndMac(cpf: string, mac: string) {
    await api.delete(dhcpDeviceUrl+`/${cpf}/${mac}`)
      .then( response => {
        console.log("Deletado? " + response.status)
        // Remover da lista
        const noDevice = devices.filter( (device) => {
          return !(device.ids.mac !== mac)
        })
        console.log("noDevice")
        console.log(noDevice)
        setDevices([...noDevice])
      });
  }

  async function createDevices(createDevices: CreateDevices) {
    await api.post(dhcpCreateDeviceBulk, createDevices)
      .then( response => {
        console.log(response.data)
        setLoadingDevices(false)
      }).catch( (e: AxiosError) => {
        let error: ResponseErrorType = e.response?.data ? e.response?.data as ResponseErrorType : {
          title:"Não foi possível definir o erro. Entre em contato com programador.",
          dateTime: Date.now().toString(),
          status: 500
        };
        alert(`Status: ${error.status} \n\nTitulo: ${error.title}`);
      })
  }

  useEffect( () => {
    async function start() {
      setLoadingDevices(false)
      setDeletingDevice("")
    }
    start()
  }, [devices])

  return (
    <DeviceDataApplicationContext.Provider
      value={
        {
          devices,
          setDevices,
          getDevicesWithCpf,
          deleteDevicesWithCpfAndMac,
          loadingDevices,
          setLoadingDevices,
          deletingDevice,
          setDeletingDevice,
          createDevices,
          devicesToCreate,
          setDevicesToCreate,
        }
      }>
      {children}
    </DeviceDataApplicationContext.Provider>)

}

function useDeviceContext() {
  const context= useContext(DeviceDataApplicationContext);
  return context;
}

export { DeviceDataApplicationProvider, useDeviceContext }