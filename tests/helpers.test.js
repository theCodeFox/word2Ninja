const {
  filterWords, humanReadableWordSquare, scrambleWords,
} = require('../helpers/helpers');

describe.skip('filterWords', () => {
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

describe.skip('scrambleWords', () => {
  test('returns false if letters CANT make a word square', () => {
    const smallWordArr = ['aa', 'ab', 'ba'];
    expect(scrambleWords(smallWordArr, 2).length).toEqual(6);
    expect(scrambleWords(smallWordArr, 2)[0]).toEqual('aaab');
    expect(scrambleWords(smallWordArr, 2)[5]).toEqual('baab');

    const mediumWordArr = ['rose', 'seed', 'nose', 'deer', 'oven', 'send', 'ends'];
    expect(scrambleWords(mediumWordArr, 4).length).toEqual(5040);
    expect(scrambleWords(mediumWordArr, 4)[0]).toEqual('roseseednosedeer');
    expect(scrambleWords(mediumWordArr, 4)[5]).toEqual('noseseedrosedeer');
    
    const largeWordArr = ['rose', 'seed', 'nose', 'deer', 'oven', 'send', 'ends', 'rose', 'seed', 'nose'];
    // const largeWordArr = ['rose', 'seed', 'nose', 'deer', 'oven', 'send', 'ends', 'rose', 'seed', 'nose', 'deer', 'oven', 'send', 'ends', 'rose'];
    // const largeWordArr = ['rose', 'seed', 'nose', 'deer', 'oven', 'send', 'ends', 'rose', 'seed', 'nose', 'deer', 'oven', 'send', 'ends', 'rose', 'seed', 'nose', 'deer', 'oven', 'send'];
    expect(scrambleWords(largeWordArr, 4).length).toEqual(5040);
    expect(scrambleWords(largeWordArr, 4)[0]).toEqual('roseseednosedeer');
    expect(scrambleWords(largeWordArr, 4)[5]).toEqual('noseseedrosedeer');
  });
});

describe.skip('humanReadableWordSquare', () => {
  test('returns false if letters CANT make a word square', () => {
    expect(humanReadableWordSquare('abba', 2)).toEqual('ab-ba');
    expect(humanReadableWordSquare('roseovensendends', 4)).toEqual('rose-oven-send-ends');
    expect(humanReadableWordSquare('bravadorenamedanalogyvaluersamoebasdegradeodyssey', 7)).toEqual('bravado-renamed-analogy-valuers-amoebas-degrade-odyssey');
  });
});
