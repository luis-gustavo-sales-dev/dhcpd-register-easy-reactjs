import { Group } from "../../../entities/Group";
import { ActionButton } from "../../ActionButton";
import InputForm from "../../InputForm";
import { ActionButtons, Container, Fields } from "./style";

interface GroupListComponentProps {
  selectedGroup: Group
}

export default function ShowGroupComponent ({ selectedGroup }: GroupListComponentProps) {



  return (
    <Container>
      <Fields>
        <InputForm labelName="Nome do Grupo" inputValue={selectedGroup.name}/>
        <>
          {
            selectedGroup.iprangegroup && selectedGroup.iprangegroup.length > 0 ? 
              selectedGroup.iprangegroup.map(
                (ip) => {
                  console.log(ip)
                  return <InputForm key={ip.range} labelName="Range de IP" inputValue={ip.range}/>
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