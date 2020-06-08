'use strict'

describe('Airport', function(){

  let airport;
  let plane;

  beforeEach( function (){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('should initialise an airport with an empty hanger', function(){
    expect(airport.hanger()).toEqual([])
  });

  it( 'Can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.hanger()).toEqual([plane]);
  });
})
