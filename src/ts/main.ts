import { activateMenu } from "./functions/menu";

let cart: HTMLLIElement = document.getElementById("cart") as HTMLLIElement;
let shop: HTMLDivElement = document.getElementById("shop") as HTMLDivElement;
let closebutton: HTMLButtonElement = document.getElementById(
  "close-button"
) as HTMLButtonElement;

window.onload = () => {
  activateMenu();
};

// cart.addEventListener("click", () => {
//   shop.classList.add("block");
// });

// closebutton.addEventListener("click", () => {
//   shop.classList.remove("block");
// });
