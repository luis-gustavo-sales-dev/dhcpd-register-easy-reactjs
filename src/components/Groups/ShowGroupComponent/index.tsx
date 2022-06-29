import { useEffect, useState } from "react";
import { Group } from "../../../entities/Group";
import ActionButton from "../../ActionButton";
import InputForm from "../../InputForm";
import { ActionButtons, Container, Fields } from "./style";

interface GroupListComponentProps {
  selectedGroup: Group,
}

export default function ShowGroupComponent ({ selectedGroup }: GroupListComponentProps) {

  const [animate, setAnimate] = useState("no-animation")


  useEffect( () => {
    setAnimate("no-animation")
    
    // console.log(animate)

    setTimeout( () => {
      setAnimate("animation")
    }, 200)
  }, [selectedGroup]);



  return (
    <Container className={animate}>
      <Fields>
        <InputForm labelName="Nome do Grupo" columns="1fr 3fr" value={selectedGroup.name} onChange={ (event) => {console.log("Nome do grupo: " + event.target.value)}}/>
        <>
          {
            selectedGroup.iprangegroup && selectedGroup.iprangegroup.length > 0 ? 
              selectedGroup.iprangegroup.map(
                (ip) => {
                  // console.log(ip)
                  return <InputForm key={ip.range} labelName="Range de IP" columns="1fr 3fr" value={ip.range} onChange={ (event) => {console.log("Nome do grupo: " + event.target.value)}}/>
                }
              )
            : null
          }
        </>
      </Fields>
      <ActionButtons>
        <ActionButton text="UPDATE" action={ () => console.log("Update Group!")}  />
      </ActionButtons>
    </Container>
    
  );
}