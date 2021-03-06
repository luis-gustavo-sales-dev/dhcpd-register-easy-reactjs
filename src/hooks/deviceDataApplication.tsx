import matchers from "@testing-library/jest-dom/matchers";
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
  cpf: string;
  setCpf: (cpf: string) => void;
  macs: string[];
  setMacs: (macs: string[]) => void;
  devices: Device[];
  setDevices: (devices: Device[]) => void;
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



  const [cpf, setCpf] = useState('');
  const [macs, setMacs] = useState([] as string[]);
  const [devicesToCreate, setDevicesToCreate] = useState<CreateDevices>({
    cpf,
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
      }).catch( (e: AxiosError) => {
        let error: ResponseErrorType = e.response?.data ? e.response?.data as ResponseErrorType : {
          title:"N??o foi poss??vel definir o erro. Entre em contato com programador.",
          dateTime: Date.now().toString(),
          status: 500
        };
        alert(`Status: ${error.status} \n\nTitulo: ${error.title}`);
      })
  }

  async function createDevices(createDevices: CreateDevices) {
    const validate:boolean = validateCreateDevices(createDevices)
    console.log("Validate: " + validate)
    if (validate) {

      await api.post(dhcpCreateDeviceBulk, createDevices)
        .then( response => {
          console.log("createDevices : Resposta: ")
          console.log(response.data)
  
        }).catch( (e: AxiosError) => {
          let error: ResponseErrorType = e.response?.data ? e.response?.data as ResponseErrorType : {
            title:"N??o foi poss??vel definir o erro. Entre em contato com programador.",
            dateTime: Date.now().toString(),
            status: 500
          };
          alert(`Status: ${error.status} \n\nTitulo: ${error.title}`);
        })
    
    }
  }

  function validateCreateDevices(createDevices: CreateDevices): boolean {
    // Validate cpf
    if (!createDevices.cpf) {
      alert("Cpf n??o pode ser vazio!")
      return false
    }
    if (!createDevices.deviceType) {
      alert('Dispositivo n??o pode ser vazio.')
      return false
    }
    if (!createDevices.deviceType) {
      alert('Grupo n??o pode ser vazio.')
      return false
    }

    // Validando macs
    if (createDevices.macs && createDevices.macs.length > 0){
      createDevices.macs.forEach( (mac) => {
        console.log("mac: " + mac)
        mac.length === 0 && alert('Existe macs vazios.')
        return false
      })
    } else {
      alert('Precisa preencher os macs para enviar!')
      return false
    }
    return true
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
          cpf,
          setCpf,
          macs,
          setMacs,
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