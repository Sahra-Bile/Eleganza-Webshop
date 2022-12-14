import { ProductDetails } from '../models/productData';

let shoppingCart = document.getElementById("shop") as HTMLDivElement;

let cartAmount = document.getElementById("shopping-cart") as HTMLDivElement;

 export function createShoppingCart() {
  let totalPrice = 0;
  shoppingCart.innerHTML = "";
  cartAmount.innerHTML = "";
  
  for (let i = 0; i < ProductDetails.length; i++) {

 totalPrice += ProductDetails[i].price * ProductDetails[i].amount
      
     let container = document.createElement("div");
     let productTitle = document.createElement("p");
     let productAmount = document.createElement("p");
     let productPrice = document.createElement("p");
     productTitle.innerHTML = ProductDetails[i].title;
     productAmount.innerHTML =  cartAmount.innerHTML.length.toString();
     

     JSON.stringify(ProductDetails[i].amount) + "</span>";
     let currentPrice = + ProductDetails[i].price * 
      ProductDetails[i].amount;
     productPrice.innerHTML = "<span>" + JSON.stringify(currentPrice)+ " SEK" + "</span";
     let deleteButton = document.createElement("button");
     deleteButton.innerHTML = "remove";
     deleteButton.addEventListener("click", () => {
          let currentObject = ProductDetails[i];
          let currentObjectIndex = ProductDetails.indexOf(currentObject);
         ProductDetails.splice(currentObjectIndex, 1);
         createShoppingCart();
        
     })
     productPrice.appendChild(deleteButton);

     productPrice.classList.add("product-price")
     productAmount.classList.add("product-amount")
     productTitle.classList.add("product-title")

    

     let container1 = document.createElement("div");
     container1.classList.add("container1 ")

     let arrowUp = document.createElement("p");
     arrowUp.innerHTML = `<i class="bi bi-plus-lg"></i>`;
     arrowUp.addEventListener("click", () => {
      ProductDetails[i].amount ++;
      createShoppingCart();
     });

     let arrowDown = document.createElement("li");
     arrowDown.addEventListener("click", () => {
      if (ProductDetails[i].amount === 1) {
          return;
      }
      ProductDetails[i].amount --;
      createShoppingCart();
     })
     arrowDown.innerHTML = `<i class="bi bi-dash-lg"></i>`;
     
     container1 .appendChild(arrowUp);
     container1 .appendChild(arrowDown);
     
     productAmount.appendChild(container1 );
     container.appendChild(productTitle);
     container.appendChild(productAmount);
     container.appendChild(productPrice);
     shoppingCart.appendChild(container);

  }

  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "totalPrice")
  let newh5 = document.createElement("h5");
  newh5.innerHTML = "Totalt: " + totalPrice + " SEK";
  let toCheckoutButton = document.createElement("button");
  toCheckoutButton.innerHTML = "Till Kassan";
  let toCheckoutButtonAnchor = document.createElement("a");
  toCheckoutButtonAnchor.setAttribute("href", "kassa.html")
  toCheckoutButtonAnchor.appendChild(toCheckoutButton);
  newDiv.appendChild(newh5);
  newDiv.appendChild(toCheckoutButtonAnchor);
  shoppingCart.appendChild(newDiv);
}
createShoppingCart();

  shoppingCart.addEventListener("click", ()=>{
    createShoppingCart();

  });


console.log(ProductDetails);