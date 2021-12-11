const { humanReadableWordSquare } = require("./helpers");

// validates amount of letters (a-z) is a valid square number
const validateLetterAmount = (letters) => {
  if (typeof letters === 'string') {
    const amountOfLetters = letters.replace(/[^a-z]/g, '').length;
    const letterSquareRoot = Math.sqrt(amountOfLetters);
    return amountOfLetters > 0 && letterSquareRoot === Math.floor(letterSquareRoot);
  }
  return false;
};

const validateWordAmount = (words, wordLength) => {
  if (words.length >= wordLength) return true;
  return false;
}

// validates letters are correct amount ??? separate this ???
// validates letters can create word square
const validateSquare = (square, letters, wordLength) => {
  // check same letters in square & letters
  const sortedSquare = square.split('').sort().join('');
  const sortedLetters = letters.split('').sort().join('');
  if (sortedSquare !== sortedLetters) return false;

  const lettersArr = humanReadableWordSquare(square, wordLength).split('-');
  for(let i = 0; i < lettersArr.length; i++) {
    for(let j = 0; j < lettersArr[i].length; j++) {
      if(lettersArr[i][j] !== lettersArr[j][i]) {
        return false;
      };
    };
  };
  return true;
};

module.exports = {
  validateLetterAmount, validateWordAmount, validateSquare,
};
