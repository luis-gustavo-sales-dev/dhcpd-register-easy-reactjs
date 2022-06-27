import { useState } from "react";
import { Group } from "../../entities/Group";
import GroupComponent from "../GroupComponent";
import { Container } from "./style";

interface GroupToList extends Group {
  isActive?: boolean;
}

interface GroupListComponentProps {
  groups?: Group[]
}

export default function GroupListComponent({ groups }:GroupListComponentProps) {

  let tempGroupsToList: GroupToList[] = 
    (groups && groups.length > 0) ? 
      groups : 
      [
        {
          id: 1,
          name: "Servidores",
          isActive: true
        },
        {
          id: 2,
          name: "Terceirizados"
        },
        {
          id: 3,
          name: "Temporario"
        },
        {
          id: 4,
          name: "Bolsitas"
        }
      ]

  const [groupsToList, setGroupsToList] = useState([...tempGroupsToList]);

  

  function handleClick(group: GroupToList) {
    console.log(`Group id: ${group.id}`);
    groupsToList.map((g) => {
      g.isActive = g.id === group.id ? true : false; 
    })
    console.log(groupsToList)
    setGroupsToList([...groupsToList]);
  }

  return (
    <Container> 
      {
        groupsToList.map( (g) => {
          return <GroupComponent 
            key={g.id}
            isActive={ g.isActive || false } 
            group={g} 
            action={ () => { handleClick(g) }} />
        })
      }
    </Container>
  )
}