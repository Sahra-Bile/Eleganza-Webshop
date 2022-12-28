import { CartItem } from "../models/CartItem";
import { saveCartToLs } from "./productAddToCart";
import { removeModal } from "./removeModel";

export const displayCheckoutPage = () => {
  let checkoutUlContainer: HTMLUListElement = document.getElementById(
    "ul-chekout"
  ) as HTMLUListElement;
  let total: HTMLHeadingElement = document.getElementById(
    "total-price"
  ) as HTMLHeadingElement;

  let totalSum = 0;
  checkoutUlContainer.innerHTML = "";
  total.innerHTML = "";

  //* om det inte finns något att hämta från LS
  if (!localStorage.getItem("cartList")) {
    saveCartToLs();
  }
  if (localStorage.getItem("cartList")?.length === 2) {
    let wrapper: HTMLDivElement = document.getElementById(
      "shopping-container"
    ) as HTMLDivElement;

    let noProductSpan: HTMLSpanElement = document.createElement("span");
    noProductSpan.classList.add("no-product");
    noProductSpan.innerHTML =
      "There are no products in the shopping cart to checkout";

    wrapper.insertBefore(noProductSpan, total);
  } else {
    let productCartList: string = localStorage.getItem("cartList") || "[]";
    let productCartListObject: CartItem[] = JSON.parse(productCartList);

    for (let i = 0; i < productCartListObject.length; i++) {
      let liList: HTMLLIElement = document.createElement("li");
      let productContainer: HTMLDivElement = document.createElement("div");
      let imageContainer: HTMLDivElement = document.createElement("div");
      let productImage: HTMLImageElement = document.createElement("img");
      let productFactContainer: HTMLDivElement = document.createElement("div");
      let productTitle: HTMLHeadingElement = document.createElement("h4");
      let productPrice: HTMLParagraphElement = document.createElement("p");
      let productContainerRight: HTMLDivElement = document.createElement("div");
      let productContainerLeft: HTMLDivElement = document.createElement("div");
      let quantityBox: HTMLDivElement = document.createElement("div");
      let quantityInput: HTMLInputElement = document.createElement("input");
      let reduceButton: HTMLDivElement = document.createElement("div");
      let increaseButton: HTMLDivElement = document.createElement("div");
      let removeButton: HTMLButtonElement = document.createElement("button");
      let flexContainer: HTMLDivElement = document.createElement("div");

      //*innerHTML , value, src
      reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
      increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
      removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
      productTitle.innerHTML = productCartListObject[i].product.title;
      productPrice.innerHTML =
        productCartListObject[i].product.price.toString() + "$";
      quantityInput.value = productCartListObject[i].amount.toString();
      quantityInput.setAttribute("readonly", "true");

      productImage.src = productCartListObject[i].product.url;

      totalSum +=
        productCartListObject[i].product.price *
        productCartListObject[i].amount;
      total.innerHTML = "total " + totalSum.toString() + " " + " $";

      //* Minska och öka antal
      increaseButton.addEventListener("click", () => {
        let currentValue: number = parseInt(quantityInput.value);
        if (currentValue < 15) currentValue++;
        quantityInput.value = currentValue.toString();
        productCartListObject[i].amount = currentValue;

        let productTostring = JSON.stringify(productCartListObject);
        localStorage.setItem("cartList", productTostring);

        displayCheckoutPage();
      });

      reduceButton.addEventListener("click", () => {
        let currentValue: number = parseInt(quantityInput.value);
        if (currentValue > 1) currentValue--;
        quantityInput.value = currentValue.toString();
        productCartListObject[i].amount = currentValue;
        let productTostring = JSON.stringify(productCartListObject);
        localStorage.setItem("cartList", productTostring);

        displayCheckoutPage();
      });

      let title = productCartListObject[i].product.url;
      let image = productCartListObject[i].product.title;

      //* anroper remove model, skickar med tittle, img, och listan så att man kan ta bort oavsett hur många amount
      removeButton.addEventListener("click", () => {
        removeModal(title, image, i, productCartListObject);
        displayCheckoutPage();
      });

      //* appendChild
      checkoutUlContainer.appendChild(liList);
      liList.appendChild(productContainer);
      productContainer.appendChild(productContainerLeft);
      productContainer.appendChild(productFactContainer);
      productContainer.appendChild(productContainerRight);
      productContainerLeft.appendChild(imageContainer);
      imageContainer.appendChild(productImage);

      productContainerRight.appendChild(flexContainer);
      productFactContainer.appendChild(productTitle);
      productFactContainer.appendChild(productPrice);
      flexContainer.appendChild(quantityBox);
      flexContainer.appendChild(removeButton);
      quantityBox.appendChild(reduceButton);
      quantityBox.appendChild(quantityInput);
      quantityBox.appendChild(increaseButton);
      //! class name
      liList.classList.add("ul-chekout__item");
      productContainer.classList.add("ul-chekout__item__product-container");
      productContainerLeft.classList.add(
        "ul-chekout__item__product-container__left-div"
      );

      productFactContainer.classList.add(
        "ul-chekout__item__product-container__fact-container"
      );

      productContainerRight.classList.add(
        "ul-chekout__item__product-container__right-div"
      );
      imageContainer.classList.add(
        "ul-chekout__item__product-container__left-div__img-container"
      );

      productImage.classList.add(
        "ul-chekout__item__product-container__left-div__img-container__product-img"
      );

      flexContainer.classList.add(
        "ul-chekout__item__product-container__right-div__flex-container"
      );
      productTitle.classList.add(
        "ul-chekout__item__product-container__fact-container__product-title"
      );
      productPrice.classList.add(
        "ul-chekout__item__product-container__fact-container__product-price"
      );
      quantityBox.classList.add(
        "ul-chekout__item__product-container__right-div__flex-container__quantity-box"
      );
      removeButton.classList.add(
        "ul-chekout__item__product-container__right-div__flex-container__removeBtn"
      );
      quantityInput.classList.add(
        "ul-chekout__item__product-container__right-div__flex-container__quantity-box__quantity-input"
      );

      reduceButton.classList.add(
        "ul-chekout__item__product-container__right-div__flex-container__quantity-box__reduceBtn"
      );

      increaseButton.classList.add(
        "ul-chekout__item__product-container__right-div__flex-container__quantity-box__increaseBtn"
      );
    } //*else stutar här
  }
};

displayCheckoutPage();
