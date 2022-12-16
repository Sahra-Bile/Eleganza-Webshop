import {Iproducts} from "../models/Iproducts" //! interface
import {Product} from "../models/products" //! class 
import{ProductDetails} from "../models/productData" //! lagrat alla produkter i en array

 export const productModalAddToBasket = () =>{
  let modalContainer: HTMLDivElement = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;
  let amountOfProducts: HTMLInputElement = document.getElementById(
    "productModalAmount"
  ) as HTMLInputElement;
  let titleIdentifier: HTMLParagraphElement = document.getElementById(
    "modalTitle"
  ) as HTMLParagraphElement;
  let addButton: HTMLButtonElement = document.getElementById(
    "addProduct"
  ) as HTMLButtonElement;
 
  addButton.addEventListener("click", (e) => {
  
    });

    //!* n1.Tar titeln Modal. Kollar  lista över produkter(products[]) och hittar den som har samma namn som Modal-titeln. på så sätt  identifierar produckten som ska läggas i korgen. 

  
  //!*n2. Skapar en ny produkt baserat på den inkommande product (Iproduct),  
  

  //!* 3.Alla koder NEDAN MANIPULERAR DET LOKALA LAGRINGET Söker efter en befintlig LocalStorage-lista. Om det inte finns någon skapar det en tom array.

    //!* 4.Jämför  produkten med dem som finns  redan i localStorage. Om den hittar en matchning ställer den in matchIndex till indexet för den hittade matchningen. let matchIndex: nummer typ;




    //!* 5. Om en matchning hittades tidigare, ändrar det bara amount av det redan existerande objektet. Annars lägg till den som  ett nytt objekt till arrayen.
}
