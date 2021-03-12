// MUST PASS FOLLOWING TESTS:
// input: 4 aaccdeeeemmnnnoo
// input: 5 aaaeeeefhhmoonssrrrrttttw
// input: 5 aabbeeeeeeeehmosrrrruttvv
// input: 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
const wordSquare = require('./wordSquare');

// tests for basic word square
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
