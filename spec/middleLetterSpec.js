'use strict';

describe('middleLetter', function() {
  it ('Returns A when passed the letter A', function() {
    expect(middleLetter('A')).toEqual('A');
  });

  it ('Returns Of when passed Of', function() {
    expect(middleLetter('Of')).toEqual('Of');
  });
});