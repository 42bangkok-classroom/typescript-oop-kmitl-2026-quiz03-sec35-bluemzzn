export class Student {
  constructor(
    public firstname: string,
    public lastname: string
  ) {}

  printName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
