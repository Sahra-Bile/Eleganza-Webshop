import { createHTMLForProducts } from "./functions/createProducts";
import { activateMenu } from "./functions/menu";

let shoppingCart: HTMLDivElement = document.getElementById(
  "shopping-cart"
) as HTMLDivElement;

let cart2: HTMLDivElement = document.getElementById(
  "shopping-cart2"
) as HTMLDivElement;
let closeButton = document.getElementById("close-button") as HTMLButtonElement;

let shopdiv = document.getElementById("shoppingCart") as HTMLDivElement;
window.onload = () => {
  activateMenu();
  createHTMLForProducts();
};

shoppingCart.addEventListener("click", () => {
  shopdiv.style.display = "flex";
});
closeButton.addEventListener("click", () => {
  shopdiv.style.display = "none";
});

cart2.addEventListener("click", () => {
  shopdiv.style.display = "flex";
});
