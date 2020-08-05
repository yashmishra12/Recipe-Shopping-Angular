export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
 // Or you can do this: -> constructor(public name: string, public amount: number) {}
}
