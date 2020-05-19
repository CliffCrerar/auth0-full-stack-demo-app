/* PRODUCTS MODEL */

export class ProductModel {
  constructor(
    public _id: string,
    public maker: string,
    public img: string,
    public url: string,
    public title: string,
    public _rev: string,
  ){}
}
