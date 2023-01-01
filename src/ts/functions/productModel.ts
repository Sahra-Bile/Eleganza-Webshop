import { ProductDetails } from "../models/productData";

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

  let closeProductsModal: HTMLButtonElement = document.getElementById(
    "closeProductsModal"
  ) as HTMLButtonElement;

  modalContainer.className = "showProduct-modal";

  let book = ProductDetails.find((book) => book.id === id);
  if (book) {
    productImg.src = book.url;
    modalTitle.innerText = book.title;
    modeldesc.innerHTML = book.desc;
  }

  //!stänga fönstret Modal

  closeProductsModal.addEventListener("click", () => {
    modalContainer.className = "";
  });
};
