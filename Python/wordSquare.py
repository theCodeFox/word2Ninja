# In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.
# For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.
# input: 4 eeeeddoonnnsssrv
# output:
# R O S E
# O V E N
# S E N D
# E N D S

# scramble string
# returns all permutations of given string
def scramble(stringInput):
    if len(stringInput) <= 1:
        return {stringInput}

    scrambledLetters = []
    for l in stringInput:
        for permutation in scramble(stringInput.replace(l,'',1)):
            scrambledLetters.append(l + permutation)
    return set(scrambledLetters)

