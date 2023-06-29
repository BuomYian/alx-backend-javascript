export default class Car {
  // Initializing the constructor
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  //   Setter and getter for brand
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  //   Setter and getter for mottor
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  //   Setter and getter for color
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  //   Defining a method
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
