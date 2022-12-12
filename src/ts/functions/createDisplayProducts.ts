
import {Iproducts} from "../models/Iproducts" //! interface
import {StorageProduct} from "../models/products" //! class 
import{ProductDetails} from "../models/productData" //! lagrat alla produkter i en array
import { displayModelProducts } from './displayModel';

 export function createHTMLForProducts(){

const mainProducts: HTMLDivElement = document.getElementById("main-products")as HTMLDivElement;

	mainProducts.innerHTML = "";

  for(let i = 0; i < ProductDetails.length; i++){

   let productDiv:HTMLDivElement = document.createElement('div');

   let imgWrapper:HTMLDivElement = document.createElement('div');

   let ImgTag:HTMLImageElement = document.createElement('img');

   let title:HTMLParagraphElement = document.createElement('p');

   let desc:HTMLParagraphElement = document.createElement('p');

   let price:HTMLParagraphElement = document.createElement('p');

   title.innerHTML = ProductDetails[i].title
   ImgTag.src = ProductDetails[i].img;
   desc.innerHTML = ProductDetails[i].desc;
   price.innerHTML = `${ ProductDetails[i].price.toString()}.SEK`;


  //! placera dem

  productDiv.classList.add("product-main__product")
  imgWrapper.classList.add("product-main__product__img-wrapper")
  desc.classList.add("product-main__product__desc")
  title.classList.add("product-main__product__product-title")
  price.classList.add("product-main__product__price")
  mainProducts.appendChild(productDiv);
  productDiv.appendChild(title);
  productDiv.appendChild(imgWrapper);
 
  imgWrapper.appendChild(ImgTag);
  desc.ariaHidden;
  // productDiv.appendChild(desc);
  productDiv.appendChild(price);
  
 

  imgWrapper.addEventListener("click", (e) => {
    let item: HTMLElement = e.target as HTMLElement;
    let id: number = parseInt(item.id);
    displayModelProducts(id);
  });
  // imgWrapper.addEventListener("click", () =>{
  // window.open("/src/html/addToCart.html")
  // });

  }

}