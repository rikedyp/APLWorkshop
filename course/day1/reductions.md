---
layout: workshop
title: Reductions
back: /course/day1/outerproduct
next: /course/cells
---

### Array Basics
It is possible to gain an understanding of a function or expression by using it in a few examples, and then attempting to state briefly in English what it does. Beside each expression below, write a brief definition in English.

For example:  
`      2×⍳⍵   ⍝ Even integers from 2 to 2×⍵ inclusive`

```APL
      rain←?7 5 12⍴250   ⍝ rain is the monthly rainfall in millimeters over 7 years for 5 countries
      3 4⍴⍳12            ⍝ A 4 row, 3 column matrix of the integers from 1 to 12 inclusive      
      ⍴cards←'A123456789TJQK'∘.,'♠♥♦♣'
      ⍉cards
      (,cards)[?52]
      alph←2 3 4⍴⎕A
      ,alph
      
```

(⌈/,⌊/),rain←7 5 12⍴⌊0.5+-100×15⍟?(×/7 5 12)⍴0

### Summary Statistics

Below each expression below, write a brief statement of what it does. If necessary, consult the hints which follow the group of expressions.

```APL
      (+⌿⍤1)rain   ⍝ Total rainfall for each of 7 years in 5 countries
      +⌿rain          
      (+⌿⍤2)rain
      (+⌿⍤3)rain
      ⌈⌿rain
      (⌈⌿⍤2)rain
      rain[⍸rain>250]
```

{% include hint.html id="shape" content="Look at the shapes of the arguments and the results, <code class='language-apl'>⍴rain</code> and <code class='language-apl'>⍴+⌿rain</code> etc." %}

```APL
      a←6↑⎕A      
      a,a
      a⍪a
      alph(⍪⍤2)alph
      1(↑⍤1)alph
      ¯2(↑⍤2)alph
```

1. Write a expression to find the average monthly rainfall for each of the 7 years in each of the 5 countries.

1. Write an expression to find the total annual rainfall averaged over 7 years for each of the 5 countries.

1. 
    1. Use the match function `≡` to determine which expressions below produce the empty character vector `''` and the empty numeric vector `⍬`.
        ```APL
              0⍴0
              0↑⎕A 
              ⍳0
              0⍴''
              0⍴'def'
              0 0⍴'abc'
              2 0 3⍴⍳6
        ```
    1. Write a function `IsEmpty` to determine if an array has an empty axis.
        ```APL
              IsEmpty 2 0 3⍴⍳4
        1
              IsEmpty 2 2 3⍴⍳4
        0
              IsEmpty 0
        0
              IsEmpty 0⍴0
        1
        ```

1. 