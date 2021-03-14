import unittest
from wordSquare import *

class ScrambleTests(unittest.TestCase):

    # returns list
    def test_isList(self):
        self.assertEqual(scramble(''),[''])

    # returns strings in list containing only inputted letters
    def test_isPermutation(self):
        self.assertEqual(scramble('a'),['a'])
        self.assertEqual(scramble('ab'),['ab','ba'])
        self.assertEqual(scramble('abc'),['abc','acb','bac','bca','cab','cba'])
        

if __name__ == '__main__':
    unittest.main()