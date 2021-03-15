# In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.
# For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.
# input: 4 eeeeddoonnnsssrv
# output:
# R O S E
# O V E N
# S E N D
# E N D S

# needed for the url request
from urllib.request import urlopen

# fetches valid word square words from provided url
# as of python 3.5, returned values are in bytes so must be decoded before being treated like strings
# more efficent to utilise the one in top level, but won't update...
def dictionary():
    # words = open('../dictionary.txt','r').read()
    with urlopen('http://norvig.com/ngrams/enable1.txt') as w:
        words = w.read().decode('utf-8')
    wordList = words.split('\n')
    return wordList

# scramble string
# returns all permutations of given string in a set
# changed to set output to avoid dupes and make more efficient
def scramble(stringInput):
    if len(stringInput) <= 1:
        return {stringInput}

    scrambledLetters = []
    for l in stringInput:
        for permutation in scramble(stringInput.replace(l,'',1)):
            scrambledLetters.append(l + permutation)
    return set(scrambledLetters)

# validates that string input would make a valid word square based off word length
# returns true if inputted string is valid
# returns false if inputted string is invalid
def validateWordSquare(stringInput,wordLength):
    wordSplit = [ stringInput[i:i+wordLength] for i in range(0, len(stringInput), wordLength) ]
    for i,word in enumerate(wordSplit):
        for j,letter in enumerate(word):
            if wordSplit[i][j] != wordSplit[j][i]:
                return False
    return True

# validate words making valid word square are valid words
# cross checks words against dictionary
def validateWords(stringInput,wordLength):
    validWords = []
    wordSplit = [ stringInput[i:i+wordLength] for i in range(0, len(stringInput), wordLength) ]
    overlap = set(wordSplit).intersection(dictionary())
    comparrison = bool(len(overlap) == wordLength)
    return comparrison

# insert \n for human readable line breaks
def insertLineBreak(stringInput, wordLength):
    lines = []
    for i in range(0, len(stringInput), wordLength):
        lines.append(stringInput[i:i+wordLength])
    square = '\n'.join(lines)
    return square

# utilises above functions to take in input in format "2 abcd"
# output will be a word square as a string of words split by \n so is human readable when printed in the console
def wordSquare(stringInput):
    splitInput = stringInput.split()
    if len(splitInput) != 2:
        return 'Invalid input'
    wordLength = int(splitInput[0])
    wordSquareString = str(splitInput[1]).lower()
    if len(wordSquareString) != wordLength*wordLength:
        return 'Invalid input'
    # find those permutations
    scrambles = scramble(wordSquareString)
    # validate the permutations
    validScrambles = []
    for square in scrambles:
        if validateWordSquare(square,wordLength):
            if validateWords(square,wordLength):
                readableSquare = insertLineBreak(square,wordLength)
                validScrambles.append(readableSquare)
    if len(validScrambles) == 0:
        return 'No valid word squares!'
    return validScrambles[0]