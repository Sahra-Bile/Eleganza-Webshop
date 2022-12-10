
import {ProductDetails} from "../models/productData"
let shpingCart:HTMLElement = document.getElementById('shopping-cart') as HTMLElement;
let cartAmountDiv: HTMLDivElement = document.getElementById('cartAmount') as HTMLDivElement;
let shopDiv: HTMLDivElement = document.getElementById('shop') as HTMLDivElement;
let labelDiv: HTMLDivElement = document.getElementById('shop') as HTMLDivElement;


/**
  * ! varuKorg för alla valda föremål
  * ? getItem-delen hämtar data från den lokala lagringen
  *  ? om local storage är tomt  korgen getItem blir en tom array 
  */
 
let elegansaProduct:[] = JSON.parse(localStorage.getItem("ProductDetails") || "[]")

 console.log(elegansaProduct);
/**
 * !För att beräkna det totala antalet valda produkter
 */

let calculation = () => {
  cartAmountDiv.innerHTML = elegansaProduct.map((x:any) => x.item).reduce((x:number, y:number) => x + y, 0);
};

calculation();