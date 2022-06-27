import GroupComponent from "../../components/GroupComponent";

export default function GroupsScreen() {
  return <>
    <h1>Grupos</h1>
    <GroupComponent name="Servidores" isActive action={() => console.log("Clicked!")}/>
    <GroupComponent name="Terceirizados" isActive={false} action={() => console.log("Clicked!")}/>
  </>
}