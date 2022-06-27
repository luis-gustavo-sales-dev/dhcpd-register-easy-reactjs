import { createContext, ReactNode, useContext, useState } from "react";
import { Group } from "../entities/Group";

interface DataApplicationProps {
  children: ReactNode;
}

interface ContextApplicationData {
  groups: Group[];
  // Tem que retornar uma promise de void aqui
  getGroups: () => void;
  selectedGroup: Group;
  setSelectedGroup: (group: Group) => void;
  loadingGroups: boolean;
}

const DataApplicationContext = createContext( {} as ContextApplicationData)

function DataApplicationProvider({ children }: DataApplicationProps) {

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

  function getGroups() {

    setLoadingGroups(true)
    // fetch() ou axios

    // useState é lento. Só sete algo quando tiver certeza que já tem.
    setGroups([...fakeGroupList]);
    console.log(fakeGroupList)
    console.log(groups[0])
    setSelectedGroup(fakeGroupList[0]);
    setLoadingGroups(false);
    console.log(loadingGroups)
      
  }

  return (
    <DataApplicationContext.Provider
      value={
        {
          groups,
          getGroups,
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