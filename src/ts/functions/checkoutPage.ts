import { CartItem } from "../models/CartItem";
import { getCartFromLs, saveCartToLs } from "./productAddToCart";

export const displayCheckoutPage = () => {
  let checkoutUlContainer: HTMLUListElement = document.getElementById(
    "ul-chekout"
  ) as HTMLUListElement;
  let total: HTMLHeadingElement = document.getElementById(
    "total-price"
  ) as HTMLDivElement;

  let totalSum = 0;
  checkoutUlContainer.innerHTML = "";
  total.innerHTML = "";

  //* om det inte finns något att hämta från LS
  if (!localStorage.getItem("cartList")) {
    saveCartToLs();
  }
  if (localStorage.getItem("cartList")?.length === 2) {
    let wrapper: HTMLDivElement = document.getElementById(
      "shopping-container"
    ) as HTMLDivElement;

    let noProductSpan: HTMLSpanElement = document.createElement(
      "span"
    ) as HTMLSpanElement;
    noProductSpan.classList.add("no-product");
    noProductSpan.innerHTML =
      "There are no products in the shopping cart to checkout";
    wrapper.insertBefore(noProductSpan, total);
  } else {
    let productCartList: string = localStorage.getItem("cartList") || "[]";
    let productCartListObject: CartItem[] = JSON.parse(productCartList);

    for (let i = 0; i < productCartListObject.length; i++) {}
  }
};
