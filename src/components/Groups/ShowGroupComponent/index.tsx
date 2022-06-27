import { ActionButton } from "../../ActionButton";
import InputForm from "../../InputForm";
import { ActionButtons, Container, Fields } from "./style";

export default function ShowGroupComponent () {
  return (
    <Container>
      <Fields>
        <InputForm labelName="Nome do Grupo" />
        <InputForm labelName="Range de IP"/>
        <InputForm labelName="Range de IP"/>
        <InputForm labelName="Range de IP"/>
      </Fields>
      <ActionButtons>
        <ActionButton text="UPDATE" action={ () => console.log("Update Group!")}  />
      </ActionButtons>
    </Container>
    
  );
}