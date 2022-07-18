import InputForm from "../../InputForm";
import ActionButton from "../../ActionButton";
import { Container, ContentActions, ContentMACs, ContentGroups, ContentTypeOfDevices, MoveButton } from "./style";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useGroupContext } from "../../../hooks/groupDataApplication";
import GroupComponent from "../../Groups/GroupComponent";
import { useDeviceTypeContext } from "../../../hooks/deviceTypeDataApplication";
import Loading from "../../Loading";
import { useDeviceContext } from "../../../hooks/deviceDataApplication";

export default function DeviceInputsComponent() {

  const { groups, getGroups, selectedGroup, setSelectedGroup, loadingGroups, setLoadingGroups } = useGroupContext();

  const { deviceTypes, getDeviceTypes, selectedDeviceType, setSelectedDeviceType, loadingDeviceTypes, setLoadingDeviceTypes } = useDeviceTypeContext();

  const { cpf, setCpf, macs, setMacs,  getDevicesWithCpf, setLoadingDevices, devicesToCreate, setDevicesToCreate } = useDeviceContext();

  const cpfInputRef = useRef<HTMLInputElement>(null);

  // let [macToStore, setMacToStore] = useState<mac[]>([]);

  const macMessagePlaceHolder = "exemplo: ab00cd789800"
  const initialMacValue = ''
  

  function addMacsInputsToStore() {
    // Tem que colocar um limite aqui
    macs && macs.length < 4 ? 
    setMacs([...macs, initialMacValue]) :
    alert("Não é possível cadastrar mais do que 4 dispositivos por vez.")
  }

  function addMacsToDeviceList(mac: string, index: number) {
    macs[index] = mac
    devicesToCreate.macs = macs
    setMacs([...macs])
    setDevicesToCreate(devicesToCreate)
    console.log(devicesToCreate)
  }

  function handleOnClickClearInputMACFieldButton(index: number){
    macs[index] = ''
    devicesToCreate.macs = macs
    setMacs([...macs])
    setDevicesToCreate(devicesToCreate)
  }

  function handleOnClickClearInputCPFFieldButton(){
    setCpf('')
    devicesToCreate.cpf = ''
    setDevicesToCreate(devicesToCreate)
    // cpfInputRef.current && cpfInputRef.current.innerText = ""
  }



  async function searchCpf(cpf: string) {
    setCpf(cpf)
    devicesToCreate.cpf = cpf
    setDevicesToCreate(devicesToCreate)
    console.log("chamei procurar cpf")
    if (cpf.length === 11) {
      setLoadingDevices(true)
      console.log("Procurando CPF: "+cpf)
      await getDevicesWithCpf(cpf)
    }
    
    if (cpf.length === 0) {
      setLoadingDevices(false)
    }
  }

  useEffect( () => {
    async function start() {
      setMacs([initialMacValue]);
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
        <InputForm labelName="CPF" columns="1fr 3fr" defaultValue={cpf} value={cpf} onChange={ (event) => { searchCpf(event.target.value)}} maxLength={11} showClear onClickClearInputFieldButton={() => handleOnClickClearInputCPFFieldButton()} />
        <MoveButton>
          <ActionButton text="+" action={addMacsInputsToStore}/>
        </MoveButton>
      </ContentActions>

      <ContentMACs>
        { macs && macs.length > 0 ?
            macs.map( (mac, index) => {
              return <InputForm 
              labelName={"MAC"+(index+1)}
              placeholder={macMessagePlaceHolder} 
              columns="1fr 3fr" 
              value={macs[index]}
              onChange={ (event) => { addMacsToDeviceList(event.target.value, index)}} 
              maxLength={12} showClear onClickClearInputFieldButton={ () => handleOnClickClearInputMACFieldButton(index)} />

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