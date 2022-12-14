
import {Iproducts} from "../models/Iproducts"
import { Product } from '../models/products';



export function loadToLocalStorage (products: Iproducts []){
    localStorage.setItem ("productList", JSON.stringify(products));
}

export function loadFromlocalStorage () {
  let products : Product [] = (JSON.parse(localStorage.getItem("productList") || "[]"))
      .map (( products:Product )=>{
      return new Product(products.Iproduct)
  })
  return products;
}



