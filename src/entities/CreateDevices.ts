import { DeviceType } from "./DeviceType"

export interface CreateDevices {
  cpf: string,
  ids: string[],
  group: {
    name: string
  },
  deviceType: DeviceType
}