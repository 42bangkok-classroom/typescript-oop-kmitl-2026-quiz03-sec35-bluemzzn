export class Product {
  public readonly name: string;
  private price: number = 0;
  constructor(name: string = '', price: number = 0) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }
}
