import DefaultScreenGrids from "../../components/DefaultScreenGrids";
import DeviceInputsComponent from "../../components/Devices/DeviceInputsComponent";

export default function DevicesScreen() {
  return <>
    <>
    <DefaultScreenGrids colums="2fr 2fr">
      <DeviceInputsComponent />
      <div>coluna 2</div>
    </DefaultScreenGrids>
  </>
  </>
}