import { displayCheckoutPage } from "./functions/checkoutPage";
import { activateMenu } from "./functions/menu";
import { activateBaket } from "./functions/shoppingCart";

window.onload = () => {
  activateMenu();
  activateBaket();
  displayCheckoutPage();
};
