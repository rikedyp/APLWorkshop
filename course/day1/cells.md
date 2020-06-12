---
layout: workshop
title: Cells and Rank
back: /course/day1/4
next: /course/todo
---

### Cells

Try the following examples. Describe each one and then describe the general behaviour 

```APL
      names←↑'Angela' 'Pete' 'Leslie'
      'Pete'(=⍤1 1)names
      names(∨/⍷⍤1)(⊃⌽⍴names)↑'Pete'
      mass←1 3 5 8 4
      pos←?5 3⍴0
      (+⌿÷≢)pos(×⍤2 0)mass
      ×⍤0⍤0 2⍨⍳10
      -⍤1⍤1 99⍨pos
```

### Rank

```APL
⊖ ⌽
⍪ ,
⌿ /
```