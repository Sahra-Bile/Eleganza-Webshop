import { createHTMLForProducts } from "./functions/createProducts";
import { activateMenu } from "./functions/menu";
import { activateBaket } from "./functions/shoppingCart";

window.onload = () => {
  activateMenu();
  activateBaket();
  createHTMLForProducts();
};
