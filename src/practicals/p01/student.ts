export class Student {
  public firstname: string;
  public lastname: string;

  constructor(firstname: string = '', lastname: string = '') {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  printName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}