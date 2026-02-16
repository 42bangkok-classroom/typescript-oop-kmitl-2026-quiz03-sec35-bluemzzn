export class Person {
  public firstname: string = '';
  public lastname: string = '';
  private age: number = 0;
  static COUNTRY : string = 'Thailand';
  constructor(firstname: string = '', lastname: string = '', age: number = 0) {
    this.firstname = firstname ;
    this.lastname = lastname;
    this.age = age;
  }

  setAge(): void {
    this.age;
  }

  getAge(): number {
    return this.age;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
