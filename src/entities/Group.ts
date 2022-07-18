export interface Group {
  id: number;
  name: string;
  iprangegroup?:
    {
      range: string
    }[]
}