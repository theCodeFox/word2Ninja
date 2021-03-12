// MUST PASS FOLLOWING TESTS:
// input: 4 aaccdeeeemmnnnoo
// input: 5 aaaeeeefhhmoonssrrrrttttw
// input: 5 aabbeeeeeeeehmosrrrruttvv
// input: 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy

const sum = require('./wordSquare');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});