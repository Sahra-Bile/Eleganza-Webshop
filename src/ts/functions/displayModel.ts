
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

let closeProductsModal: HTMLButtonElement = document.getElementById('closeBtn-modal') as HTMLButtonElement;


  export const displayModelProducts = (id:number) =>{

/**
 * ! modal produkten baserat på vilken produkt som klickades på hemsidan.
 */
//! öpnna modal
modalContainer.classList.add('showProduct-modal');

 modalImg.src = ProductDetails[id].url;
 
  modalTitle.innerText = ProductDetails[id].title;
  modeldesc.innerText = ProductDetails[id].desc
  modalTotalPrice.innerText = `total amount: ${ProductDetails[id].price}SEK`;
/**
 * !räkna ihop och uppdatera totala summan baserat antal av produkter man valde
 */
let totalprice: number;
amountInput.addEventListener("input", (e) => {
  if (!amountInput.value) return;
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
  if (amountInput.value === "2")
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
  if (amountInput.value == "3")
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
    modalTotalPrice.innerText = `Total amout: ${totalprice} SEK`;
});
colorInput.addEventListener("input", (e) => {
  if (!colorInput.value) return;
  if (colorInput.value === "")
   displayMessage("välj en färg");

  if (colorInput.value === "1" )
     colorInput.value;
});

//!stänga fönstret Modal

closeProductsModal.addEventListener("click", (e) => {
  modalContainer.classList.remove('showProduct-modal');
});

  }
//! display en message 
 export function displayMessage(message:string){
  let messageP:HTMLParagraphElement = document.createElement("p");
  messageP.innerText = message;

 }