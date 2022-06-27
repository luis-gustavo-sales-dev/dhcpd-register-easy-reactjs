import DefaultScreenGrids from "../../components/DefaultScreenGrids";
import GroupListComponent from "../../components/Groups/GroupListComponent";
import ShowGroupComponent from "../../components/Groups/ShowGroupComponent";
import { Container } from "./style";


export default function GroupsScreen() {
  return <>
    <DefaultScreenGrids>
      <GroupListComponent />
      <ShowGroupComponent />
    </DefaultScreenGrids>
  </>
}