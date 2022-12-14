
import { Iproducts } from '../models/Iproducts';
import{ProductDetails} from "../models/productData" 
import { loadToLocalStorage } from './loadToAndFromLocalStorage';
import { displayModelProducts } from './modelAddToBaket';

let shoppingCart = document.getElementById('shopping-cart') as HTMLDivElement
let cartAmount = document.getElementById('cartAmount') as HTMLDivElement;

 export function createHTMLForProducts(){

let mainProducts: HTMLDivElement = document.getElementById("main-products")as HTMLDivElement;

	mainProducts.innerHTML = "";

  for(let i = 0; i < ProductDetails.length; i++){
  
   let productDiv:HTMLDivElement = document.createElement('div');

   let imgWrapper:HTMLDivElement = document.createElement('div');

   let ImgTag:HTMLImageElement = document.createElement('img');

   let title:HTMLParagraphElement = document.createElement('p');

   let desc:HTMLParagraphElement = document.createElement('p');

   let price:HTMLParagraphElement = document.createElement('p');

   title.innerHTML = ProductDetails[i].title
   ImgTag.src = ProductDetails[i].url;
  
   desc.innerHTML = ProductDetails[i].desc;
   price.innerHTML = `${ ProductDetails[i].price}.SEK`;


// console.log(displayModelProducts(ProductDetails[i].id));
   

  //! placera dem

  productDiv.classList.add("product-main__product")
  imgWrapper.classList.add("product-main__product__img-wrapper")
  desc.classList.add("product-main__product__desc")
  title.classList.add("product-main__product__product-title")
  price.classList.add("product-main__product__price")
  ImgTag.classList.add("product-main__product__img-wrapper__img")
  mainProducts.appendChild(productDiv);
  productDiv.appendChild(title);
  productDiv.appendChild(imgWrapper);
  imgWrapper.appendChild(ImgTag);
  productDiv.appendChild(price);
  // productDiv.appendChild(desc);

  imgWrapper.addEventListener("click", (e:MouseEvent) => {
    displayModelProducts(ProductDetails[i].id);
    initSite();
    loadToLocalStorage(ProductDetails);
    addToCart(ProductDetails[i].id);
     createHTMLForProducts();

    
  });

  }
}

let inCart:Iproducts[] = [];

export function initSite() {
  let itemCart = localStorage.basketList;
  if (itemCart) {
      inCart = JSON.parse(itemCart);
  }
 let shop = document.getElementById("shop") as HTMLDivElement;
  shop.innerHTML = inCart.length.toString();
 
}

export function addToCart(id:number) {
  let itemToAdd = id;
  for (let i = 0; i < ProductDetails.length; i++) {
      if (itemToAdd === ProductDetails[i].id) {
          inCart.push(ProductDetails[i]);
          let jsonString = JSON.stringify(inCart);
          localStorage.basketList = jsonString;
      }
  }
}
