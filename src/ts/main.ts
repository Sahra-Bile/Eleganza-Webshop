import { createHTMLForProducts } from './functions/createDisplayProducts';
import { activateMenu } from './functions/menu';



window.onload = () => {
activateMenu();
createHTMLForProducts();
}

