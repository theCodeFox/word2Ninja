const {
  validateLetterAmount, validateWordAmount, validateSquare,
} = require('../helpers/validate');

describe.skip('validateLetterAmount', () => {
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

describe.skip('validateWordAmount', () => {
  test('returns false if incorrect amount of letters given', () => {
    expect(validateWordAmount(['abc', 'cab'], 3)).toEqual(false);
    expect(validateWordAmount(['qwert', 'asdfg', 'zxcvb', 'poiuy'], 5)).toEqual(false);
  });
  test('returns true if correct amount of letters given', () => {
    expect(validateWordAmount(['abc', 'cab', 'bac'], 3)).toEqual(true);
    expect(validateWordAmount(['qwert', 'asdfg', 'zxcvb', 'poiuy', 'lkjhg', 'mnbvc', 'pdyhn', 'qwtyb'], 5)).toEqual(true);
  });
});

describe.skip('validateSquare', () => {
  test('returns false if letters CANT make a word square', () => {
    expect(validateSquare('abcd', 'abcd', 2)).toEqual(false);
    expect(validateSquare('rossovensendends', 'rossovensendendd', 4)).toEqual(false);
    expect(validateSquare('bravadorenamedanalogyvaluingamoebasdegradeodyssey', 'bravadorenamedanalogyvaluingamoebasdegradeodyssey', 7)).toEqual(false);
  });
  test('returns true if letters CAN make a word square', () => {
    expect(validateSquare('abba', 'aabb', 2)).toEqual(true);
    expect(validateSquare('roseovensendends', 'roseovensendends', 4)).toEqual(true);
    expect(validateSquare('bravadorenamedanalogyvaluersamoebasdegradeodyssey', 'bravadorenamedanalogyvaluersamoebasdegradeodyssey', 7)).toEqual(true);
  });
});
