import DefaultScreenGrids from "../../components/DefaultScreenGrids";
import GroupListComponent from "../../components/GroupListComponent";
import { Container } from "./style";


export default function GroupsScreen() {
  return <>
    <h1>Grupos</h1>
    <DefaultScreenGrids>
      <GroupListComponent />
      <GroupListComponent />
    </DefaultScreenGrids>
  </>
}