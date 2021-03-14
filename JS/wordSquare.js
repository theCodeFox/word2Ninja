// In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.
// For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.
// input: 4 eeeeddoonnnsssrv
// output:
// R O S E
// O V E N
// S E N D
// E N D S

// dictionary
const fs = require('fs');
const text = fs.readFileSync('./dictionary.txt').toString('utf-8');
const dictionary = text.split('\n')

// validate word square
const validateWordSquare = (wordSquareString) => {
  const wordSquareArr = wordSquareString.split('\n');
  for(let i = 0;i < wordSquareArr.length;i++) {
    for(let j = 0;j < wordSquareArr[i].length;j++) {
      if(wordSquareArr[i][j] !== wordSquareArr[j][i]) {
        return false
      }
    }
  }
  return true
}

// scramble
const scramble = (string) => {
  let stringArr = string.split('')
  for(let i = stringArr.length - 1;i > 0;i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let swap = stringArr[i]
    stringArr[i] = stringArr[j]
    stringArr[j] = swap
  }
  return stringArr.join('')
}

// array of valid scrambles
const validScramble = (string,wordlength) => {
  let scrammbledArr = []
  let usedChars = []
  // find all permutations
  const permute = (inputtedString) => {
    let i
    const letters = inputtedString.split('')
    for(i = 0; i < letters.length; i++) {
      let l = letters.splice(i, 1)
      usedChars.push(l)
      if (letters.length === 0)
      scrammbledArr[scrammbledArr.length] = usedChars.join('')
      permute(letters.join(''));
      letters.splice(i, 0, l);
      usedChars.pop();
    }
    return scrammbledArr
  };
  permute(string)
  console.log(scrammbledArr)
  const validSquares = scrammbledArr.filter((letters) => {
    const splitLetters = letters.split('')
    const wordArr = splitLetters.map((letter,i) => {
      const newLetter = ((i+1)%wordlength === 0) && i+1 !== splitLetters.length
        ? letter.concat('\n')
        : letter
      return newLetter
    })
    const joinedWordSquare = wordArr.join('')
    if(validateWordSquare(joinedWordSquare)) {
      // console.log(joinedWordSquare,'slash n still present')
      return joinedWordSquare
    }
  })
  // console.log(validSquares,'<---slash n disappeared???')
  return validSquares
}

// filter dictionary for all possible words
const possibleWordArr = (possibleScrambles,wordLength) => {
  const filteredDictionary = dictionary.filter(word => word.length === wordLength)
  const checkForRealWords = possibleScrambles.filter(letters => {
    const splitLetters = letters.split('')
    const wordArr = splitLetters.map((letter,i) => {
      const newLetter = ((i+1)%wordLength === 0) && i+1 !== splitLetters.length
        ? letter.concat('\n')
        : letter
      return newLetter
    }).join('')
    const validateWords = wordArr.split('\n').filter(word => {
      if(filteredDictionary.includes(word)) {
        return word
      }
    })
    if(validateWords.length === wordLength) {
      return validateWords
    }
  })
  return checkForRealWords
}

// main function
const wordSquare = (input='') => {
  // handles empty string
  if(input === '') {
    return ''
  }

  // split input into necessary components
  const wordLength = parseInt(input.split(' ')[0])
  const letters = input.replace(/[^a-zA-Z]/g,'')

  // basic error handling
  if(letters.length !== wordLength*wordLength) {
    return `You have requested a word square ${wordLength}x${wordLength}. Please enter ${wordLength*wordLength} letters.`
  }
  if(wordLength === 1) {
    return 'Word squares must be a minimum of 2x2.'
  }

  // scrambles letters and validates them as potential word squares
  const possibleScrambles = validScramble(letters,wordLength)

  // validates word squares are made up of valid words
  const validatedWordSquares = possibleWordArr(possibleScrambles,wordLength)

  // checks for valid word squares
  if(validatedWordSquares.length > 0) {
    // chooses first one and makes human readable
    const splitLetters = validatedWordSquares[0].split('')
    const wordArr = splitLetters.map((letter,i) => {
      const newLetter = ((i+1)%wordLength === 0) && i+1 !== splitLetters.length
        ? letter.concat('\n')
        : letter
      return newLetter
    })
    const joinedWordSquare = wordArr.join('')
    console.log(joinedWordSquare)
    return joinedWordSquare;
  }
  else {
    return 'No valid word square. Please try some different letters.'
  }
}

module.exports = {
  wordSquare,
  possibleWordArr,
  validateWordSquare,
  scramble,
  validScramble,
  dictionary
};
