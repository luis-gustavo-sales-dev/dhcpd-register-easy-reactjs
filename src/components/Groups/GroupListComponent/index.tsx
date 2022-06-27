import { useState } from "react";
import { Group } from "../../../entities/Group";
import { useGroupContext } from "../../../hooks/dataapplication";
import GroupComponent from "../GroupComponent";
import { Container } from "./style";

interface GroupToList extends Group {
  isActive?: boolean;
}

interface GroupListComponentProps {
  groups: Group[],
  selectedGroup: Group,
  setSelectedGroup: (group: Group) => void;
}

export default function GroupListComponent({ groups, selectedGroup, setSelectedGroup }:GroupListComponentProps) {

  function handleClick(group: Group) {
    
    setSelectedGroup(group);
    console.log(`Selected group id: ${selectedGroup.id}`);

    
  }

  return (
    <Container> 
      {
        groups.map( (g) => {
          return <GroupComponent 
            key={g.id}
            isActive={ (selectedGroup && selectedGroup.id === g.id) ? true : false } 
            group={g} 
            action={ () => { handleClick(g) }} />
        })
      }
    </Container>
  )
}