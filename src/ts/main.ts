import { activateMenu } from "./functions/menu";

let cart: HTMLLIElement = document.getElementById(
  "shopping-cart"
) as HTMLLIElement;
let shoppingCart: HTMLDivElement = document.getElementById(
  "shoppingCart"
) as HTMLDivElement;
let closebutton: HTMLButtonElement = document.getElementById(
  "close-button"
) as HTMLButtonElement;

window.onload = () => {
  activateMenu();
};

cart.addEventListener("click", () => {
  // shoppingCart.classList.add("block");
  shoppingCart.style.display = "flex";
});

closebutton.addEventListener("click", () => {
  shoppingCart.style.display = "none";
  // shoppingCart.classList.remove("block");
});
