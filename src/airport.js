class Airport {

  constructor() {
    this._hanger = []
  }

  hanger(){
    return this._hanger;
  };

  clearForLanding(plane) {
    this._hanger.push(plane)
  }
  
};