import InputForm from "../../InputForm";
import ActionButton from "../../ActionButton";
import { Container, ContentActions, ContentMACs, ContentGroups, ContentTypeOfDevices, MoveButton } from "./style";
import { useEffect, useState } from "react";
import { useGroupContext } from "../../../hooks/groupDataApplication";
import GroupComponent from "../../Groups/GroupComponent";
import { useDeviceTypeContext } from "../../../hooks/deviceTypeDataApplication";
import Loading from "../../Loading";
import { useDeviceContext } from "../../../hooks/deviceDataApplication";

export default function DeviceInputsComponent() {

  const { groups, getGroups, selectedGroup, setSelectedGroup, loadingGroups, setLoadingGroups } = useGroupContext();

  const { deviceTypes, getDeviceTypes, selectedDeviceType, setSelectedDeviceType, loadingDeviceTypes, setLoadingDeviceTypes } = useDeviceTypeContext();

  const { getDevicesWithCpf, setLoadingDevices, devicesToCreate, setDevicesToCreate } = useDeviceContext();

  let [macToStore, setMacToStore] = useState([] as string[]);
  const macPlaceHolder: string = "exemplo: ab00cd789800"
  

  function addMacsInputsToStore() {
    // Tem que colocar um limite aqui
    macToStore && macToStore.length < 4 ? 
    setMacToStore([...macToStore, macPlaceHolder]) :
    alert("Não é possível cadastrar mais do que 4 dispositivos por vez.")
  }

  function addMacsToDeviceList(mac: string, index: number) {
    macToStore[index] =  mac
    devicesToCreate.macs = macToStore
    setDevicesToCreate(devicesToCreate)
    console.log(devicesToCreate)
  }



  async function searchCpf(cpf: string) {
    setLoadingDevices(true)
    devicesToCreate.cpf = cpf
    setDevicesToCreate(devicesToCreate)
    if (cpf.length === 11) {
      console.log("Procurando CPF: "+cpf)
      await getDevicesWithCpf(cpf)
    }
    
    if (cpf.length === 0) {
      setLoadingDevices(false)
    }
  }

  useEffect( () => {
    async function start() {
      setMacToStore([macPlaceHolder]);
      setLoadingGroups(true);
      setLoadingDeviceTypes(true);
      await getGroups()
      await getDeviceTypes()
    }
    start()
  }, [])

  return <>
    <Container>

      <ContentActions>
        <InputForm labelName="CPF" columns="1fr 3fr" onChange={ (event) => { searchCpf(event.target.value)}} maxLength={11} />
        <MoveButton>
          <ActionButton text="+" action={addMacsInputsToStore}/>
        </MoveButton>
      </ContentActions>

      <ContentMACs>
        { macToStore && macToStore.length > 0 ?
            macToStore.map( (mac, index) => {
              return <InputForm labelName={"MAC"+(index+1)} placeholder={mac} key={index} columns="1fr 3fr" onChange={ (event) => { addMacsToDeviceList(event.target.value, index)}} maxLength={12} />
            })
          :
            <Loading />
        }
      </ContentMACs>

      <ContentGroups>
        {
          groups && groups.length > 0 && !loadingGroups && selectedGroup ?
            groups.map( (group) => {
              return <GroupComponent isActive={selectedGroup.id === group.id} key={group.id} group={group} action={ () => {setSelectedGroup(group)}} />
            } )
          :
            <Loading />
        }
      </ContentGroups>

      <ContentTypeOfDevices>
        {
          deviceTypes && deviceTypes.length > 0 && !loadingDeviceTypes && selectedDeviceType ?
            deviceTypes.map( (device) => {
              return <GroupComponent isActive={selectedDeviceType.id === device.id} key={device.id} group={device} action={ () => {setSelectedDeviceType(device)}} />
            } )
          :
            <Loading />
        }
      </ContentTypeOfDevices>

    </Container>
  </>
}