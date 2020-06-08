'use strict';


describe('Plane', function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });

  it ('Should be able to land a plane at an airport', function() {
    plane.land(airport)
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  })
});
