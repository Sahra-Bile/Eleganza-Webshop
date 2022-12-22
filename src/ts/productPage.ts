import { createHTMLForProducts } from "./functions/createProducts";
import { activateMenu } from "./functions/menu";

let shoppingCart: HTMLDivElement = document.getElementById(
  "shoppingCart"
) as HTMLDivElement;
let label: HTMLDivElement = document.getElementById("label") as HTMLDivElement;
window.onload = () => {
  activateMenu();
  createHTMLForProducts();
};

// if ((shoppingCart.innerHTML = "")) {
//   label.innerHTML = `
//     <h2>Cart is Empty</h2>
//     <a href="index.html">
//       <button class="HomeBtn">Back to Home</button>
//     </a>
//     `;
// }
