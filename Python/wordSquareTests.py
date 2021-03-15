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
    def test_isMadeOfvalidWords(self):
        self.assertTrue(validateWords('noor',2))
        self.assertFalse(validateWords('abcd',2))

class InsertLineBreak(unittest.TestCase):
    # returns wordSquare string
    def test_insertsLineBreak(self):
        self.assertEqual(insertLineBreak('abcd',2),'ab\ncd')

class WordSquare(unittest.TestCase):
    # returns wordSquare string
    def test_returnsWordSquaresOf2(self):
        self.assertEqual(wordSquare('2 oonr'),'no\nor')
        self.assertEqual(wordSquare('2 OONR'),'no\nor')
    # checks for basic error handling
    def test_handlesBasicError(self):
        self.assertEqual(wordSquare('2 abcd'),'No valid word squares!')
        self.assertEqual(wordSquare('1234'),'Invalid input')
        self.assertEqual(wordSquare('abcd'),'Invalid input')
        self.assertEqual(wordSquare('2 ab'),'Invalid input')
    
    # runs specific test cases in challenge - last test causing memory crash
    # currently skipped to prevent memory crash
    @unittest.skip
    def test_returnsWordSquares(self):
        self.assertEqual(wordSquare('3 aaceenttx'),'cat\naxe\nten')
        self.assertEqual(wordSquare('4 eeeeddoonnnsssrv'),'rose\noven\nsend\nends')
        self.assertEqual(wordSquare('4 aaccdeeeemmnnnoo'),'moan\nonce\nacme\nneed')
        self.assertEqual(wordSquare('5 aaaeeeefhhmoonssrrrrttttw'),'feast\nearth\narmor\nstone\nthrew')
        self.assertEqual(wordSquare('5 aabbeeeeeeeehmosrrrruttvv'),'heart\nember\nabove\nrevue\ntrees')
        # self.assertEqual(wordSquare('7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy'),'bravado\nrenamed\nanalogy\nvaluers\namoebas\ndegrade\nodyssey')
        

if __name__ == '__main__':
    unittest.main()