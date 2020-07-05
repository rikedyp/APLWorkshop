---
layout: workshop
title: Cells and Rank
back: /course/day1/4
next: /course/todo
---

### Cells

Experiment with the following examples. Describe each one and then describe the behaviour of the rank operator `⍤` in terms of `⍺` and `⍵`. 

```APL
      names←↑'Angela' 'Pete' 'Leslie'
      scores←3 6 8
      'Pete  '(=⍤1 1)names
      scores[names⍳'Pete  ']
      (∧/names(=⍤1 1)'Pete  ')⌿scores
      names(∨/⍷⍤1)(⊃⌽⍴names)↑'Pete'
      mass←1 3 5 8 4
      pos←?5 3⍴0
      (+⌿÷≢)pos(×⍤2 0)mass
      ×⍤0⍤0 2⍨⍳10
      -⍤1⍤1 99⍨pos
```

{% include hint.html id="arrayModel" content="If you feel stuck, check out <a target=_blank href='/course/day1/arraymodel'>The Array Model</a>." %}

### Rank 

Which of the following functions are affected by the rank operator, and which are not?

```APL
⊖ ⌽
⌿ /
```

# Problems n: Cells & Rank
1. Match the following rank operands with their descriptions. Each use of rank pairs with two of the 10 description boxes below.


    `⍤1 3`

    ```APL
    ┌────┬────┬───┬─────┬──────┐
    │⍤1 3│⍤2 1│⍤¯1│⍤0 99│⍤99 ¯1│
    └────┴────┴───┴─────┴──────┘

    ┌─┐ ┌────────────────┐ ┌────────────┐
    │⍵│ │major cells of ⍺│ │vectors of ⍺│
    └─┘ └────────────────┘ └────────────┘
    ┌────────────────┐ ┌─┐ ┌──────────────┐
    │major cells of ⍵│ │⍺│ │3D arrays of ⍵│
    └────────────────┘ └─┘ └──────────────┘
    ┌────────────────┐ ┌────────────┐
    │major cells of ⍵│ │scalars of ⍺│
    └────────────────┘ └────────────┘
    ┌────────────────┐ ┌────────────────┐
    │matrices of ⍺   │ │vectors of ⍵    │
    └────────────────┘ └────────────────┘
    ```

1. For each name below, note the rank of arrays with that name.

    ```APL
    ┌────────┬────────────────────┐
    │Scalar  │                    │
    ├────────┼────────────────────┤
    │Vector  │rank-1 array        │
    ├────────┼────────────────────┤
    │Matrix  │                    │
    ├────────┼────────────────────┤
    │Table   │                    │
    ├────────┼────────────────────┤
    │List    │                    │
    ├────────┼────────────────────┤
    │Cube    │                    │
    ├────────┼────────────────────┤
    │Cuboid  │                    │
    ├────────┼────────────────────┤
    │4D array│                    │
    ├────────┼────────────────────┤
    │2D array│                    │
    └────────┴────────────────────┘
    ```

### Cells and Axes

### Rank and Axis