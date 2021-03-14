const {
  wordSquare,
  possibleWordArr,
  validateWordSquare,
  scramble,
  validScramble,
  dictionary
} = require('./wordSquare');


// tests for scramble
describe('scramble', () => {
  test('returns string of same length as input', () => {
    expect(scramble('a').length).toEqual(1);
  });
  test('returns random string', () => {
    let output = ['abc','acb','bac','bca','cab','cba'];
    expect(scramble('abc')).toEqual(expect.arrayContaining(output));
  });
});

// tests for validScrambles
describe('validScrambles', () => {
  test('returns array', () => {
    expect(validScramble('abcd',2)).toEqual([]);
  });
  test('returns array of valid, unchecked word squares', () => {
    const output = ['noor','roon'];
    expect(validScramble('noor',2)).toEqual(expect.arrayContaining(output));
  });
})

// tests for possibleWordArr
describe('possibleWordArr', () => {
  test('returns array', () => {
    expect(possibleWordArr(['xxxx'],2)).toEqual([]);
  });
  test('returns array of possible word squares', () => {
    expect(possibleWordArr(['noor','roon'],2)).toEqual(['noor']);
  });
})

// tests for basic word square construct
describe('wordSquare', () => {
  test('returns string', () => {
    expect(wordSquare()).toBe('');
  });
  test('returns letters if letters amount of letters given are second arg squared', () => {
    expect(wordSquare('2 noor')).toBe('no\nor');
  });
  test('returns error if incorrect number of letters given', () => {
    expect(wordSquare('2 onnoo')).toBe('You have requested a word square 2x2. Please enter 4 letters.');
    expect(wordSquare('1 a')).toBe('Word squares must be a minimum of 2x2.');
  });
  test('output is valid word square', () => {
    const validOutput = wordSquare('2 noor');
    const invalidOutput = wordSquare('2 abcd');
    expect(validateWordSquare(validOutput)).toBe(true);
    expect(invalidOutput).toBe('No valid word square. Please try some different letters.');
  });
});

// test input: 4 aaccdeeeemmnnnoo
describe.skip('test input 1', () => {
  const input = '4 aaccdeeeemmnnnoo';
  const output = ''
  test('returns output', () => {
    expect(wordSquare(input)).toBe(output);
  });
});
// test input: 5 aaaeeeefhhmoonssrrrrttttw
describe.skip('test input 1', () => {
  const input = '5 aaaeeeefhhmoonssrrrrttttw';
  const output = ''
  test('returns output', () => {
    expect(wordSquare(input)).toBe(output);
  });
});
// test input: 5 aabbeeeeeeeehmosrrrruttvv
describe.skip('test input 1', () => {
  const input = '5 aabbeeeeeeeehmosrrrruttvv';
  const output = ''
  test('returns output', () => {
    expect(wordSquare(input)).toBe(output);
  });
});
// test input: 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
describe.skip('test input 1', () => {
  const input = '7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy';
  const output = ''
  test('returns output', () => {
    expect(wordSquare(input)).toBe(output);
  });
});
