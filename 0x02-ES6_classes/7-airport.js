export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Setter and getter for name and code
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
