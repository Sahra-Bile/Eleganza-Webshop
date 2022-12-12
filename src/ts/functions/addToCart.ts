
import {Iproducts} from "../models/Iproducts" //! interface
import {StorageProduct} from "../models/products" //! class 
import{ProductDetails} from "../models/productData" //! lagrat alla produkter i en array


 export function saveProductsInLocalStora(){

    //! spara produckten i local storage
    localStorage.setItem("product", JSON.stringify(ProductDetails));
    //! om cart inte finns redan i local storage, vill inte överskriva data 
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
    }
  }

  //! global variabler tillgång till dem inside funtion 
  let products = JSON.parse(localStorage.getItem("product") ||"[]");
  let cart  = JSON.parse(localStorage.getItem("cart") || "[]");

 export const addItemTOCart = (productId:number)=>{
/**
  * ! går genom alla produkter och söker produkten <>
  *   
  * ?  som matchar id som vi har som en argument
  */

    let product = ProductDetails.find( (product) =>{
      return product.id === productId;

    });
    if(cart.length === 0){
      cart.push(product); //! om cart array är tom lägg till id som vi hittade
    }
//     }else{
//       //!om produkten inte existerar cart array find metoden returer undefind 
//       //! om det existerar find metoden kommer returnera och spara produkten i res variable
//      let res = cart.find(item => item.id === productId) //!fråga sebastian hjälp
//     if(res === undefined){
//       cart.push(product);
//     }
//     }
//   }
// //   //! kommer överskriva gmala värde till nya 
//    localStorage.setItem("cart", JSON.stringify(cart));

//   console.log( addItemTOCart(1));
    