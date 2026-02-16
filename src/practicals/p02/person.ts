export class Person {
  public firstname: string;
  public lastname: string;
  private age: number;
  static COUNTRY : string;
  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname ;
    this.lastname = lastname;
    this.age = age;
  }

  setAge(): void {}

  getAge(): void {}

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
