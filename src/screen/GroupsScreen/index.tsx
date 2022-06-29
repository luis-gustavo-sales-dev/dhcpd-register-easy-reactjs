import { useEffect } from "react";
import DefaultScreenGrids from "../../components/DefaultScreenGrids";
import GroupListComponent from "../../components/Groups/GroupListComponent";
import ShowGroupComponent from "../../components/Groups/ShowGroupComponent";
import { useGroupContext } from "../../hooks/groupDataApplication";
import { useLocation } from "react-router-dom";


export default function GroupsScreen() {
  const { groups, getGroups, selectedGroup, setSelectedGroup, loadingGroups, setLoadingGroups } = useGroupContext();

  const location = useLocation();

  async function loadGroups() {
    // Aqui tem que ser uma chamada assincrona
    // Converte o dados para JSON (ou não se usar axios)
    
    setSelectedGroup(groups[0])
    setLoadingGroups(false)



  }

  useEffect( () => {
    async function start() {
      await getGroups();
      await loadGroups();
    }

    start();
    
  },[location]);

  return <>
    <DefaultScreenGrids colums="1fr 3fr">
      { (!loadingGroups && selectedGroup && groups) ? 
      <>
        <GroupListComponent groups={groups} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} /> 
         <ShowGroupComponent selectedGroup={selectedGroup} />
      </>
        : null}
     
    </DefaultScreenGrids>
  </>
}