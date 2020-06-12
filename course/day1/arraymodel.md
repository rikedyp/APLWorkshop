---
layout: workshop
title: The Array Model
back: /
next: /
---

### Cells and Axes
From the APL Wiki: 
A <a target="_blank" href="https://aplwiki.com/wiki/Cell">cell</a> is a subarray which is formed by selecting a single index along some number of leading axes and the whole of each trailing axis. Cells are classified by their rank, which may be between 0 (scalars) and the array's rank (in which case the cell must be the entire array). Cells with rank k are called k-cells of an array. A major cell is a cell whose rank is one less than the entire array, or a 0-cell of a scalar. 

```APL
      ⍴cuboid←2 3∘.+3 4 5∘.×4 5 6 7
2 3 4 ← trailing (last) axis
↑
leading (first) axis
```

In the array `cuboid` defined above, there are `2` **major cells**, which are those of rank `¯1+≢⍴cuboid`.

```APL
      2 3 4⍴⎕A
ABCD
EFGH
IJKL
    
MNOP
QRST
UVWX
      ≢2 3 4⍴⎕A      ⍝ Tally counts the major cells
2
```

The dimensions of an array are also known as **axes**. The most major cells, the rank `k-1` for an array of rank `k`, lie along the *first* axis. The least major cells are columns which lie along the *last* axis.

Cells of rank

### Rank vs. Axis
We have seen two pairs of *first-* and *last-axis* primitives.

```APL
      n←2 3⍴1 2 3 1 0 ¯1
      n
1 2  3
1 0 ¯1
      +/n   ⍝ Sum along the last axis
6 0
      +⌿n   ⍝ Sum along the first axis
2 2 2
      7,n   ⍝ Catenate last
7 1 2  3
7 1 0 ¯1
      n⍪7   ⍝ Catenate first
1 2  3
1 0 ¯1
7 7  7
```

```APL
      '-'⍪2 3⍴'DYALOG'
---
DYA
LOG
      '|',2 3⍴'DYALOG'
|DYA
|LOG
```

Some functions and operators can be used along specified axes using the **function axis operator** `[]` (more <a target="_blank" href="https://aplwiki.com/wiki/Function-operator_overloading">duplicitous</a> symbols).

```APL
      tt←6 4⍴'⎕'
      lt←4 6⍴'⌹'
      lv←6⍴'○'
      sv←4⍴'⍟'
      tt lt lv sv
┌────┬──────┬──────┬────┐
│⎕⎕⎕⎕│⌹⌹⌹⌹⌹⌹│○○○○○○│⍟⍟⍟⍟│
│⎕⎕⎕⎕│⌹⌹⌹⌹⌹⌹│      │    │
│⎕⎕⎕⎕│⌹⌹⌹⌹⌹⌹│      │    │
│⎕⎕⎕⎕│⌹⌹⌹⌹⌹⌹│      │    │
│⎕⎕⎕⎕│      │      │    │
│⎕⎕⎕⎕│      │      │    │
└────┴──────┴──────┴────┘
```

### Nested Arrays
Although you have seen them, we have yet to mention **nested arrays**. They will be discussed in more detail later, but for now you should know arrays with boxed display (when `]boxing` is on) are nested arrays. Non-nested arrays are called **simple arrays**.

```APL
      2 3⍴'DYALOG'        ⍝ A simple numeric matrix
DYA
LOG
      3⍴'DY' 'AL' 'OG'    ⍝ A nested vector of character vectors
┌──┬──┬──┐
│DY│AL│OG│
└──┴──┴──┘
      2 2⍴⍳4              ⍝ A simple numeric matrix
1 2
3 4
      3⍴(1 2)(3 4)(5 6)   ⍝ A nested vector of numeric vectors
┌───┬───┬───┐
│1 2│3 4│5 6│
└───┴───┴───┘
```

### Primitive Loops
The rank `⍤` operator can be used to loop.

---
**Nerd Note**

While the mental model of rank `⍤` is a loop over k-cells, the interpreter can sometimes use vector instructions to do parallel processing.

---

# Problem Set 6: Rank, Axes and Primitive Loops