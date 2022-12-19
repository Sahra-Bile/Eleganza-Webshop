//! Iproduct har nu  color, amount, title,desc, img, id och price
export class Product {
  constructor(
    public id: number,
    public title: string,
    public url: string,
    public desc: string,
    public price: number,
    public amount: number
  ) {}
}
