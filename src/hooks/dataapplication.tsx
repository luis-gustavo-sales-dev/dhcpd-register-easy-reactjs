import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Group } from "../entities/Group";
import { api } from "../services/api";

interface DataApplicationProps {
  children: ReactNode;
}

interface ContextApplicationData {
  groups: Group[];
  // Tem que retornar uma promise de void aqui
  selectedGroup: Group;
  setSelectedGroup: (group: Group) => void;
  loadingGroups: boolean;
}

const DataApplicationContext = createContext( {} as ContextApplicationData)

function DataApplicationProvider({ children }: DataApplicationProps) {

  const apiGatewayUrl = "dhcpregister"
  const dhcpGroupUrl = apiGatewayUrl+"/deviceusergroup"

  const [groups, setGroups] = useState<Group[]>([] as Group[]);
  const [selectedGroup, setSelectedGroup] = useState({} as Group);
  const [loadingGroups, setLoadingGroups] = useState(true);

  const fakeGroupList: Group[] = [
        {
          id: 1,
          name: "Servidores",
          iprangegroup: [
            {
              range: "10.12.70.0/23"
            },
            {
              range: "10.10.70.0/23"
            }
          ]
        },
        {
          id: 2,
          name: "Terceirizados",
          iprangegroup: [
            {
              range: "10.12.72.0/23"
            },
            {
              range: "10.10.72.0/23"
            }
          ]
        },
        {
          id: 3,
          name: "Temporario",
          iprangegroup: [
            {
              range: "10.12.74.0/23"
            },
            {
              range: "10.10.74.0/23"
            }
          ]
        },
        {
          id: 4,
          name: "Bolsitas",
          iprangegroup: [
            {
              range: "10.12.76.0/23"
            },
            {
              range: "10.10.76.0/23"
            }
          ]
        }
      ]

  useEffect( () => {
    api.get(dhcpGroupUrl+"?name=")
      .then( response => { 
        console.log(response.data);

        const tempGroups: Group[] = response.data ;
        setGroups(tempGroups) });

    setSelectedGroup(groups[0]);
    setLoadingGroups(false);
  }, [])

  return (
    <DataApplicationContext.Provider
      value={
        {
          groups,
          selectedGroup,
          setSelectedGroup,
          loadingGroups
        }
      }>
      {children}
    </DataApplicationContext.Provider>)

}

function useGroupContext() {
  const context= useContext(DataApplicationContext);
  return context;
}

export { DataApplicationProvider, useGroupContext }