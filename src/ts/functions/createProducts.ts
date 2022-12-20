import { ProductDetails } from "../models/ProductData";
import { displayModelProducts } from "./productModel";

let addButton: HTMLButtonElement = document.getElementById(
  "addProduct"
) as HTMLButtonElement;
let modalContainer: HTMLDivElement = document.getElementById(
  "modalContainer"
) as HTMLDivElement;

export function createHTMLForProducts() {
  let mainProducts: HTMLDivElement = document.getElementById(
    "main-products"
  ) as HTMLDivElement;

  mainProducts.innerHTML = "";

  for (let i = 0; i < ProductDetails.length; i++) {
    let productDiv: HTMLDivElement = document.createElement("div");

    let imgWrapper: HTMLDivElement = document.createElement("div");

    let ImgTag: HTMLImageElement = document.createElement("img");

    let title: HTMLParagraphElement = document.createElement("p");

    let desc: HTMLParagraphElement = document.createElement("p");

    let price: HTMLParagraphElement = document.createElement("p");

    ImgTag.src = ProductDetails[i].url;
    title.innerHTML = ProductDetails[i].title;
    desc.innerHTML = ProductDetails[i].desc;
    price.innerHTML = `${ProductDetails[i].price}.SEK`;

    //! placera dem

    productDiv.classList.add("product-main__product");
    imgWrapper.classList.add("product-main__product__img-wrapper");
    desc.classList.add("product-main__product__desc");
    title.classList.add("product-main__product__product-title");
    price.classList.add("product-main__product__price");
    ImgTag.classList.add("product-main__product__img-wrapper__img");
    mainProducts.appendChild(productDiv);
    productDiv.appendChild(title);
    productDiv.appendChild(imgWrapper);
    imgWrapper.appendChild(ImgTag);
    productDiv.appendChild(price);

    //!*Tar ID för den klickade produkten och anropar en funktion som visar en modal med produkten vilket index är lika med det hämtade ID:t.

    imgWrapper.addEventListener("click", () => {
      displayModelProducts(ProductDetails[i].id);
    });
  }
}
