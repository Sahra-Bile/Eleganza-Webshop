import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { ProductDetails } from "../models/productData";
import { displayCart, inCart } from "./productAddToCart";

//! funtion för att öppna en produkt
export const displayModelProducts = (id: number) => {
  let modalContainer: HTMLDivElement = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  let productImg: HTMLImageElement = document.getElementById(
    "modalImg"
  ) as HTMLImageElement;

  let modalTitle: HTMLParagraphElement = document.getElementById(
    "modalTitle"
  ) as HTMLParagraphElement;

  let modeldesc: HTMLSpanElement = document.getElementById(
    "modeldesc"
  ) as HTMLSpanElement;

  let modalTotalPrice: HTMLParagraphElement = document.getElementById(
    "modalTotal"
  ) as HTMLParagraphElement;

  let amountInput: HTMLInputElement = document.getElementById(
    "productModalAmount"
  ) as HTMLInputElement;

  let closeProductsModal: HTMLButtonElement = document.getElementById(
    "closeProductsModal"
  ) as HTMLButtonElement;
  let addButton: HTMLButtonElement = document.getElementById(
    "addProduct"
  ) as HTMLButtonElement;
  modalContainer.className = "showProduct-modal";

  let book = ProductDetails.find((book) => book.id === id);
  if (book) {
    productImg.src = book.url;
    modalTitle.innerText = book.title;
    modeldesc.innerHTML = book.desc;
    modalTotalPrice.innerText = ` total amount: ${book.price}`;
  }
  let totalprice: number;
  amountInput.addEventListener("input", (e: Event) => {
    e.target;

    if (amountInput.value) {
      totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
      modalTotalPrice.innerText = `Total amount: ${totalprice} SEK`;
    }
  });

  let books: Product;
  addButton.addEventListener("click", () => {
    for (let matchIndex = 0; matchIndex < inCart.length; matchIndex++) {
      if (inCart[matchIndex].product.title === books.title) {
        inCart[matchIndex].amount++;
        displayCart();
        localStorage.setItem("cartList", JSON.stringify(inCart));
        return;
      }
    }
    inCart.push(new CartItem(books, 1));
    displayCart();
    localStorage.setItem("cartList", JSON.stringify(inCart));
  });

  //!stänga fönstret Modal
  //! varför  closeProductsModal is null??

  closeProductsModal.addEventListener("click", () => {
    modalContainer.className = "";
  });
};
