import { createHTMLForProducts } from "./functions/createProducts";
import { createProductsCheckout } from "./functions/createProductsCheckout";
import { activateMenu } from "./functions/menu";
import { productModalAddToBasket } from "./functions/ModelProductAddTOCart";

window.onload = () => {
  activateMenu();
  createHTMLForProducts();
  productModalAddToBasket();

  createProductsCheckout();
};
