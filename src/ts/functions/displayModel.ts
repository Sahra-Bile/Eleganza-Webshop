
import {Iproducts} from "../models/Iproducts" //! interface
import {StorageProduct} from "../models/products" //! class 
import{ProductDetails} from "../models/productData" //! lagrat alla produkter i en array


let modalContainer: HTMLDivElement = document.createElement(
  "modal-container"
) as HTMLDivElement;

let modalImg: HTMLImageElement = document.getElementById("modal-img") as HTMLImageElement;

let modalTitle: HTMLParagraphElement = document.getElementById( "modal-title") as HTMLParagraphElement;

let modeldesc:HTMLSpanElement = document.getElementById("modal-desc")as HTMLSpanElement;

let modalTotalPrice: HTMLParagraphElement = document.getElementById( "modal-total") as HTMLParagraphElement;

let colorInput: HTMLSelectElement = document.getElementById( "modal-color-label") as HTMLSelectElement;

let amountInput: HTMLInputElement = document.getElementById("modal-amount-label") as HTMLInputElement;

let closeProductsModal: HTMLButtonElement = document.getElementById("closeBtn-modal") as HTMLButtonElement;

/**
  * ! 
  * ? 
  *  ? .  
  */
  export const displayModelProducts = (id:number) =>{

/**
 * ! modal produkten baserat på vilken produkt som klickades på hemsidan.
 */

modalContainer.classList.add('showProductModal');

 modalImg.src = ProductDetails[id].img;
  modalTitle.innerText = ProductDetails[id].title;
  modeldesc.innerText = ProductDetails[id].desc
  modalTotalPrice.innerText = `total amount: ${ProductDetails[id].price}SEK`;
/**
 * !räkna ihop och uppdatera totala summan baserat antal av produkter man valde
 */

  let totalPrice: number;
 amountInput.addEventListener('click', () =>{

  if(!amountInput.value ){
    return totalPrice = parseInt(amountInput.value) * ProductDetails[id].price
  
    } if(amountInput.value.length ===2){
      return totalPrice = parseInt(amountInput.value) * ProductDetails[id].price
    
      }
 }); 
  colorInput.addEventListener('click', () =>{
    if(!colorInput.value){
   return  ProductDetails[id].color.color_1
    }
    if(colorInput.value === ProductDetails[id].color.color_2){
      return  ProductDetails[id].color.color_2;
    } if(colorInput.value === ProductDetails[id].color.color_3){
      return ProductDetails[id].color.color_3
    }
  });

 //!stänga Modal
 closeProductsModal.addEventListener("click", (e) => {
  modalContainer.innerHTML = "";
});

 }

//! display en message 
 export function displayMessage(message:string){
  let messageP:HTMLParagraphElement = document.createElement("p");
  messageP.innerText = message;

 }