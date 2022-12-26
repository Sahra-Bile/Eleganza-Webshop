import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { ProductDetails } from "../models/productData";
import { displayCart, inCart } from "./productAddToCart";
import { displayModelProducts } from "./productModel";

let addButtonModel: HTMLButtonElement = document.getElementById(
  "addProduct"
) as HTMLButtonElement;

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
    let addButton: HTMLButtonElement = document.createElement("button");

    title.innerHTML = ProductDetails[i].title;
    ImgTag.src = ProductDetails[i].url;
    desc.innerHTML = ProductDetails[i].desc;
    price.innerHTML = `${ProductDetails[i].price}.$`;
    addButton.innerHTML = "add to cart";

    //! placera dem

    productDiv.classList.add("product-main__product");
    imgWrapper.classList.add("product-main__product__img-wrapper");
    desc.classList.add("product-main__product__desc");
    title.classList.add("product-main__product__product-title");
    price.classList.add("product-main__product__price");
    ImgTag.classList.add("product-main__product__img-wrapper__img");
    addButton.classList.add("product-main__product__addBtn");
    mainProducts.appendChild(productDiv);
    productDiv.appendChild(title);
    productDiv.appendChild(imgWrapper);
    imgWrapper.appendChild(ImgTag);
    productDiv.appendChild(price);
    productDiv.appendChild(addButton);

    imgWrapper.addEventListener("click", () => {
      displayModelProducts(ProductDetails[i].id);
    });

    addButton.addEventListener("click", () => {
      for (let matchIndex = 0; matchIndex < inCart.length; matchIndex++) {
        if (inCart[matchIndex].product.title === ProductDetails[i].title) {
          inCart[matchIndex].amount++;
          displayCart();
          localStorage.setItem("cartList", JSON.stringify(inCart));
          return;
        }
      }
      inCart.push(new CartItem(ProductDetails[i], 1));
      displayCart();
      localStorage.setItem("cartList", JSON.stringify(inCart));
    });
  }
}
