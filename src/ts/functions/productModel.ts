import { Product } from "../models/Product";
import { ProductDetails } from "../models/ProductData";
import {} from "./createProducts";

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

  //!stänga fönstret Modal
  //! varför  closeProductsModal is null??

  closeProductsModal.addEventListener("click", () => {
    modalContainer.className = "";
  });
};

export let cartList: Product[] = [];

export function saveToLS() {
  localStorage.setItem("cartList", JSON.stringify(cartList));
}
