// dictionary for valid words
const fs = require('fs');
// file location is relative to root directory
const text = fs.readFileSync('./data/dictionary.txt').toString('utf-8');
const dictionary = text.split('\n');

const filterWords = (wordLength, letters) => {
  // filter words by length to cut noise
  const filteredDictionaryByLength = dictionary.filter(word => word.length === wordLength);
  
  // filter remaining words by regex
  const lettersToRegEx = new RegExp(`[${letters}]`, 'g');
  const filteredWordsByLetters = filteredDictionaryByLength.filter(word => {
    const matchedLetters = word.match(lettersToRegEx);
    const isMatched = matchedLetters && matchedLetters.length >= wordLength;
    const lettersCount = {};
    letters.split('').forEach((letter => {
      lettersCount[letter] ? lettersCount[letter]++ : lettersCount[letter] = 1;
    }));
    const isValid = word.split('').filter(letter => {
      if (lettersCount[letter] && lettersCount[letter] > 0) {
        lettersCount[letter]--;
        return letter;
      }
    }).length > 0;
    return isMatched && isValid;
  });

  // keys = word & letters in word
  // values = full word & count of that letter
  // const words = filteredWordsByLetters.map(word => {
    // const wordObj = { word };
    // word.split('').forEach(letter => {
    //   wordObj[letter] ? wordObj[letter]++ : wordObj[letter] = 1;
    // });
    // return wordObj;
  // });

  return filteredWordsByLetters;
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

const scrambleWords = (words, squareLength) => {
  let permutation = [...words];
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
    return arr.slice(0, squareLength).join('');
  });
  return result;
};

module.exports = {
  filterWords, humanReadableWordSquare, scrambleWords,
};
