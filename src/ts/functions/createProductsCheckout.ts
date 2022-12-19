import { Product } from "../models/Product";

let totalPrice: number = 0;

export let cartListls: Product[] = [];

let shoppingCart: HTMLDivElement = document.getElementById(
  "shopping-cart"
) as HTMLDivElement;

let dropdown: HTMLDivElement = document.getElementById(
  "dropdown-wrapper"
) as HTMLDivElement;
let closeCheckout: HTMLDivElement = document.getElementById(
  "close-checkout"
) as HTMLDivElement;
let addButton: HTMLButtonElement = document.getElementById(
  "add-button"
) as HTMLButtonElement;
let emptyContainer: HTMLDivElement = document.getElementById(
  "empty-container"
) as HTMLDivElement;
let checkoutPoductContainer: HTMLDivElement = document.getElementById(
  "checkout-products-container"
) as HTMLDivElement;
let totalRemovePrice: HTMLDivElement = document.getElementById(
  "total-price"
) as HTMLDivElement;

export function createProductsCheckout() {
  shoppingCart.addEventListener("click", () => {
    dropdown.style.display = "block";
  });

  closeCheckout.addEventListener("click", () => {
    dropdown.style.display = "none";
  });

  addButton.addEventListener("click", () => {
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    } else {
      localStorage.setItem("cartList", JSON.stringify(listAsObject));
    }
  });

  let cartListLS: string = localStorage.getItem("cartList") || "[]";
  let listAsObject: Product[] = JSON.parse(cartListLS);

  IsCartEmpty(listAsObject);
}

export function IsCartEmpty(listAsObject: Product[]) {
  if (listAsObject === null || listAsObject.length === 0) {
    emptyContainer.style.display = "block";
  } else {
    emptyContainer.style.display = "none";

    if (checkoutPoductContainer.firstChild) {
      checkoutPoductContainer.removeChild(checkoutPoductContainer.firstChild);
    }

    //* Tar bort de gamla HTML-elementen fär att ge plats åt en uppdaterad lista

    if (totalRemovePrice.firstChild) {
      totalRemovePrice.removeChild(totalRemovePrice.firstChild);
    }

    createHTML(listAsObject);
  }
}

export function createHTML(listAsObject: Product[]) {
  //*Skapar HTML efter listan som är lagrad i localStorage
  totalPrice = 0;

  for (let i = 0; i < listAsObject.length; i++) {
    let productWrapper: HTMLDivElement = document.createElement("div");
    productWrapper.className = "checkout-products";

    let imageWrapper: HTMLDivElement = document.createElement("div");
    imageWrapper.className = "image-wrapper";
    console.log(listAsObject[i]);

    imageWrapper.setAttribute(
      "style",
      `background-image: url("${listAsObject[i].url}")`
    );
    imageWrapper.setAttribute(
      "alt",
      `The picture of a ${listAsObject[i].title}`
    );

    let textWrapper: HTMLDivElement = document.createElement("div");
    textWrapper.className = "text-wrapper";

    let productName: HTMLHeadingElement = document.createElement("h1");
    productName.id = "name";
    productName.innerHTML = listAsObject[i].title;

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.id = "price";

    let inputContainer: HTMLDivElement = document.createElement("div");
    inputContainer.id = "input-container";

    let label: HTMLParagraphElement = document.createElement("p");
    label.innerHTML = "Quantity:";
    label.id = "label";

    let amount: HTMLParagraphElement = document.createElement("p");
    amount.innerHTML = listAsObject[i].amount + " st";

    let trashDiv: HTMLDivElement = document.createElement("div");
    trashDiv.id = "trash-div";

    let trash: HTMLElement = document.createElement("i");
    trash.className = "far fa-trash-alt";

    checkoutPoductContainer.appendChild(productWrapper);
    productWrapper.appendChild(imageWrapper);
    productWrapper.appendChild(textWrapper);

    textWrapper.appendChild(productName);

    textWrapper.appendChild(productPrice);

    productWrapper.appendChild(inputContainer);
    inputContainer.appendChild(label);
    inputContainer.appendChild(amount);

    productWrapper.appendChild(trashDiv);
    trashDiv.appendChild(trash);

    //*Varje produkt pris adderas för tt sen kunna räkna ut totalsumman
    totalPrice += parseInt(productPrice.innerHTML);

    trashDiv.addEventListener("click", () => {
      listAsObject.splice(i, 1);

      if (checkoutPoductContainer.firstChild) {
        checkoutPoductContainer.removeChild(checkoutPoductContainer.firstChild);
      }

      if (totalRemovePrice.firstChild) {
        totalRemovePrice.removeChild(totalRemovePrice.firstChild);
      }

      let cartListString: string = JSON.stringify(listAsObject);

      localStorage.setItem("cartList", cartListString);

      if (listAsObject.length === 0) {
        IsCartEmpty(listAsObject);
      } else {
        createHTML(listAsObject);
      }
    });
  }
  createPrice(totalPrice);
}

function createPrice(totalPrice: number) {
  let totalText: HTMLParagraphElement = document.createElement("p");
  totalText.innerHTML = "Total Amount:";

  let total: HTMLParagraphElement = document.createElement("p");
  total.innerHTML = totalPrice.toString() + " SEK";

  totalRemovePrice.appendChild(totalText);
  totalRemovePrice.appendChild(total);
}
