import { DeviceType } from "./DeviceType"

export interface Device {
  ids: {
    cpf: string,
    mac: string
  },
  group: {
    name: string
  },
  devicetype: DeviceType
}