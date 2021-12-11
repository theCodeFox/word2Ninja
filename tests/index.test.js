const { wordSquare } = require('../index');

describe('wordSquare', () => {
  // test('returns available word squares with word length of 2', () => {
  //   const result = 'There are 2 word squares available.\n\nab\nba\n\nba\nab'
  //   expect(wordSquare('abba')).toEqual(result);
  // });
  test('returns available word squares with word length of 4', () => {
    const result = 'There are 2 word squares available.\n\nab\nba\n\nba\nab'
    expect(wordSquare('roseovensendends')).toEqual(result);
  });
  // test('returns available word squares with word length of 7', () => {
  //   const result = 'There are 2 word squares available.\n\nab\nba\n\nba\nab'
  //   expect(wordSquare('bravadorenamedanalogyvaluersamoebasdegradeodyssey')).toEqual(result);
  // });
});
