export interface ICourse {
  name: string;
  prices: TRange;
}

export type TRange = (null | number)[];
