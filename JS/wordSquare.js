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
  for(let i=0;i<1000;i++) {
    const scrambled = scramble(string)
    if(!scrammbledArr.includes(scrambled)) {
      scrammbledArr.push(scrambled)
    }
  }
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
      return joinedWordSquare
    }
  })
  return validSquares
}

// filter dictionary for all possible words
const possibleWordArr = (letters,wordLength) => {
  const filteredDictionary = dictionary.filter(word => word.length === wordLength)
  const potentialWords = filteredDictionary.filter((word) => {
    let matchingLetters = 0
    let letterArr = letters.split('')
    const splitWord = word.split('')
    for(let i = 0;i < splitWord.length;i++) {
      if(letterArr.includes(splitWord[i])) {
        matchingLetters++
        const indexToRemove = letterArr.indexOf(splitWord[i])
        letterArr.splice(indexToRemove,1)
      }
    }
    if(matchingLetters === wordLength) {
      return word
    }
  })
  return potentialWords
}

// main function
const wordSquare = (input='') => {
  // handles empty string
  if(input === '') {
    return ''
  }

  // split input into necessary components
  const squareNumber = parseInt(input.split(' ')[0])
  const letters = input.replace(/[^a-zA-Z]/g,'')

  // basic error handling
  if(letters.length !== squareNumber*squareNumber) {
    return `You have requested a word square ${squareNumber}x${squareNumber}. Please enter ${squareNumber*squareNumber} letters.`
  }

  const splitLetters = letters.split('')
  const wordArr = splitLetters.map((letter,i) => {
    const newLetter = ((i+1)%squareNumber === 0) && i+1 !== splitLetters.length
      ? letter.concat('\n')
      : letter
    return newLetter
  })
  joinedWordSquare = wordArr.join('')

  // console.log(joinedWordSquare)
  return joinedWordSquare;
}

module.exports = {
  wordSquare,
  possibleWordArr,
  validateWordSquare,
  scramble,
  validScramble,
  dictionary
};
