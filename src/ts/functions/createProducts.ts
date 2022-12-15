
import { Iproducts } from '../models/Iproducts';
import{ProductDetails} from "../models/productData" 
import { Product } from '../models/products';
import { loadToLocalStorage } from './loadToAndFromLocalStorage';


 export function createHTMLForProducts(){

let mainProducts: HTMLDivElement = document.getElementById("main-products")as HTMLDivElement;

	// mainProducts.innerHTML = "";

  for(let i = 0; i < ProductDetails.length; i++){
  
   let productDiv:HTMLDivElement = document.createElement('div');

   let imgWrapper:HTMLDivElement = document.createElement('div');

   let ImgTag:HTMLImageElement = document.createElement('img');

   let title:HTMLParagraphElement = document.createElement('p');

   let desc:HTMLParagraphElement = document.createElement('p');

   let price:HTMLParagraphElement = document.createElement('p');
   let addToCartBtn: HTMLButtonElement= document.createElement('button') ;
   addToCartBtn.innerHTML = "add to cart";
   

   title.innerHTML = ProductDetails[i].title
   ImgTag.src = ProductDetails[i].url;
   desc.innerHTML = ProductDetails[i].desc;
   price.innerHTML = `${ ProductDetails[i].price}.SEK`;

  //! placera dem

  productDiv.classList.add("product-main__product");
  imgWrapper.classList.add("product-main__product__img-wrapper");
  desc.classList.add("product-main__product__desc")
  title.classList.add("product-main__product__product-title");
  price.classList.add("product-main__product__price");
  ImgTag.classList.add("product-main__product__img-wrapper__img");
  addToCartBtn.classList.add("product-main__product__addCart");
  mainProducts.appendChild(productDiv);
  productDiv.appendChild(title);
  productDiv.appendChild(imgWrapper);
  imgWrapper.appendChild(ImgTag);
  productDiv.appendChild(price);
  productDiv.appendChild(addToCartBtn);
  // productDiv.appendChild(desc);

  addToCartBtn.addEventListener("click", () => {
    new Product(ProductDetails[i], ProductDetails[i].amount);
    // ProductDetails[i].amount * ProductDetails[i].amount;
    addToCart(ProductDetails.push());
    initSite();
     deleteOneItem(ProductDetails[i].id);
  });

  }
}

let inCart:Iproducts[] = [];

export function initSite() {
  let itemCart = localStorage.basketList;
  if (itemCart) {
      inCart = JSON.parse(itemCart);
  }
 let shop = document.getElementById("cart") as HTMLDivElement;
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


function deleteOneItem(id:number){
  inCart.splice(id, 1);
    

}
