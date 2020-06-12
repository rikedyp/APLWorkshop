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
      'Pete  '(=⍤1 1)names
      scores[names⍳'Pete  ']
      scores⌿⍨∧/names(=⍤1 1)'Pete  '
      names(∨/⍷⍤1)(⊃⌽⍴names)↑'Pete'
      mass←1 3 5 8 4
      pos←?5 3⍴0
      (+⌿÷≢)pos(×⍤2 0)mass
      ×⍤0⍤0 2⍨⍳10
      -⍤1⍤1 99⍨pos
```

{% include hint.html id="arrayModel" content="If you feel stuck, check out <a target=_blank href='/course/day1/arraymodel'>The Array Model</a>." %}

### Rank

```APL
⊖ ⌽
⌿ /
```

# Problems n: Cells & Rank
1. Match the following rank operands with their descriptions. All expressions


    `⍤1 3`

    ```APL
    ┌────┬────┬───┬─────┬──────┐
    │⍤1 3│⍤2 1│⍤¯1│⍤0 99│⍤99 ¯1│
    └────┴────┴───┴─────┴──────┘

    ┌────────────────┬────────────────┐
    │3D arrays of ⍵  │major cells of ⍺│
    ├────────────────┼────────────────┤
    │vectors of ⍺    │matrices of ⍺   │
    ├────────────────┼────────────────┤
    │vectors of ⍵    │3D arrays of ⍵  │
    ├────────────────┼────────────────┤
    │major cells of ⍺│scalars of ⍺    │
    ├────────────────┼────────────────┤
    │matrices of ⍺   │vectors of ⍵    │
    └────────────────┴────────────────┘
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
