---
layout: workshop
title: Going Deeper
back: /course/
next: /course/
---

### Depth
We introduced stranding to show how it formed vectors before the application of dyadic functions, for example:

```APL
      2 + 2 2 + 2   
      2 + 2 (2 + 2)
      (2 + 2) 2 + 2
```

Stranding is a useful way to form arrays. Generally, arrays separated by spaces form vectors. 

```APL
      2 3⍴'DY' 'AL' 'OG'
      bnm←2 3⍴⍬
      bcm←3 2⍴''
      'a' 'b' 'c'
      mixed←3 3⍴1 2 3 'a' 'b' 'c'
      mixed2←3 3⍴1 2 3 'abc'
      3 1⍴mixed enm ecm
      ⍪mixed enm ecm
      ↑mixed enm ecm
      mixed,ecm
      mixed⍪ecm
      mixed⍪enm
      3 3⍴mixed,ecm
      3 3⍴mixed enm,ecm
```

A simple scalar is a rank-0 array which contains itself as its value.

```APL
      'a'≡⊃'a'   ⍝ The disclose of a simple scalar is itself
      42≡⊂42     ⍝ As is the enclose
```

### Primitive Loops

Is an element a rank-0 cell of an array? Or is it the stuff inside of a rank-0 cell of an array?

Experiment with the following expressions to determine what the `¨` each operator does.

```APL
      's',¨'ong' 'ink' 'and'
      'lph',¨'ong' 'ink' 'and'
      (1 2)(2 2)(3 1)⍴¨3 4 5
      2 2∘⍴¨3 4 5
```

The next number in the Fibonacci sequence is the sum of the previous two numbers. Examine this version using the `⍣` power operator.

```APL
      {⊃(+/,⊃)⍣⍵⊢1}
```


We are going to do some text processing on a dictionary of words. 

If you have access to the internet, the following expressions will download a text file dictionary (917kB in size) and store it as a nested vector of character vectors named `words`.

```APL
      ]Load HttpCommand
      words ← (⎕UCS 10) {(⍺≠⍵)⊆⍵} (HttpCommand.Get'https://tinyurl.com/y7asendy').Data
```

(If this doesn't work, the tinyurl is a link to [here]( https://gist.githubusercontent.com/rikedyp/35370da13597947eb3e9dbb32ebec942/raw/d9783627c731268fb2935a731a618aa8e95cf465/words))

Now answer these questions about palindromes.

A palindrome is the same when reversed. For example, *racecar* is a palindrome but *racecat* is not.

1. How many palindromes are there in `words`?

1. Which palindrome in `words` is the longest?

### An introduction to an introduction to an introduction to an introduction to an int...

Try the following dfns with various numeric arguments. Which symbol refers to the function itself? Which symbol separates statements? Which symbol represents a condition?

```APL
      {⍺←1 1 ⋄ ⍵=2:⍺ ⋄ (⍺,(+/¯2↑⍺))∇⍵-1}
```

Give the function an appropriate name.

If a function gets stuck in an infinite loop, use `Action → Interrupt` in the menu.

1. Write the shortest dfn which causes infinite recursion.

1. Write the shortest dfn which causes infinite recursion unless its argument is `0`.

1. The factorial function multiplies integers up to `⍵`. Write the factorial function as a dfn called `Factorial`. Use the primitive `!` factorial function to check your solution. 

### A Sort of Detour
```APL
      NSort←{0=⍴⍵:⍬⋄(U/⍵),∇(~U←⍵=⌊/⍵)/⍵}
```

```APL
      ↑'Bracken' 'Dolphin' 'Saucer' 'Magnet' 'Floop'
```
- `TSort←{⍺[((⍴⍵)[2])S ⍺⍳⍵]}`
- `S←{⍺=0:⍵ ⋄ (⍺-1)S ⍵[⍋⍵[;⍺];]}`

What do the following expressions tell you about the `⍋` grade-up and `⍒` grade-down functions on high-rank arrays?

```APL
      ⍋4 2 2⍴∊1 2 3 4,¨?4⍴(⊂3⍴10)
      ⍒4 2 2⍴'ABCD',¨{⎕A[⍵]}¨?4⍴(⊂3⍴10)
```



#### Task