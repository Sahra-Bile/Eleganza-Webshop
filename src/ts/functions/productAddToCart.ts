import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { ProductDetails } from "../models/productData";
import { displayCheckoutPage } from "./checkoutPage";

let addButtonModel: HTMLButtonElement = document.getElementById(
  "addProduct"
) as HTMLButtonElement;

export let inCart: CartItem[] = [];

let cartAmount: HTMLDivElement = document.getElementById(
  "cartAmount"
) as HTMLDivElement;
//* fråga Sebastian hur du ska lösa med dina två varukorg
let cartAmount2: HTMLDivElement = document.getElementById(
  "cartAmount2"
) as HTMLDivElement;

let ItemsContainer: HTMLDivElement = document.getElementById(
  "item-container"
) as HTMLDivElement;

let checkoutButton: HTMLButtonElement = document.getElementById(
  "checkoutBtn"
) as HTMLButtonElement;

let totalSumOfProduct: HTMLParagraphElement = document.getElementById(
  "totalPrice"
) as HTMLParagraphElement;

let totalSum: number = 0;

//* klager på att denna är tomt
// totalSumOfProduct.innerHTML = +totalSum.toString() + " " + " SEK";

export function displayCart(): void {
  saveCartToLs();
  ItemsContainer.innerHTML = "";
  totalSumOfProduct.innerHTML = "";
  cartAmount.innerHTML = "";
  cartAmount2.innerHTML = "";
  totalSum = 0;
  let counter = 0;
  totalSumOfProduct.innerHTML = +totalSum.toString() + " " + " SEK";

  for (let i = 0; i < inCart.length; i++) {
    let productCard: HTMLDivElement = document.createElement("div");
    let imgWrapper: HTMLDivElement = document.createElement("div");
    let productImg: HTMLImageElement = document.createElement("img");
    let productTitle: HTMLHeadingElement = document.createElement("h6");
    let productPrice: HTMLHeadingElement = document.createElement("h6");
    let ButtonsContainer: HTMLDivElement = document.createElement("div");
    let minusButton: HTMLButtonElement = document.createElement("button");
    let totalAmount: HTMLParagraphElement = document.createElement("p");
    let plusButton: HTMLButtonElement = document.createElement("button");

    productTitle.innerHTML = inCart[i].product.title;
    productImg.src = inCart[i].product.url;
    productPrice.innerHTML = inCart[i].product.price.toString() + "$";
    plusButton.innerHTML = "<i class='fa fa-plus'</i>";
    minusButton.innerHTML = "<i class='fa fa-minus'</i>";
    totalSumOfProduct.innerHTML += inCart[i].product.price.toString();
    totalAmount.innerHTML = inCart[i].amount.toString();

    productCard.classList.add("shop__item-container__cards");
    imgWrapper.classList.add("shop__item-container__cards__img-wrapper");
    productImg.classList.add("shop__item-container__cards__imgs");
    productTitle.classList.add("shop__item-container__cards__title");
    productPrice.classList.add("shop__item-container__cards__price");
    ButtonsContainer.classList.add(
      "shop__item-container__cards__btnsContainer"
    );
    minusButton.classList.add(
      "shop__item-container__cards__btnsContainer__minusBtn"
    );
    plusButton.classList.add(
      "shop__item-container__cards__btnsContainer__plusBtn"
    );

    totalAmount.classList.add(
      "shop__item-container__cards__btnsContainer__totalAmount"
    );

    ItemsContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(ButtonsContainer);
    ButtonsContainer.appendChild(minusButton);
    ButtonsContainer.appendChild(totalAmount);
    ButtonsContainer.appendChild(plusButton);
    productCard.appendChild(imgWrapper);

    minusButton.addEventListener("click", () => {
      if (inCart[i].amount === 1) {
        inCart.splice(i, 1);
        displayCart();
      } else {
        inCart[i].amount--;
        displayCart();
      }
    });

    plusButton.addEventListener("click", () => {
      inCart[i].amount++;
      displayCart();
    });
    totalSum += inCart[i].product.price * inCart[i].amount;
    totalSumOfProduct.innerHTML = +totalSum.toString() + " " + " SEK";

    counter += inCart[i].amount;
    cartAmount.innerHTML = " " + counter.toString();
    cartAmount2.innerHTML = " " + counter.toString();
  }
}

export function saveCartToLs() {
  localStorage.setItem("cartList", JSON.stringify(inCart));
}

export function getCartFromLs() {
  if (!localStorage.getItem("cartList") || "[]") {
    inCart = [];
  }
  let itemFromLs: string = localStorage.getItem("cartList") || "[]";
  let itemObject: CartItem[] = JSON.parse(itemFromLs);

  //*omvandlar strängar som jag frå från ls till ett objekt igen
  inCart = itemObject.map((cart: CartItem) => {
    return new CartItem(
      new Product(
        cart.product.id,
        cart.product.url,
        cart.product.title,
        cart.product.desc,
        cart.product.price
      ),
      cart.amount
    );
  });

  displayCart();
  console.log("this is strang", itemFromLs);
  console.log("this is object ", itemObject);
  console.log("denna är omvandlat objekt från strängar", inCart);
}

getCartFromLs();
