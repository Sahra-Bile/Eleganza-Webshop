
let shoppingCartDesktop: HTMLElement = document.getElementById('shopping-cart-desktop') as HTMLElement; 

let shoppingCartPhone: HTMLElement = document.getElementById('shopping-cart-phone') as HTMLElement; 

let dropdown: HTMLDivElement = document.getElementById('dropdown') as HTMLDivElement; 

let display:HTMLDivElement = document.createElement('div');

dropdown.appendChild(display);

function displayMessage(message:string){
  display.innerHTML = message;
}

function createProductsCheckout(){

 if( shoppingCartDesktop || shoppingCartPhone === null || ""){
 console.log(displayMessage("Your cart is empty, tap an item and add it to the cart to proceed"));
 }
 return false;
}
shoppingCartDesktop.addEventListener('click', createProductsCheckout);
shoppingCartPhone.addEventListener('click', createProductsCheckout);