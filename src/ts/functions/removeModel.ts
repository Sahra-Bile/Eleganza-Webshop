import { CartItem } from "../models/CartItem";
import { displayCheckoutPage } from "./checkoutPage";

export function removeModal(
  image: string,
  title: string,
  id: number,
  list: CartItem[]
) {
  let removeModalContainer: HTMLDivElement = document.getElementById(
    "container-modal"
  ) as HTMLDivElement;

  let productImage: HTMLImageElement = document.getElementById(
    "Product-img"
  ) as HTMLImageElement;

  let buttonContainer: HTMLDivElement = document.getElementById(
    "modal-button-container"
  ) as HTMLDivElement;

  let productTitle: HTMLParagraphElement = document.getElementById(
    "product-title"
  ) as HTMLParagraphElement;

  let cancelButton: HTMLButtonElement = document.createElement("button");
  let confirmButton: HTMLButtonElement = document.createElement("button");

  //* öppna Modal
  removeModalContainer.classList.add("show-container-modal");

  cancelButton.classList.add(
    "container-modal__remove-modal__model-buttons-container__cancelBtn"
  );

  confirmButton.classList.add(
    "container-modal__remove-modal__model-buttons-container__confirmBtn"
  );

  cancelButton.innerHTML = "cancel";
  confirmButton.innerHTML = "confirm";
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(confirmButton);

  let corretImage = image;
  let correctTitle = title;
  productImage.src = corretImage;
  productTitle.innerHTML = correctTitle;

  //* confirm knapp för att bort items från LS
  confirmButton.addEventListener("click", () => {
    list.splice(id, 1);

    buttonContainer.innerHTML = "";
    let productTostring = JSON.stringify(list);
    localStorage.setItem("cartList", productTostring);

    // * kör denna funktion från checkout page
    if (document.URL.includes("checkoutPage.html")) {
      displayCheckoutPage();
    }
    removeModalContainer.classList.remove("show-container-modal");
  });

  //*Close the Modal funkar inte riktigt
  cancelButton.addEventListener("click", () => {
    buttonContainer.innerHTML = "";
    removeModalContainer.classList.remove("show-container-modal");
  });
}
