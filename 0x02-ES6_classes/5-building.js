export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // setter and getter for sqft
  get sqft() {
    return this._sqft;
  }

  evacuattionWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
