import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { ProductDetails } from "../models/ProductData";

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
    e.target;

    let incomingProduct: Product;

    let productName: string = titleIdentifier.innerHTML;
    ProductDetails.forEach((product) => {
      if (productName === product.title) {
        incomingProduct = product;
      }
      // productName == product.name ? (incomingProduct = product) : null;

      //Creates a new product based on the incomingProdcut(Iproduct), the size and amount values that the user put in.
      let newProduct = new CartItem(
        incomingProduct,
        parseInt(amountOfProducts.value)
      );

      //All CODE BELOW IS MANIPULATING THE LOCALSTORAGE.
      //Checks for an existing LocalStorage list. If there is none, it creates an empty array.
      if (!localStorage.getItem("cartList")) {
        localStorage.setItem("cartList", "[]");
      }
      let cartList: string = localStorage.getItem("cartList") || "[]";
      let localStorageArray: Product[] = JSON.parse(cartList);

      //Compares our newProduct with the ones that exist in the localStorage. If it finds a match, it sets the matchIndex to the index of the found match.
      let matchIndex: number = -1;
      localStorageArray.forEach((storageItem, storageItemIndex) => {
        if (
          JSON.stringify(storageItem.id) === JSON.stringify(newProduct.product)
          // storageItem.size.toString() === newProduct.size.toString()
        ) {
          matchIndex = storageItemIndex;
        }
      });

      //If a match was found previously, it only changes the amount of the already existing object. Else, it pushes a new object to the array.
      if (matchIndex >= 0) {
        localStorageArray[matchIndex].amount += parseInt(
          amountOfProducts.value
        );
      } else if (!localStorageArray) {
      } else {
        localStorageArray.push(newProduct.product);
        modalContainer.innerHTML = "";
      }
      // console.log("product is in " newProduct);
      let localStorageArrayStringify: string =
        JSON.stringify(localStorageArray);
      localStorage.setItem("cartList", localStorageArrayStringify);

      //Closes modal

      //Calls the function that updates the products in the Checkout dropdown.
      // createProductsCheckout();
      modalContainer.innerHTML = "";
    });
    modalContainer.className = "";
  });
}
