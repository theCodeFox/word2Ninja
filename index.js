const {
  filterWords, scrambleWords, humanReadableWordSquare
} = require('./helpers/helpers');
const {
  validateLetterAmount, validateWordAmount, validateSquare,
} = require('./helpers/validate');

// In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.
// For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.
// input: 4 eeeeddoonnnsssrv
// output:
// R O S E
// O V E N
// S E N D
// E N D S
const wordSquare = (letters) => {
  // validate input
  if (!validateLetterAmount(letters)) return `Invalid amount of letters. Letters provided: ${letters}`;

  const wordLength = Math.sqrt(letters.length);

  // filter word file so only words of correct length and letters returned
  // Returns array of objects with word and letter count.
  // Example: [ { word: 'aa', a: 2 } ]
  const validWords = filterWords(wordLength, letters);
  if(!validateWordAmount(validWords, wordLength)) return 'No word square available.';
  
  // find all word scrambles
  const scrambles = scrambleWords(validWords, wordLength);

  // filter scramble to return only valid word squares
  const validWordSquares = scrambles.filter(scramble => validateSquare(scramble, letters, wordLength));
  if(validWordSquares.length === 0) return 'No word square available.';

  // return message
  const squaresAmt = validWordSquares.length;
  const availableSquares = validWordSquares.map(square => {
    const humanReadable = humanReadableWordSquare(square, wordLength);
    return '\n\n'.concat(humanReadable.replace('-', '\n'));
    }).join('');
  const message = squaresAmt === 1 ? `There is 1 word square available.\n${availableSquares}` : `There are ${squaresAmt} word squares available.${availableSquares}`;
  return message;
};

module.exports = { wordSquare };
