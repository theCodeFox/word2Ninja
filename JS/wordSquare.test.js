// MUST PASS FOLLOWING TESTS:
// input: 4 aaccdeeeemmnnnoo
// input: 5 aaaeeeefhhmoonssrrrrttttw
// input: 5 aabbeeeeeeeehmosrrrruttvv
// input: 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
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
  test('returns string', () => {
    expect(scramble('')).toEqual('');
  });
  test('returns string of same length as input', () => {
    expect(scramble('a').length).toEqual(1);
  });
  test('returns random string', () => {
    let countOutput = {
      'abc':0,
      'acb':0,
      'bac':0,
      'bca':0,
      'cab':0,
      'cba':0
    };
    for(let i=0;i<1000;i++) {
      const scrambled = scramble('abc')
      countOutput[scrambled]++
    }
    expect(countOutput['abc']).toBeGreaterThan(0);
    expect(countOutput['acb']).toBeGreaterThan(0);
    expect(countOutput['bac']).toBeGreaterThan(0);
    expect(countOutput['bca']).toBeGreaterThan(0);
    expect(countOutput['cab']).toBeGreaterThan(0);
    expect(countOutput['cba']).toBeGreaterThan(0);
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
    expect(possibleWordArr('xxxx',2)).toEqual([]);
  });
  test('returns array of possible words', () => {
    expect(possibleWordArr('noor',2)).toEqual(['no','on','or']);
  });
  test('words returned are in dictionary', () => {
    const output = possibleWordArr('noor',2)
    expect(dictionary).toEqual(expect.arrayContaining(output));
  });
})

// tests for basic word square construct
describe('wordSquare', () => {
  test('returns string', () => {
    expect(wordSquare()).toBe('');
  });
  test('returns string containing given letters', () => {
    expect(wordSquare('1 a')).toBe('a');
  });
  test('returns letters if letters amount of letters given are second arg squared', () => {
    expect(wordSquare('2 onno')).toBe('on\nno');
  });
  test('returns error if incorrect number of letters given', () => {
    expect(wordSquare('2 onnoo')).toBe('You have requested a word square 2x2. Please enter 4 letters.');
  });
  test('output is valid word square', () => {
    const validOutput = wordSquare('2 noor');
    const invalidOutput = wordSquare('2 abcd');
    expect(validateWordSquare(validOutput)).toBe(true);
    expect(validateWordSquare(invalidOutput)).toBe(false);
  });
});
