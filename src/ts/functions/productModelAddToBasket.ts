import {Iproducts} from "../models/Iproducts" //! interface
import {Product} from "../models/products" //! class 
import{ProductDetails} from "../models/productData" //! lagrat alla produkter i en array

const productModalAddToBasket = () =>{
let modelContainer:HTMLDivElement = document.getElementById('"modal-container')as HTMLDivElement;
let modalTitle:HTMLParagraphElement = document.getElementById('modal-title')as HTMLParagraphElement;
let addButton:HTMLButtonElement = document.getElementById('add-Product') as HTMLButtonElement;
let modalAmountInput:HTMLInputElement = document.getElementById('modal-amount') as HTMLInputElement;
let modalColorSelect:HTMLSelectElement = document.getElementById('modal-color')as HTMLSelectElement;
let modalDescriptionSpan:HTMLSpanElement = document.getElementById('modal-desc') as HTMLSpanElement;


/**
*! Tar titeln Modal. Kollar min lista över produkter(products[]) och hittar den som har samma namn som modal-titel .   
  */
 addButton.addEventListener('click', (e: MouseEvent) =>{
  let arriveProduct: Iproducts;
  let productTittle:string = modalTitle.innerHTML;
  ProductDetails.forEach((product) =>{
    productTittle === product.title ? (arriveProduct = product) :null;
  });
  
  /**
   * !Skapar en ny produkt baserat på den inkommande produkten färg- och antal som användaren har lagt in.
   */

 });
}