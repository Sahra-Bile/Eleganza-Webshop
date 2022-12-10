

// ! interface för att beskriva egenskapen som produkterna har
export interface Iproducts{
  id:number;
  title:string;
  img:string;
  desc:string;
  price: number;
  color: Icolor;

}

export interface Icolor{
color_1: string;
color_2: string;
color_3: string;

}