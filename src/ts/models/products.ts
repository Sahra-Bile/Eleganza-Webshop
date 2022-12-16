 import {Iproducts} from "./Iproducts";

//! Iproduct har nu  color, amount, title,desc, img, id och price
export class Product  {
constructor( public product: Iproducts, public  amount:number) {
    
  }
}