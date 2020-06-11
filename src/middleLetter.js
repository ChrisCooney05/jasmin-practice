'use strict';

function middleLetter(word) {
  let i = word.length
  if (i % 2 === 1) {
    return word[Math.floor(i / 2)];
  } else {
    return word[(i / 2)-1] + word[i / 2];
  }
};