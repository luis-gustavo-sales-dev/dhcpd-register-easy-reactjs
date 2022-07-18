import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { DeviceType } from "../entities/DeviceType";
import { api } from "../services/api";


interface DeviceTypeDataApplicationProps {
  children: ReactNode;
}

interface ContextApplicationData {
  deviceTypes: DeviceType[];
  // Tem que retornar uma promise de void aqui
  getDeviceTypes: () => Promise<void>;
  selectedDeviceType: DeviceType;
  setSelectedDeviceType: (DeviceType: DeviceType) => void;
  loadingDeviceTypes: boolean;
  setLoadingDeviceTypes: (loading: boolean) => void;
}

const DeviceTypeDataApplicationContext = createContext( {} as ContextApplicationData)

function DeviceTypeDataApplicationProvider({ children }: DeviceTypeDataApplicationProps) {

  const apiGatewayUrl = "dhcpregister"
  const dhcpDeviceTypeUrl = apiGatewayUrl+"/devicestypes"



  const [deviceTypes, setDeviceTypes] = useState<DeviceType[]>([] as DeviceType[]);
  const [selectedDeviceType, setSelectedDeviceType] = useState({} as DeviceType);
  const [loadingDeviceTypes, setLoadingDeviceTypes] = useState(true);

  async function getDeviceTypes() {
    await api.get(dhcpDeviceTypeUrl+"?name=")
      .then( response => { 
        const tempDeviceTypes: DeviceType[] = [...response.data] ;
        setDeviceTypes(tempDeviceTypes);
      }).catch( () => {
        setDeviceTypes([
          {
            id: 1,
            name: "Notebook"
          },
          {
            id: 2,
            name: "Celular"
          }
        ]);
      })
  }

  useEffect( () => {
    async function start() {
      setSelectedDeviceType(deviceTypes[0])
      setLoadingDeviceTypes(false)
    }
    start()
  }, [deviceTypes])

  useEffect( () => {
    async function start() {
      await getDeviceTypes()
    }
    start()
  }, [])

  return (
    <DeviceTypeDataApplicationContext.Provider
      value={
        {
          deviceTypes,
          selectedDeviceType,
          setSelectedDeviceType,
          loadingDeviceTypes,
          getDeviceTypes,
          setLoadingDeviceTypes
        }
      }>
      {children}
    </DeviceTypeDataApplicationContext.Provider>)

}

function useDeviceTypeContext() {
  const context= useContext(DeviceTypeDataApplicationContext);
  return context;
}

export { DeviceTypeDataApplicationProvider, useDeviceTypeContext }