import { DeviceType } from "./DeviceType"

export interface CreateDevices {
  cpf: string,
  macs: string[],
  group: {
    id: number
  },
  deviceType: {
    id: number
  }
}