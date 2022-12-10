 import {Iproducts} from "./Iproducts";

//! Iproduct har nu  color, amount, title,desc, img, id och price
export class StorageProduct {
constructor( public Iproduct: Iproducts, public color: string, public amount: number) {
    
  }
}