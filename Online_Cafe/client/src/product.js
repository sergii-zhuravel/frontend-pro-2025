export class Phone {
  static PRO_16 = { name: "Pro 16", price: 1500 };
  static PRO = { name: "Pro", price: 1000 };

  constructor(model, memory) {
    this.model = model;
    this.memory = memory;
  }

  totalPrice() {
    return this.model.price; // TODO: add prices of additions
  }
}
