import unittest
from wordSquare import *

class ScrambleTests(unittest.TestCase):
    # returns set
    def test_isSet(self):
        self.assertEqual(scramble(''),{''})
    # returns strings in list containing only inputted letters
    def test_isPermutation(self):
        self.assertEqual(scramble('a'),{'a'})
        self.assertEqual(scramble('ab'),{'ab','ba'})
        self.assertEqual(scramble('abc'),{'abc','acb','bac','bca','cab','cba'})

class ValidateWordSquareTests(unittest.TestCase):
    # returns boolean
    def test_validatesWordSquare(self):
        self.assertTrue(validateWordSquare('noor',2))
        self.assertFalse(validateWordSquare('abcd',2))

class ImportDictionary(unittest.TestCase):
    # returns list
    def test_isListOfStrings(self):
        self.assertEqual(dictionary()[1],'aah')

class ValidateWords(unittest.TestCase):
    # returns boolean
    def test_isListOfStrings(self):
        self.assertTrue(validateWords('noor',2))
        self.assertFalse(validateWords('abcd',2))
        

if __name__ == '__main__':
    unittest.main()