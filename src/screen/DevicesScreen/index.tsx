import DefaultScreenGrids from "../../components/DefaultScreenGrids";
import DeviceInputsComponent from "../../components/Devices/DeviceInputsComponent";
import DeviceListComponent from "../../components/Devices/DeviceListComponent";

export default function DevicesScreen() {
  return <>
    <>
    <DefaultScreenGrids colums="2fr 2fr">
      <DeviceInputsComponent />
      <DeviceListComponent />
    </DefaultScreenGrids>
  </>
  </>
}