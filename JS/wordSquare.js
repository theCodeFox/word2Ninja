// In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.
// For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.
// input: 4 eeeeddoonnnsssrv
// output:
// R O S E
// O V E N
// S E N D
// E N D S

// dictionary for valid words
const fs = require('fs');
const text = fs.readFileSync('./dictionary.txt').toString('utf-8');
const dictionary = text.split('\n');

// add \n at end of words in square so displays in a human readable forat in terminal
// returns word square string with words split by \n
const wordArr = (splitLetters,wordLength) => {
  const joinedWordSquare = splitLetters.map((letter,i) => {
    const newLetter = ((i+1)%wordLength === 0) && i+1 !== splitLetters.length ? letter.concat('\n') : letter;
    return newLetter;
  }).join('');
  return joinedWordSquare;
};


// validate word square
// returns true if given a string that makes a valid word square, else return false
const validateWordSquare = (wordSquareString) => {
  const wordSquareArr = wordSquareString.split('\n');
  for(let i = 0;i < wordSquareArr.length;i++) {
    for(let j = 0;j < wordSquareArr[i].length;j++) {
      if(wordSquareArr[i][j] !== wordSquareArr[j][i]) {
        return false;
      };
    };
  };
  return true;
};

// scramble
// originally was a quick randomisation function, but was highly inefficient.
// To attempt to make it more efficient, I created a recursive function to find permutations, but still caused memory error.
// Now utilises "Heap's method". Still casing memory error, but much more efficient
// next step to increase efficiency, will be to batch permutations
// returns array of all possible permutations
const scramble = (string) => {
  let permutation = string.split('');
  const len = permutation.length;
  const permutedArr = [permutation.slice()];
  const c = new Array(len).fill(0);
  let i = 1;
  while (i < len) {
    if (c[i] < i) {
      let k = i % 2 && c[i];
      let p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      permutedArr.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    };
  };
  const result = permutedArr.map(arr => {
    return arr.join('');
  });
  return result;
};

// array of valid scrambles
// check permutations against word square validation function
// filter out any permutations that are not considered to be valid word squares
// returns array of filtered word square permutations
const validScramble = (string,wordLength) => {
  let scrammbledArr = scramble(string);
  const validSquares = scrammbledArr.filter((letters) => {
    const splitLetters = letters.split('');
    const joinedWordSquare = wordArr(splitLetters,wordLength);
    if(validateWordSquare(joinedWordSquare)) {
      return joinedWordSquare;
    };
  });
  return validSquares;
};

// filter dictionary for all possible words
// filters dictionary for words matching word square length
// checks if each word is in filtered dictionary
// filters out word square strings were not all words are in dictionary
// returns array of word square solutions
const possibleWordArr = (possibleScrambles,wordLength) => {
  const filteredDictionary = dictionary.filter(word => word.length === wordLength);
  const checkForRealWords = possibleScrambles.filter(letters => {
    const splitLetters = letters.split('');
    const joinedWordSquare = wordArr(splitLetters,wordLength);
    const validateWords = joinedWordSquare.split('\n').filter(word => {
      if(filteredDictionary.includes(word)) {
        return word;
      };
    });
    if(validateWords.length === wordLength) {
      return validateWords;
    };
  });
  return checkForRealWords;
};

// main function
// takes an input string in format "number characters". EG "2 abcd".
// some basic error handling. Focused on happy path.
// returns first word square solution as a string, with words split by \n so is human readable in terminal
const wordSquare = (input='') => {
  // handles empty string
  if(input === '') {
    return '';
  };

  // split input into necessary components
  const wordLength = parseInt(input.split(' ')[0]);
  const letters = input.replace(/[^a-zA-Z]/g,'');

  // basic error handling
  if(letters.length !== wordLength*wordLength) {
    return `You have requested a word square ${wordLength}x${wordLength}. Please enter ${wordLength*wordLength} letters.`;
  };
  if(wordLength === 1) {
    return 'Word squares must be a minimum of 2x2.';
  };

  // scrambles letters and validates them as potential word squares
  const possibleScrambles = validScramble(letters,wordLength);

  // validates word squares are made up of valid words
  const validatedWordSquares = possibleWordArr(possibleScrambles,wordLength);

  // checks for valid word squares in case there are none!
  if(validatedWordSquares.length > 0) {
    // chooses first one and makes human readable
    const splitLetters = validatedWordSquares[0].split('');
    const joinedWordSquare = wordArr(splitLetters,wordLength);
    return joinedWordSquare;
  } else {
    return 'No valid word square. Please try some different letters.';
  };
};

// exports functions so can be built in TDD style
module.exports = {
  wordSquare,
  possibleWordArr,
  validateWordSquare,
  scramble,
  validScramble,
  dictionary
};
