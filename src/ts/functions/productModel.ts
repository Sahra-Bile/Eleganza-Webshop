import { Iproducts } from '../models/Iproducts';
import { ProductDetails } from '../models/productData';
import { Product } from '../models/products';

//! funtion för att öppna en produkt 
  export const displayModelProducts = (id:number) =>{

let modalContainer:HTMLDivElement = document.getElementById("modalContainer") as HTMLDivElement;

modalContainer.innerHTML = "";


let productImg:HTMLImageElement = document.getElementById('modalImg') as HTMLImageElement ;

let modalTitle:HTMLParagraphElement = document.getElementById('modalTitle')as HTMLParagraphElement;


let modeldesc:HTMLSpanElement = document.getElementById('modeldesc')as HTMLSpanElement;

let modalTotalPrice:HTMLParagraphElement = document.getElementById('modalTotal') as HTMLParagraphElement;


let amountInput:HTMLInputElement = document.getElementById('productModalAmount') as HTMLInputElement;

 let closeProductsModal:HTMLButtonElement = document.getElementById('closeProductsModal') as HTMLButtonElement;


  modalContainer.className = "showProduct-modal";

let book = ProductDetails.find( (book) => book.id === id);
 if(book){
 productImg.src = book.url;
 modalTitle.innerText = book.title;
 modeldesc.innerHTML = book.desc;
 modalTotalPrice.innerText = ` total amount: ${book.price}`


// productImg.src = ProductDetails[id].url;
//  modalTitle.innerText = ProductDetails[id].title;
//  modeldesc.innerHTML = ProductDetails[id].desc;
//  modalTotalPrice.innerText = ` total amount: ${ProductDetails[id].url}`;

let totalprice: number;
amountInput.addEventListener("input", (e:Event) =>{
    e.target
  if (!amountInput.value) return 
  totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
  if (amountInput.value === "2")
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
  if (amountInput.value === "3")
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
    modalTotalPrice.innerText = `Total amout: ${totalprice} SEK`;
  
});

 }
//!stänga fönstret Modal
//! varför  closeProductsModal is null??
closeProductsModal.addEventListener("click", () => {
  modalContainer.className = "";
 
  });

 }
