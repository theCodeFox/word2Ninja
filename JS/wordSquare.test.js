// MUST PASS FOLLOWING TESTS:
// input: 4 aaccdeeeemmnnnoo
// input: 5 aaaeeeefhhmoonssrrrrttttw
// input: 5 aabbeeeeeeeehmosrrrruttvv
// input: 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
const wordSquare = require('./wordSquare');

test('returns string', () => {
  expect(wordSquare()).toBe('');
});
test('returns string containing given letters', () => {
  expect(wordSquare('a',1)).toBe('a');
})
test('returns letters if letters amount of letters given are second arg squared', () => {
  expect(wordSquare('onno',2)).toBe('on\nno');
})
