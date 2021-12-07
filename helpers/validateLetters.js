// validates amount of letters (a-z) is a valid square number
const validateLetterAmount = (letters) => {
  if (typeof letters === 'string') {
    const amountOfLetters = letters.replace(/[^a-z]/g, '').length;
    const letterSquareRoot = Math.sqrt(amountOfLetters);
    return amountOfLetters > 0 && letterSquareRoot === Math.floor(letterSquareRoot);
  }
  return false;
};

// splits word square so is more human readable
const humanReadableWordSquare = (letters, wordLength) => {
  const splitLetters = letters.split('');
  const joinedWordSquare = splitLetters.map((letter, i) => {
    const newLetter = ((i + 1) % wordLength === 0) && i + 1 !== splitLetters.length ? letter.concat('-') : letter;
    return newLetter;
  }).join('');
  return joinedWordSquare;
};

// validates letters are correct amount ??? separate this ???
// validates letters can create word square
const validateLetters = (letters) => {
  if (validateLetterAmount(letters)) {
    const wordLength = Math.sqrt(letters.length);
    const lettersArr = humanReadableWordSquare(letters, wordLength).split('-');
    for(let i = 0; i < lettersArr.length; i++) {
      for(let j = 0; j < lettersArr[i].length; j++) {
        if(lettersArr[i][j] !== lettersArr[j][i]) {
          return false;
        };
      };
    };
    return true;
    };
  return false;
};

module.exports = { validateLetterAmount, validateLetters };
