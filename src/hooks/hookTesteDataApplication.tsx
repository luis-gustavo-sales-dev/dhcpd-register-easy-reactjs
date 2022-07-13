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

interface TestDeviceDataApplicationProps {
  children: ReactNode;
}

interface testContextApplicationData {

  testCreateDevices: (createDevices: CreateDevices) => Promise<void>;
  testDevicesToCreate: CreateDevices;
  setTestDevicesToCreate: (createDevices: CreateDevices) => void; 
}

const TestDeviceDataApplicationContext = createContext( {} as testContextApplicationData)

function TestDeviceDataApplicationProvider({ children }: TestDeviceDataApplicationProps) {

  const apiGatewayUrl = "dhcpregister"
  const dhcpDeviceUrl = apiGatewayUrl+"/deviceregisters"
  const dhcpCreateDeviceBulk = dhcpDeviceUrl + "/bulk"



  const [testDevicesToCreate, setTestDevicesToCreate] = useState<CreateDevices>({
    macs:[''],
    group: {
      id: 1
    },
    deviceType: {
      id: 1
    }
  } as CreateDevices)




  async function testCreateDevices(createDevices: CreateDevices) {
    const validate:boolean = validateCreateDevices(createDevices)
    console.log("Validate: " + validate)
    if (validate) {

      await api.post(dhcpCreateDeviceBulk, createDevices)
        .then( response => {
          console.log("createDevices : Resposta: ")
          console.log(response.data)
  
        }).catch( (e: AxiosError) => {
          let error: ResponseErrorType = e.response?.data ? e.response?.data as ResponseErrorType : {
            title:"Não foi possível definir o erro. Entre em contato com programador.",
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
      alert("Cpf não pode ser vazio!")
      return false
    }
    if (!createDevices.deviceType) {
      alert('Dispositivo não pode ser vazio.')
      return false
    }
    if (!createDevices.deviceType) {
      alert('Grupo não pode ser vazio.')
      return false
    }

    // Validando macs
    if (!createDevices.macs || !(createDevices.macs.length > 0)){
      alert('Precisa preencher os macs para enviar!')
      return false
    }
    return true
  }

  return (
    <TestDeviceDataApplicationContext.Provider
      value={
        {
          testCreateDevices,
          testDevicesToCreate,
          setTestDevicesToCreate,
        }
      }>
      {children}
    </TestDeviceDataApplicationContext.Provider>)

}

function useTestDeviceContext() {
  const context= useContext(TestDeviceDataApplicationContext);
  return context;
}

export { TestDeviceDataApplicationProvider, useTestDeviceContext }