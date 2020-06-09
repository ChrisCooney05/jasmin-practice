'use strict';
describe("FizzBuzz", function(){
    
  it ("should return 'Fizz' when number divisible by 3", function(){
      expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it ("should return 'Buzz' when number is divisible by 5", function(){
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it ("should return 'FizzBuzz when number is divisible by 3 and 5", function(){
    expect(fizzBuzz(15)).toEqual("fizzBuzz");
  });

  it ("should return the number when not divisible by 3 or 5", function(){
    expect(fizzBuzz(7)).toEqual(7)
  });
});