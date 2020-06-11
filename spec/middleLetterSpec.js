'use strict';

// eslint-disable-next-line no-undef
describe('middleLetter', function() {
  it ('Returns A when passed the letter A', function() {
    // eslint-disable-next-line no-undef
    expect(middleLetter('A')).toEqual('A');
  });

  it ('Returns Of when passed Of', function() {
    expect(middleLetter('Of')).toEqual('Of');
  });

  it( 'Returns o when passed Dog', function() {
    expect(middleLetter('Dog')).toEqual('o');
  })
});