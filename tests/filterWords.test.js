const { filterWords } = require('../helpers/filterWords');

describe('filterWords', () => {
  test('returns array of small length words', () => {
    expect(filterWords(2,'ab').length).toEqual(3);
  });
  test('returns array of medium length words', () => {
    expect(filterWords(5,'aahed').length).toEqual(4);
  });
  test('returns array of large length words', () => {
    expect(filterWords(8,'aardvarks').length).toEqual(2);
  });
});
