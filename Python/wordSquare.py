# In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.
# For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.
# input: 4 eeeeddoonnnsssrv
# output:
# R O S E
# O V E N
# S E N D
# E N D S

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
