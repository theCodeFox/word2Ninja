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
  const words = filteredWordsByLetters.map(word => {
    const wordObj = { word };
    word.split('').forEach(letter => {
      wordObj[letter] ? wordObj[letter]++ : wordObj[letter] = 1;
    });
    return wordObj;
  });

  return words;
};

module.exports = { filterWords };
