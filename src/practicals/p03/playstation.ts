import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
  public generation : number = 0; 

  constructor(name : string = '', generation : number = 0, price: number = 0){
    super(name,price);
    this.generation = generation;
  }

  getProfile(): string{
    return `${this.name} (Gen ${this.generation})`;
  }
  getDiscountPrice(): number{
    const discount = this.getPrice() * (Product.DISCOUNT_PERCENT / 100);
    return this.getPrice() - discount;
  }
}