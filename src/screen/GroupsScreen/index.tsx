import { useEffect } from "react";
import DefaultScreenGrids from "../../components/DefaultScreenGrids";
import GroupListComponent from "../../components/Groups/GroupListComponent";
import ShowGroupComponent from "../../components/Groups/ShowGroupComponent";
import { useGroupContext } from "../../hooks/dataapplication";
import { Container } from "./style";


export default function GroupsScreen() {
  const { groups, getGroups, selectedGroup, setSelectedGroup, loadingGroups } = useGroupContext();

  function loadGroups() {
    // Aqui tem que ser uma chamada assincrona
    getGroups();
    // Converte o dados para JSON (ou não se usar axios)
    console.log("loadGroups" + groups)

  }

  useEffect( () => {
    loadGroups()
  },[]);

  return <>
    <DefaultScreenGrids>
      { (!loadingGroups && selectedGroup && groups && groups.length > 0) ? 
      <>
        <GroupListComponent groups={groups} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} /> 
         <ShowGroupComponent selectedGroup={selectedGroup} />
      </>
        : null}
     
    </DefaultScreenGrids>
  </>
}