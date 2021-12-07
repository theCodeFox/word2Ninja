const { validateLetterAmount, validateLetters } = require('../helpers/validateLetters');

describe('validateLetters', () => {
  test('returns false if incorrect amount of letters given', () => {
    expect(validateLetterAmount(1)).toEqual(false);
    expect(validateLetterAmount('')).toEqual(false);
    expect(validateLetterAmount('abc')).toEqual(false);
    expect(validateLetterAmount('a1-y')).toEqual(false);
  });
  test('returns true if correct amount of letters given', () => {
    expect(validateLetterAmount('a')).toEqual(true);
    expect(validateLetterAmount('abcd')).toEqual(true);
    expect(validateLetterAmount('abcdefghi')).toEqual(true);
  });
});

describe('validateletters', () => {
  test('returns false if letters CANT make a word square', () => {
    expect(validateLetters('abcd')).toEqual(false);
    expect(validateLetters('qwertyuiopasdfgh')).toEqual(false);
    expect(validateLetters('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcv')).toEqual(false);
  });
  test('returns true if letters CAN make a word square', () => {
    expect(validateLetters('abba')).toEqual(true);
    expect(validateLetters('roseovensendends')).toEqual(true);
    expect(validateLetters('bravadorenamedanalogyvaluersamoebasdegradeodyssey')).toEqual(true);
  });
});
