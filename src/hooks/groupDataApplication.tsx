import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Group } from "../entities/Group";
import { api } from "../services/api";


interface GroupDataApplicationProps {
  children: ReactNode;
}

interface ContextApplicationData {
  groups: Group[];
  // Tem que retornar uma promise de void aqui
  getGroups: () => Promise<void>;
  selectedGroup: Group;
  setSelectedGroup: (group: Group) => void;
  loadingGroups: boolean;
  setLoadingGroups: (loading: boolean) => void;
}

const GroupDataApplicationContext = createContext( {} as ContextApplicationData)

function GroupDataApplicationProvider({ children }: GroupDataApplicationProps) {

  const apiGatewayUrl = "dhcpregister"
  const dhcpGroupUrl = apiGatewayUrl+"/deviceusergroup"



  const [groups, setGroups] = useState<Group[]>([] as Group[]);
  const [selectedGroup, setSelectedGroup] = useState({} as Group);
  const [loadingGroups, setLoadingGroups] = useState(true);

  async function getGroups() {
    await api.get(dhcpGroupUrl+"?name=")
      .then( response => { 
        const tempGroups: Group[] = [...response.data] ;
        setGroups(tempGroups);
      });
  }

  useEffect( () => {
    async function start() {
      setSelectedGroup(groups[0])
      setLoadingGroups(false)
    }
    start()
  }, [groups])

  useEffect( () => {
    async function start() {
      await getGroups()
    }
    start()
  }, [])

  return (
    <GroupDataApplicationContext.Provider
      value={
        {
          groups,
          selectedGroup,
          setSelectedGroup,
          loadingGroups,
          getGroups,
          setLoadingGroups
        }
      }>
      {children}
    </GroupDataApplicationContext.Provider>)

}

function useGroupContext() {
  const context= useContext(GroupDataApplicationContext);
  return context;
}

export { GroupDataApplicationProvider, useGroupContext }