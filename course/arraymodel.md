---
layout: workshop
title: The Array Model
back: /course/6
next: /course/7
---

### Shape
All arrays can be described using two vectors: the **shape** and the **ravel** of elements.

The monadic *function* "ravel" `,` returns items of an array as a vector.

```APL
        ]box on
      ,'AB'∘.,'PQRS'
┌──┬──┬──┬──┬──┬──┬──┬──┐
│AP│AQ│AR│AS│BP│BQ│BR│BS│
└──┴──┴──┴──┴──┴──┴──┴──┘
```

The monadic *function* "shape" `⍴` returns the shape of an array. This is a vector of the length of each dimension.

```APL
      ⍴ 3 4 ∘.× 1 10 100
2 3
      (⍴3 4) ,⍴ 1 10 100
2 3
```

### Reshape  
The dyadic function **reshape** `⍴` takes elements from `⍵` and creates an array of shape `⍺`.

```APL
      3 4⍴⍳12       
1  2  3  4
5  6  7  8
9 10 11 12
      3 4⍴⍳10000   ⍝ Only the first (×/⍴⍵) elements are used
1  2  3  4
5  6  7  8
9 10 11 12
      3 4⍴⍳3       ⍝ Elements are repeated if there are too few
1 2 3 1
2 3 1 2
3 1 2 3

```

### Array Rank

The number of dimensions is the *rank* of an array. Dyalog supports arrays of up to rank 15.

```APL
      ≢⍴0 1∘.+2 3∘.-4 5∘.×6 7∘.÷8 9
5
```

It is not always obvious what the shape of an array is from its display form in the session.

```APL
      X←'ABCD'
      Y←'ABBA'
      X=Y
1 1 0 0

      X←1 4⍴'ABCD'
      X=Y
RANK ERROR: Mismatched left and right argument ranks
      X=Y
       ∧
```

Using `≢⍴` can reveal differences.

```APL
      ≢⍴,2   ⍝ Vectors are rank-1 arrays
1
      ≢⍴2    ⍝ Scalars are rank-0 arrays
0
```

### Empty Dimensions

Arrays can have dimensions of length 0. These arrays have a shape but no values.

```APL
      2 1 5⍴⎕A   ⍝ Two matrices with one row each
ABCDE
     
FGHIJ
      2 0 5⍴⎕A   ⍝ Two matrices with no rows

```

While `=` is a <a target="_blank" href="https://aplwiki.com/wiki/Scalar_function">scalar function</a>, dyadic **match** `≡` simply returns `1` if two arrays are equivalent and `0` otherwise.

```APL
      (,2)≡2     ⍝ A vector is not a scalar
0
      (,1)≡⍴,2   ⍝ The shape is always a vector
1       
      ⍬≡⍴2       ⍝ The shape of a scalar is the empty numeric vector zilde
1
      ⍬≡0⍴0      ⍝ Zilde has a shape of 0
1
      ⍬≡⍳0       ⍝ Array of the indices up to 0
1
      ''≡⍬       ⍝ EmptyCharacterVector ≢ EmptyNumericVector
0
        ''≡'list of all my friends'   ⍝ An empty array joke
1       
```
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

The dimensions of an array are also known as **axes**. The most major cells, of rank `k-1` for an array of rank `k`, lie along the *first* axis. The least major cells are scalars which lie along the *last* axis to form columns.

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

Some functions and operators can be used along specified axes using the [**function axis operator**](https://aplwiki.com/wiki/Function_axis) `[]` (more <a target="_blank" href="https://aplwiki.com/wiki/Function-operator_overloading">duplicitous</a> symbols).

Some useful bracket-axis constructs include:

Enclose with axis

```APL
      ⊂[3 1]2 3 4⍴⎕A
```

Which is equivalent to enclosing matrices after a dyadic transpose

```APL
      (⊂⍤2)3 1 2⍉2 3 4⍴⎕A
```

Reduce or scan with axis

```APL
      +/[1] 3 3⍴⍳9
      +\[2] 3 3⍴⍳9      
```

Which are equivalent to reductions / scans with rank

```APL
      +⌿⍤99⊢3 3⍴⍳9
      +⍀⍤1⊢3 3⍴⍳9
```

Ravel with consecutive axes to merge data along these axes.

```APL
      ,[1 2]2 3 4⍴⎕A
      ,[2 3]2 3 4⍴⎕A
```





Laminate

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
