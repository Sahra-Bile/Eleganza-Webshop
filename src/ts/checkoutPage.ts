import { displayCheckoutPage } from "./functions/checkoutPage";
import { activateMenu } from "./functions/menu";

window.onload = () => {
  activateMenu();
  displayCheckoutPage();
};
