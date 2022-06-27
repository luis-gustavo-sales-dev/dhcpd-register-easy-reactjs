import { Group } from "../../entities/Group";
import { Container } from "./style";

interface GroupProps {
  isActive: boolean;
  action: () => void;
  group: Group
}

export default function GroupComponent({ group, isActive, action }:GroupProps) {
  console.log("isActive: " +  isActive)
  return <>
    <Container 
      isActive={isActive} 
      onClick={action} >
        {group.name}
    </Container>
  </>
}