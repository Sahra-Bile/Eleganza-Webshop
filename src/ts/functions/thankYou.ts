import { CartItem } from "../models/CartItem";

window.onload = function () {
  ThankForYourOrder();
};

export const ThankForYourOrder = () => {
  let amountOfProducts = 0;

  const cartItem: CartItem[] = JSON.parse(
    localStorage.getItem("cartList") || "[]"
  );
  cartItem.forEach((e: CartItem) => {
    amountOfProducts += e.amount;
  });
  let headingText: HTMLHeadingElement = document.createElement("h1");
  headingText.innerHTML = " &#127881;  Thank you for your order!";

  let totalOrder: HTMLParagraphElement = document.createElement("p");
  totalOrder.innerHTML = `Your order for ${amountOfProducts} st books from us BookLizaz is ordered and will be shipped soon from our warehouse!`;

  const orderDetails: HTMLDivElement = document.getElementById(
    "order-details"
  ) as HTMLDivElement;

  orderDetails.appendChild(headingText);
  orderDetails.appendChild(totalOrder);

  headingText.classList.add("headingText");

  totalOrder.classList.add("totalOrder");

  if (document.URL.includes("thankYou.html")) {
    const buyBtn: HTMLButtonElement = document.getElementById(
      "buyBtn"
    ) as HTMLButtonElement;
    buyBtn.addEventListener("click", () => {
      ThankForYourOrder();
    });
  }
};
