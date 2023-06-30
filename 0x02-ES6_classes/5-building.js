export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Setter and getter of sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
