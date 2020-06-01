---
layout: workshop
title: Candidate Problems
back: /
next: /
---

# Problems

### FizzBuzz
- dfns
- indexed-assignment
- @
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

```APL
```

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
