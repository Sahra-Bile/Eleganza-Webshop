import { ProductDetails } from '../models/productData';

  export const displayModelProducts = (id:number) =>{

let modalContainer:HTMLDivElement = document.getElementById("model-container") as HTMLDivElement;

let BodyWrapper:HTMLDivElement = document.createElement('div') ;
BodyWrapper.classList.add("model-container__body");
modalContainer.appendChild(BodyWrapper);

let imgWrapper:HTMLDivElement = document.createElement('div');
imgWrapper.classList.add("model-container__body__img-wrapper");
BodyWrapper.appendChild(imgWrapper);

let productImg:HTMLImageElement = document.createElement('img') ;
productImg.classList.add("model-container__body__img-wrapper__producstImg");
imgWrapper.appendChild(productImg);


let modalTitle:HTMLParagraphElement = document.createElement('p');
modalTitle.classList.add("model-container__body__title");
BodyWrapper.appendChild(modalTitle);

let modeldesc:HTMLSpanElement = document.createElement('span');
modeldesc.classList.add("model-container__body__desc");
BodyWrapper.appendChild(modeldesc);

let modalTotalPrice:HTMLParagraphElement = document.createElement('p');
modalTotalPrice.classList.add("model-container__body__model-total")
BodyWrapper.appendChild(modalTotalPrice)


let amountInput:HTMLInputElement = document.createElement('input');
amountInput.classList.add("model-container__body__input");
amountInput.value = "1";
amountInput.type = "number";
amountInput.id = "modal-amount";
amountInput.min = "1";
BodyWrapper.appendChild(amountInput);


 let closeProductsModal:HTMLButtonElement = document.createElement('button');
 closeProductsModal.classList.add("model-container__body__closeBtn");
 closeProductsModal.innerHTML = ` <i class="fas fa-times"></i>`;
 BodyWrapper.appendChild(closeProductsModal);

 let addButton:HTMLButtonElement = document.createElement("button");
 addButton.classList.add("model-container__body__addBtn");
 addButton.innerHTML = " add to cart";
 BodyWrapper.appendChild(addButton);

 let modelAmountLabel:HTMLLabelElement = document.createElement('label');
 modelAmountLabel.classList.add("model-container__body__amount-lebel");
 BodyWrapper.appendChild(modelAmountLabel);
 modelAmountLabel.id = "modal-amount";
  modelAmountLabel.innerHTML = "Quantity:";

  // modalContainer.classList.add('showProduct-modal');
  modalContainer.className = "";
productImg.src = ProductDetails[id].url;
  modalTitle.innerText = ProductDetails[id].title;
  modeldesc.innerText = ProductDetails[id].desc
  modalTotalPrice.innerText = `total amount: ${ProductDetails[id].price}SEK`;

let totalprice: number;
amountInput.addEventListener("input", (e:Event) =>{
    e.target
  if (!amountInput.value) return;
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
  if (amountInput.value === "2")
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
  if (amountInput.value === "3")
    totalprice = parseInt(amountInput.value) * ProductDetails[id].price;
    modalTotalPrice.innerText = `Total amout: ${totalprice} SEK`;
});

//!stänga fönstret Modal

closeProductsModal.addEventListener("click", (e:MouseEvent) => {
  e.preventDefault();
  modalContainer.className = "";
  // modalContainer.classList.remove('showProduct-modal');
});

  }

