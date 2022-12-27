import { activateMenu } from "./functions/menu";
import { displayCart } from "./functions/productAddToCart";
import { activateBaket } from "./functions/shoppingCart";

window.onload = () => {
  activateMenu();
  // activateBaket();
  displayCart();
};
