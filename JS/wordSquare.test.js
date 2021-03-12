// MUST PASS FOLLOWING TESTS:
// input: 4 aaccdeeeemmnnnoo
// input: 5 aaaeeeefhhmoonssrrrrttttw
// input: 5 aabbeeeeeeeehmosrrrruttvv
// input: 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
const { wordSquare,dictionary } = require('./wordSquare');
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
};

// tests for basic word square construct
test('returns string', () => {
  expect(wordSquare()).toBe('');
});
test('returns string containing given letters', () => {
  expect(wordSquare('1 a')).toBe('a');
})
test('returns letters if letters amount of letters given are second arg squared', () => {
  expect(wordSquare('2 onno')).toBe('on\nno');
})
test('returns error if incorrect number of letters given', () => {
  expect(wordSquare('2 onnoo')).toBe('You have requested a word square 2x2. Please enter 4 letters.');
})
test('output is valid word square', () => {
  const validOutput = wordSquare('2 noor');
  const invalidOutput = wordSquare('2 abcd');
  expect(validateWordSquare(validOutput)).toBe(true);
  expect(validateWordSquare(invalidOutput)).toBe(false);
})

// tests for actual words

