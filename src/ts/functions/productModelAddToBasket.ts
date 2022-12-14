import {Iproducts} from "../models/Iproducts" //! interface
import {Product} from "../models/products" //! class 
import{ProductDetails} from "../models/productData" //! lagrat alla produkter i en array

 export const productModalAddToBasket = () =>{
let modelContainer:HTMLDivElement = document.getElementById('model-container')as HTMLDivElement;
let modalTitle:HTMLParagraphElement = document.querySelector('.model-container__body__title')as HTMLParagraphElement;
let addButton:HTMLButtonElement = document.querySelector(".model-container__body__addBtn") as HTMLButtonElement;
let modalAmountInput:HTMLInputElement = document.querySelector(".model-container__body__input") as HTMLInputElement;
let modalDescriptionSpan:HTMLSpanElement = document.querySelector(".model-container__body__desc") as HTMLSpanElement;

/**
*! Tar titeln Modal. Kollar min lista över produkter(products[]) och hittar den som har samma namn som modal-titel .   
  */
 addButton.addEventListener('click', () =>{
  let arriveProduct: Iproducts;
   let productTittle:string = modalTitle.innerHTML;
   ProductDetails.forEach((product) => {
     productTittle == product.title? (arriveProduct = product) : null;
     return new Product(arriveProduct);
   });

  if (!localStorage.getItem("cart-List")) {
    localStorage.setItem("cart-List", "[]");
  }
  let cartList : Product [] = (JSON.parse(localStorage.getItem("cartList") || "[]"))
  .map ((cartList:Product )=>{
  return new Product(cartList.Iproduct);
 });
return cartList;
   
    modelContainer.className = "";
// kalla en funtion som skall uppdatera produkten i checkout nåt form av dropworn 
 
});
}