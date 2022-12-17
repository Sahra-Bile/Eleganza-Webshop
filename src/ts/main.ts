
import { loadFromlocalStorage } from './functions/loadToAndFromLocalStorage';
import { activateMenu } from './functions/menu';

window.onload = () => {
activateMenu();


console.log( "finns inget där" +loadFromlocalStorage());


}

