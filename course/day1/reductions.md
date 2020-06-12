---
layout: workshop
title: Reductions
back: /course/day1/outerproduct
next: /course/cells
---

### Array Basics
It is easy to gain an understanding of a function or expression by using it in a few examples, and then attempting to state briefly in English what it does. Beside each expression below, write a brief definition in English.

For example:  
`      2×⍳⍵   ⍝ Even integers from 2 to 2×⍵ inclusive`

```APL
      rain←?7 5 12⍴250   ⍝ Monthly rainfall in millimeters over 7 years for 5 countries
      3 3⍴⍳9             ⍝ A 3 row, 3 column matrix of the integers from 1 to 9 inclusive      
      ⍴'A123456789TJQK'∘.,'♠♥♦♣'
      ⍴⍉'A123456789TJQK'∘.,'♠♥♦♣'
      (,'A123456789TJQK'∘.,'♠♥♦♣')[?52]
      alph←2 3 4⍴⎕A


```

(⌈/,⌊/),rain←7 5 12⍴⌊0.5+-100×15⍟?(×/7 5 12)⍴0

### Summary Statistics

Below each expression below, write a brief statement of what it does. If necessary, consult the hints which follow the group of expressions.

```APL
      +⌿rain
      (+⌿⍤1)rain
      (+⌿⍤2)rain
      (+⌿⍤3)rain
      ⌈⌿rain
      (⌈⌿⍤2)rain
      rain[⍸rain>250]
```

{% include hint.html id="shape" content="Look at the shapes of the arguments and the results, <code class='language-apl'>⍴rain</code> and <code class='language-apl'>⍴+⌿rain</code> etc." %}

```APL
      n←6↑⎕A
      a←2 3 4⍴⎕A
      n,n
      n⍪n
      a(⍪⍤2)a
```

1. Write a expression to find the average monthly rainfall for each of the 7 years in each of the 5 countries.

1. Write an expression to find the total annual rainfall averaged over 7 years for each of the 5 countries.

