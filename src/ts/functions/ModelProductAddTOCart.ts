import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { ProductDetails } from "../models/ProductData";
import { createProductsCheckout } from "./createProductsCheckout";

export function productModalAddToBasket() {
  let titleIdentifier: HTMLParagraphElement = document.getElementById(
    "modalTitle"
  ) as HTMLParagraphElement;
  let addButton: HTMLButtonElement = document.getElementById(
    "addProduct"
  ) as HTMLButtonElement;
  let amountOfProducts: HTMLInputElement = document.getElementById(
    "productModalAmount"
  ) as HTMLInputElement;
  let modalContainer: HTMLDivElement = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  addButton.addEventListener("click", (e) => {
    let incomingProduct: Product;
    let productName: string = titleIdentifier.innerHTML;
    ProductDetails.forEach((product) => {
      productName == product.title ? (incomingProduct = product) : null;
      console.log("product is" + product);

      let newProduct = new Product(
        incomingProduct.id,
        incomingProduct.title,
        incomingProduct.url,
        incomingProduct.desc,
        incomingProduct.price,
        parseInt(amountOfProducts.value)
      );
      console.log(" incomning product is" + incomingProduct);

      if (!localStorage.getItem("cartList")) {
        localStorage.setItem("cartList", "[]");
      }
      let cartList: string = localStorage.getItem("cartList") || "";
      let localStorageArray: Product[] = JSON.parse(cartList);
      console.log("Ls lista is" + localStorageArray);

      let matchIndex: number = -1;

      localStorageArray.forEach((storageItem, storageItemIndex) => {
        if (
          JSON.stringify(storageItem.id) === JSON.stringify(newProduct.id) &&
          storageItem.toString() === newProduct.id.toString()
        )
          matchIndex = storageItemIndex;
      });

      if (matchIndex >= 0) {
        localStorageArray[matchIndex].amount += parseInt(
          amountOfProducts.value
        );
      }
      if (!localStorageArray) {
      } else {
        localStorageArray.push(newProduct);
        console.log("new product is create" + newProduct);
      }

      let localStorageArrayStringify: string =
        JSON.stringify(localStorageArray);
      localStorage.setItem("cartList", localStorageArrayStringify);
    });
    //Closes modal
    modalContainer.className = "";

    createProductsCheckout();
  });
}
