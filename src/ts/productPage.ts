
import { createHTMLForProducts } from './functions/createProducts';
import { activateMenu } from './functions/menu';
import { productModalAddToBasket } from './functions/productModelAddToBasket';

window.onload = () => {
  activateMenu();
  createHTMLForProducts();
  productModalAddToBasket();
 
 
 
  }
