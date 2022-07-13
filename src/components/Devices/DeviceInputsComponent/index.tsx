import InputForm from "../../InputForm";
import ActionButton from "../../ActionButton";
import { Container, ContentActions, ContentMACs, ContentGroups, ContentTypeOfDevices, MoveButton } from "./style";
import { useEffect, useState } from "react";
import { useGroupContext } from "../../../hooks/groupDataApplication";
import GroupComponent from "../../Groups/GroupComponent";
import { useDeviceTypeContext } from "../../../hooks/deviceTypeDataApplication";
import Loading from "../../Loading";
import { useDeviceContext } from "../../../hooks/deviceDataApplication";
import { useTestDeviceContext } from "../../../hooks/hookTesteDataApplication";

export default function DeviceInputsComponent() {

  const { groups, getGroups, selectedGroup, setSelectedGroup, loadingGroups, setLoadingGroups } = useGroupContext();

  const { deviceTypes, getDeviceTypes, selectedDeviceType, setSelectedDeviceType, loadingDeviceTypes, setLoadingDeviceTypes } = useDeviceTypeContext();

  const { getDevicesWithCpf, setLoadingDevices, devicesToCreate, setDevicesToCreate } = useDeviceContext();

  const { testDevicesToCreate, setTestDevicesToCreate,  } = useTestDeviceContext();

  interface mac {
    value: string;
  }

  // let [macToStore, setMacToStore] = useState<mac[]>([]);

  const macMessagePlaceHolder = "exemplo: ab00cd789800" 

  const initialMacValue: string = ""
  

  function addMacsInputsToStore() {
    // Tem que colocar um limite aqui
    testDevicesToCreate.macs && testDevicesToCreate.macs.length < 4 ? 
    testDevicesToCreate.macs.push('') :
    alert("Não é possível cadastrar mais do que 4 dispositivos por vez.")
    setTestDevicesToCreate(testDevicesToCreate) 
  }

  function addMacsToDeviceList(mac: string, index: number) {
    testDevicesToCreate.macs[index] = mac
    setTestDevicesToCreate(testDevicesToCreate) 

    console.log(testDevicesToCreate)
  }

  function handleOnClickClearInputFieldButton(index: number){
    testDevicesToCreate.macs[index] = ''
    setTestDevicesToCreate(testDevicesToCreate) 
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
      testDevicesToCreate.macs.push(initialMacValue)
      setTestDevicesToCreate(testDevicesToCreate) 

      setLoadingGroups(true);
      setLoadingDeviceTypes(true);
      await getGroups()
      await getDeviceTypes()
    }
    start()
  }, [])

  useEffect( () => {
    setTestDevicesToCreate(testDevicesToCreate)
  }, [testDevicesToCreate])

  return <>
    <Container>

      <ContentActions>
        <InputForm labelName="CPF" columns="1fr 3fr" defaultValue={devicesToCreate.cpf}  onChange={ (event) => { searchCpf(event.target.value)}} maxLength={11} />
        <MoveButton>
          <ActionButton text="+" action={addMacsInputsToStore}/>
        </MoveButton>
      </ContentActions>

      {/*
        <ContentMACs>
          { macToStore && macToStore.length > 0 ?
              macToStore.map( (mac, index) => {
                return <InputForm 
                labelName={"MAC"+(index+1)}
                placeholder={macMessagePlaceHolder} 
                columns="1fr 3fr" 
                value={macToStore[index].value}
                onChange={ (event) => { addMacsToDeviceList(event.target.value, index)}} 
                maxLength={12} showClear onClickClearInputFieldButton={ () => handleOnClickClearInputFieldButton(index)} />

              })
            :
              <Loading />
          }
          
        </ContentMACs>
      
      */}

      <ContentMACs>
        { testDevicesToCreate.macs && testDevicesToCreate.macs.length > 0 ?
            testDevicesToCreate.macs.map( (mac, index) => {
              return <InputForm 
              labelName={"MAC"+(index+1)}
              placeholder={macMessagePlaceHolder} 
              columns="1fr 3fr" 
              value={testDevicesToCreate.macs[index]}
              onChange={ (event) => { addMacsToDeviceList(event.target.value, index)}} 
              maxLength={12} showClear onClickClearInputFieldButton={ () => handleOnClickClearInputFieldButton(index)} />

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