# __word<sup>2</sup> Ninja__
## __Challenge__
In a word square you are given a grid with letters arranged that spell valid English language words when you read from left to right or from top to bottom, with the requirement that the words you spell in each column and row of the same number are the same word.

For example, the first row and the first column spell the same word, the second row and second column do, too, and so on. The challenge is that in arranging those letters that you spell valid words that meet those requirements.

### __Example__

__input__: 4 eeeeddoonnnsssrv

__output__:

R O S E

O V E N

S E N D

E N D S

---

### __Instructions to clone repo__

1. go to "https://github.com/theCodeFox/word2Ninja"
2. navigate to directory in terminal where you would be happy to store challenge
3. run "git clone https://github.com/theCodeFox/word2Ninja.git"

---

## __JS__
JavaScript soltion is stored in the JS directory.

### __Required Tech__:
* NodeJS - v14.15.0
* npm - v7.5.2
* Jest - v26.6.3

### __To Run__:
1. open your command line terminal
2. cd into JS directory
3. "npm i" will install needed version of Jest
4. "npm run test" will run test suite, inc last 4 set tests

___Note__: current solution works for word squares of 2 & 3, but runs out of memorory at 4 or above. Looking at increasing efficiency via batching permutations. Once complete, uncomment console.log()s in wordSquare.test.js so test outcomes will appear in human format printing in terminal. Once efficiency is increased so will run final tests, look at reading dictionary at http source via ajax._

---

## __Python__
Python soltion is stored in the Python directory.

### __Required Tech__:
* Python - v3.9.0

### __To Run__:
1. open your command line terminal
2. cd into Python directory
3. "python wordSquareTests.py" in terminal will run test suite, inc last 4 set tests

___Note__: current solution works for word squares up to 5 but runs out of memory for final test. Once efficiency is increased so will run final test, uncomment out last test. To look at filtering dictionary and reducing to single call only. Also look to increase efficiency on scramble function. Last group of tests are currently skipped so other tests will run without causing too much slow down_