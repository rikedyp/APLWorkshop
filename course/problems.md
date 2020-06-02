---
layout: workshop
title: Candidate Problems
back: /
next: /
---

# Problems

## Rotate & Transpose
1. Given a multiplication table generated with ∘.×⍨N, write an expression to find N

```APL
      {(1 1⍉⍵)*0.5}      
```

### Roman Numeral Operator
Write an operator which converts roman numerals to numeric values, performs the operand function between the values and returns the result as roman numerals.

|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|**Symbol**|I|V|X|L|C|D|M|
|**Value**|1|5|10|50|100|500|1,000|

<br>

```APL
      'III'+Roman'II'
V 
      ⍳Roman'X'
I  II  III  IV  V  VI  VII  VIII  IX  X
```

### Counting k-mers

```APL
      'CGATATATCCATAG'{+/⍵⍷⍺}'ATA'
3     
     'ACGTTGCATGTCGCATGATGCATGAGAGCT'{∪mers⌷⍤0 99⍨⍸(⊢∊⌈/){≢⍵}⌸mers←(⊂⊢)⌺⍵⊢⍺}4
┌────┬────┐
│GCAT│CATG│
└────┴────┘
```

### Greater than Average
`{⍵⌿⍨(⊢>+⌿÷≢)⍵}`

### FizzBuzz
- dfns 
- @ or indexed-assignment 
- index generator

### Search and Replace

```APL
      ⎕R ⎕S 
      ⍷ @
      []←
```

### Remove leading ⍰s

- Remove leading `0`s from char vec representation of num
- Remove leading `' '` spaces

```APL
      ⍎⍕  ⍝ format / execute
      \   ⍝ scan
      ⌿   ⍝ compress
      {⍵⌿⍨⍺(∨⍀≠)⍵}
```

### Base conversion
Write a script that can convert integers to and from a base35 representation, using the characters 0-9 and A-Y. Dave Jacoby came up with nice description about base35, in case you needed some background.

### DNA Base Pairs
Translate DNA codons

### Pascal Triangle
`{∘.!⍨⍳⍵}`

### Niven numbers
Print all the niven numbers from 0 to 50 inclusive, each on their own line. A niven number is a non-negative number that is divisible by the sum of its digits.

```APL
      {w⌿⍨{0=⍵|⍨+/⍎¨⍕⍵}¨w←⍳⍵}
```

### Vigenère Cipher
https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher#Description

`↑⌽∘⎕A¨⍳26`

### Grille Cypher
`⍵[⍸⍵=' ']`

### Numerical Integration
Implement trapezoid and Simpsons integration with user-defined operators

### Excel Columns
Requires

```APL
⍳ ⍝ Index-of
⊥ ⍝ Base/Decode
```

### Largest Palindrome Product
Find the largest palindrome made from the product of two 3-digit numbers.

### Special Pythagorean Triplet
find a b c for which (a*2)+(b*2)+(c*2)=1000

### Polynomial

```APL
      {+/⍺×⍵*¯1+⌽⍳≢⍺}
      {⍵⊥⍺}
```

### Cover Up
This year's profit isn't quite as good as you'd hoped. The boss demands an average profit of `$X` and will not tolerate a month's income of less than `$Y`. Modify the income matrix to make the boss happy.

### GraphViz
Given a table representation of a directed graph, produce a valid GraphViz graph in Dot notation.

```APL
GraphViz←{                                            
     Q←'"','"',⍨⊢                              
     g←'digraph G{',⎕UCS 10                    
     v←{⊃(⊣,'->',⊢)/('"','"',⍨⊢)¨' '(≠⊆⊢)⍵}⍤1⊢⍵
     g,←,v,⍤1⊢⎕UCS 13                          
     g,'}'
}
```

# Show and Tell tasks
Students take some code, learn how it works and teach the class.

```APL
      {⊃(+/,⊃)⍣⍵⊢1} ⍝ Fibonacci
      {↑1 ⍵∨.∧3 4=+/,¯1 0 1∘.⊖¯1 0 1∘.⌽⊂⍵} ⍝ Game of Life
```

# Word problems
Text-processing problems. Some utilise the BSD word list `words.txt`.

1. Find Palindromes

1. Prefix / Suffix Search
    1. Find all words in `words.txt` which begin with ⍺
    1. Find all words in `words.txt` which end with ⍺
    
1. Case Closed
    1. Use `(⎕A,⎕D,' ')∘⍳` to convert text ⍵ to UPPERCASE
    1. Use `⌽` to convert to TitleCase

1)	Import `words.txt` using ⎕NGET and convert it to a text matrix called `words`
a)	How many words are in the dictionary?
b)	How short is the shortest?  How long is the longest?  

2)	Create a variable called  which is just the first 50 words in the dictionary.  Use this smaller variable to test your functions & expressions as you work below.  Once you have them working with , then you can try them out on the full dictionary .

3)	Find all palindromic words in the dictionary.  (Palindromes are identical when spelled backwards).

4)	Find the distribution of word lengths (i.e. How many words of each length) in the dictionary.  Hint:  There are at least four ways to do this. Bonus: Use cmpx to time the different methods.

5)	Also included in the workspace is a variable named , which contains the Scrabble point values of each letter in the alphabet.  
a)	Create a function named  which returns the total point value of a word. Don’t worry about details such as if there are enough of a certain letter – keep it simple.
b)	Using your function, what is the highest scoring word(s) in , and how many points is it worth? 

6)	Now let’s examine the distribution of letters in the dictionary.
a)	Create a table of the frequency distribution of letters in the alphabet.  Hint: First change  from a nested vector of vectors into a single vector.
b)	In the workspace there is a variable called , which is the actual letter distribution in the game.  Are there any large discrepancies between  and what you calculated in (a)?

# Image Processing

## Sobel

## Blur

## Voronoi diagrams