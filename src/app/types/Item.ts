import { IProduct } from "./Product";

export interface IItem {
  id: string;
  product: IProduct;
  quant: number;
}
