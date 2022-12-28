import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

//*  lista för att spara till LS och hämta från LS
export let inCart: CartItem[] = [];

let cartAmount: HTMLDivElement = document.getElementById(
  "cartAmount"
) as HTMLDivElement;

let cartAmount2: HTMLDivElement = document.getElementById(
  "cartAmount2"
) as HTMLDivElement;

let ItemsContainer: HTMLDivElement = document.getElementById(
  "item-container"
) as HTMLDivElement;

let totalSumOfProduct: HTMLParagraphElement = document.getElementById(
  "totalPrice"
) as HTMLParagraphElement;

export function displayCart(): void {
  //! sparar listan i LS
  saveCartToLs();
  //! vill att det töms varje gång så att ingen bild blir kvar efter man har tagit bort en produk från korgen.
  ItemsContainer.innerHTML = "";
  //! korgen ska också vara tom när det inte finns produkt i korgen
  cartAmount.innerHTML = "";
  cartAmount2.innerHTML = "";
  //! totala priset ska inte finns från början den dyrker upp när man har lagt produkt i korgen

  totalSumOfProduct.innerHTML = "";
  let totalSum = 0;
  //! räknar antal av produkten
  let counter = 0;
  //! looper listan från LS
  for (let i = 0; i < inCart.length; i++) {
    //! create HTML elements
    let productCard: HTMLDivElement = document.createElement("div");
    let imgWrapper: HTMLDivElement = document.createElement("div");
    let productImg: HTMLImageElement = document.createElement("img");
    let productTitle: HTMLHeadingElement = document.createElement("h6");
    let productPrice: HTMLHeadingElement = document.createElement("h6");
    let ButtonsContainer: HTMLDivElement = document.createElement("div");
    let minusButton: HTMLButtonElement = document.createElement("button");
    let totalAmount: HTMLParagraphElement = document.createElement("p");
    let plusButton: HTMLButtonElement = document.createElement("button");
    //! innerHTML, value, src
    productTitle.innerHTML = inCart[i].product.title;
    productImg.src = inCart[i].product.url;
    productPrice.innerHTML = inCart[i].product.price.toString() + "$";
    plusButton.innerHTML = `<i class="bi bi-plus-lg"></i>`;
    minusButton.innerHTML = `<i class="bi bi-dash-lg"></i>`;

    totalSumOfProduct.innerHTML += inCart[i].product.price.toString();

    console.log(" är just nu steg två :", totalSumOfProduct.innerHTML);

    totalAmount.innerHTML = inCart[i].amount.toString();

    //! class name
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
    //! appenchild
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
      //! om amount = 1 tas  bort en produkt dvs minska antalet med en
      if (inCart[i].amount === 1) {
        inCart.splice(i, 1);
        displayCart();
      } else {
        inCart[i].amount--;
        displayCart();
      }
    });

    //! öka produkten med 1
    plusButton.addEventListener("click", () => {
      inCart[i].amount++;
      displayCart();
    });
    //! totala summan priset gånger med antalet av produkten .

    totalSum += inCart[i].product.price * inCart[i].amount;

    totalSumOfProduct.innerHTML = +totalSum.toString() + "$";

    console.log(" är just nu steg tre :", totalSumOfProduct.innerHTML);

    counter += inCart[i].amount;

    cartAmount.innerHTML = " " + counter.toString();

    cartAmount2.innerHTML = " " + counter.toString();
  }
}

//* funktion för spara till LS
export function saveCartToLs() {
  localStorage.setItem("cartList", JSON.stringify(inCart));
}
//* funktion hämta listan från LS
export function getCartFromLs() {
  //! om listan är tomt då är listan tomt så att den inte klagar om att den försker hämta något om inte finns.
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
        cart.product.title,
        cart.product.url,
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

document.addEventListener("DOMContentLoaded", getCartFromLs);
