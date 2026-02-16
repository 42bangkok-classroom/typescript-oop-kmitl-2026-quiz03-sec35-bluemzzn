export class Product {
  public readonly name: string = "";
  private price: number = 0;
  constructor(name?: string, price?: number) {}

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }
}
