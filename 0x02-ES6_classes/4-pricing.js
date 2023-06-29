import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  //   setter and getter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  //   Setter and getter for currency
  get currency() {
    return this._currnency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    const { _name, _code } = this._currency;
    return `${this._amount} ${_name} (${_code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
