
import { Iproducts } from '../models/Iproducts';
import{ProductDetails} from "../models/productData" 
import { Product } from '../models/products';

import { displayModelProducts } from './productModel';

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
   let moreInfo: HTMLButtonElement= document.createElement('button') ;
   moreInfo.innerHTML = "more info";


   ImgTag.src = ProductDetails[i].url;
   title.innerHTML = ProductDetails[i].title
   desc.innerHTML = ProductDetails[i].desc;
   price.innerHTML = `${ ProductDetails[i].price}.SEK`;

  //! placera dem

  productDiv.classList.add("product-main__product");
  imgWrapper.classList.add("product-main__product__img-wrapper");
  desc.classList.add("product-main__product__desc")
  title.classList.add("product-main__product__product-title");
  price.classList.add("product-main__product__price");
  ImgTag.classList.add("product-main__product__img-wrapper__img");
  moreInfo.classList.add("product-main__product__moreInfoBtn");
  mainProducts.appendChild(productDiv);
  productDiv.appendChild(title);
  productDiv.appendChild(imgWrapper);
  imgWrapper.appendChild(ImgTag);
  productDiv.appendChild(price);
  productDiv.appendChild(moreInfo);
  // productDiv.appendChild(desc);

  //!*Tar ID för den klickade produkten och anropar en funktion som visar en modal med produkten vilket index är lika med det hämtade ID:t.

  moreInfo.addEventListener("click", () => {;
			
    displayModelProducts(ProductDetails[i].id);
   

    
  });

  }
}

let inCart:Iproducts[] = [];

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



export function LoadToLS(id:number) {
  localStorage.setItem("cartList", JSON.stringify(inCart));
  let itemToAdd = id;
  for (let i = 0; i < inCart.length; i++) {
      if (itemToAdd === inCart[i].id) {
          inCart.push(inCart[i]);
          let jsonString = JSON.stringify(inCart);
          localStorage.basketList = jsonString;
          let itemCart = localStorage.inCart;
        if (itemCart) {
        inCart = JSON.parse(itemCart);
  }
  let shop = document.getElementById("shop") as HTMLDivElement;
  shop.innerHTML = inCart.length.toString();
}
}
}

 export function loadFromLs() {
  let cartFromLs:string = localStorage.getItem("cartList") || "";
  let cartObject = JSON.parse(cartFromLs);
  console.log(cartObject);
  inCart = cartObject.map((cart:Product) => {return new Product( cart.product,cart.amount)}); 

 }





