import InputForm from "../../InputForm";
import ActionButton from "../../ActionButton";
import { Container, ContentActions, ContentMACs, ContentGroups, ContentTypeOfDevices } from "./style";
import { useEffect, useState } from "react";
import { useGroupContext } from "../../../hooks/groupDataApplication";
import GroupComponent from "../../Groups/GroupComponent";
import { useDeviceTypeContext } from "../../../hooks/deviceTypeDataApplication";
import Loading from "../../Loading";

export default function DeviceInputsComponent() {

  const { groups, getGroups, selectedGroup, setSelectedGroup, loadingGroups, setLoadingGroups } = useGroupContext();

  const { deviceTypes, getDeviceTypes, selectedDeviceType, setSelectedDeviceType, loadingDeviceTypes, setLoadingDeviceTypes } = useDeviceTypeContext();

  let [macToStore, setMacToStore] = useState([] as string[]);
  const macPlaceHolder: string = "exemplo: ab00cd789800"
  

  function addMacsToStore() {
    // Tem que colocar um limite aqui
    macToStore && macToStore.length < 5 ? 
    setMacToStore([...macToStore, macPlaceHolder]) :
    alert("Não é possível cadastrar mais do que 5 dispositivos por vez.")
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
        <InputForm labelName="CPF" columns="1fr 3fr" onChange={ (event) => { console.log(event.target.value)}} />
        <ActionButton text="+" action={addMacsToStore}/>
      </ContentActions>

      <ContentMACs>
        { macToStore && macToStore.length > 0 ?
            macToStore.map( (mac, index) => {
              return <InputForm labelName={"MAC"+(index+1)} placeholder={mac} key={index} columns="1fr 3fr" onChange={ (event) => { console.log({} + event.target.value)}} />
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