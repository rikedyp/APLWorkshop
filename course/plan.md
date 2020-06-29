---
layout: workshop
title: Course Outline
back: /course/day1/4
next: /course/todo
---

# APL Workshop Plan

# Day 1

Introduction to APL and Problem Solving

## 1: First Steps

#### Learning Objectives

1. Use an APL interpreter
1. Understand the meaning of monadic and dyadic function application  
1. Understand the order of execution   
1. Understand conformance of arguments to scalar functions

#### Success Criteria
1. Type APL symbols  
1. Solve simple arithmetic problems using reductions
1. Change the order of execution using parentheses

Primitives & Basic constructs:

```APL
      + - ¯ × = 
      +/⍳N
      (a-b)-c
```
   
## 2: Dfns and Assignment

#### To do
- examples which generate errors 
- demonstrate iterative function building in the session (video)

#### Learning Objectives
1. Know what dfns are and what they look like
1. Know how to assign names 

#### Success Critera
1. Write one-line dfns to solve simple problems
1. Use in-line assignment to solve simple problems

Primitives & Basic constructs:

```APL
      ≢ ⌊ | ÷
      {⍺⍵}
      name ← value      
```

## 3: Selecting from Lists

#### To do
- Where without ⍸ problem
- Compression

#### Learning Objectives
1. Understand that logical statements can be expressed as selections from arrays
1. Know how to use scalar logic functions
1. Know how to select from vectors using compress and square brackets

#### Success Criteria
1. Solve problems using selection

New constructs:

```APL
      [] ⍸ 
      {⍵/⍳≢⍵}
```

## 4: The Outer Product

#### Learning Objectives
1. Understand that the outer product `⍺ ∘.f ⍵` can be used to compute tables

#### Success Criteria
1. Produce tables using `∘.f`
1. Solve some categorisation problems

#### New constructs

```APL
      ∘.f , ⌿     
      < ≤ ≥ > 
```

## Reductions

#### Note
While all older writing uses the axis operator, modern APLers benefit from the rank operator. The rank operator can often produce exactly equivalent expressions as axis, and rank is more general in that it can apply to any function including user-defined functions. Therefore, I believe a modern introduction should only use the rank operator for these concepts. However, since the axis operator appears in existing code - and it is useful for some mental models of certain array operations - it might be prudent to include axis early on, and a comparison of the *axis vs. rank* models of arrays a bit later.

#### Learning Objectives
1. Understand that all arrays are described as a shape and a list of values
1. Know how to use the shape and reshape functions `⍴`
1. Know that `≢⍴` is the rank of an array
1. Understand empty axes and empty arrays
1. Understand empty array jokes

#### Success Criteria
1. Determine the shape of the result of some expressions using only the shape of the arguments
1. Solve problems using `⍴` and summation using axis or rank
1. Summarise data along different dimensions using the rank operator

```APL
      (⍴)(≢⍴) 
      (+⌿⍤k)
      +⌿[a]
```

## Cells and Rank

#### Learning Objectives
1. Know the terms major cell, k-cell, axis (possibly), dimension, tally and rank - and what they are in terms of array shape
1. Know the difference between simple and nested arrays
1. Know how to use rank `⍤` to loop over k-cells

#### Success Criteria
1. Students can apply the rank operator to solve a variety of problems, including those previously solved using `⍴` reshape (to make two arrays conformable)
1. Students can reason about when an application of rank will error

#### New constructs

```APL
      ↑ ↓   ⍝ Mix / split
```

## Indexing

#### To do
Example:
Monthly sales data
Reshape into years / quarters & do summaries

#### Learning Objectives
1. Understand that the shape of an indexing expression is determined by the shape of the array of indices

#### Success Criteria
1. Students can determine the shape of the result of an indexing expression without executing (without the `⍴` shape function)
1. Students can solve problems using `⍳` index-of with `[]` simple indexing

#### New Constructs

```APL
      array[I]
      array[n m⍴I]
      array[;n m⍴I;]
      a ⍳ b        ⍝ Index-of
      {(≢⍺)≥⍺⍳⍵}   ⍝ First-axis membership
```

#### Optional Extras
- `⌷⍤` Squad with rank
- `⌷[]` Squad with axis
- `,⍪⊖⌽` Other axis-optional primitives compared to their use with rank

## Workspace Basics

#### Learning Objectives
1. Understand that a workspace is a collection of APL names
1. Understand the a namespace is a collection of APL names which resides in a workspace
1. Know how to use dot notation to access names inside namespaces
1. Understand that non-object names are pass-by-value and that object names are pass-by-reference

### Success Criteria
Students can
- Name a workspace
- Save a workspace
- Load a workspace
- Copy names from a workspace
- Create a named namespace
- Copy functions into a namespace using `NS.⎕CY`

#### New constructs:

```APL
      )CLEAR )ERASE
      )VARS )FNS )OBS
      )SAVE )LOAD )XLOAD )COPY )PCOPY
      )DROP
      ⎕NL-⍳9
      )WSID FirstnameLastname
      )SAVE 
      )SAVE FirstnameLastname       
      )CLEAR      
      'Day1'⎕NS''
      Day1.⎕CY'MyWS'
      )SAVE'MyWS'
      # ## ⎕PATH
      ⎕SE
```

# Day 2

## Going Deeper
Primitive Loops and Recursion 

#### Learning Objectives
1. To understand stranding
1. To know that "floating scalars" means that both the enclose and disclose of a simple scalar is itself
1. Know how to use each `¨` to loop over elements 
1. Know how to use `⍣` for iteration
1. Know how to use `∇` dfn recursion
1. Know that the prototypes for numeric and character arrays are `0` and `' '` respectively.

#### Success Criteria
1. Determine the results of expressions involving stranding
1. Solve problems using `¨ ⍣ ∇` different forms of iteration and recursion

#### New constructs

```APL
      ≡ ⍬ ''
      ¨ ⍤ ⍣
      {∇⍵}
      ⊂ ⊃
```

#### Examples

```APL
      enm←2 3⍴⍬
      ecm←3 2⍴''
      'a' 'b' 'c'
      'abc'
      mixed←3 3⍴1 2 3 'a' 'b' 'c'       
      3 1⍴mixed enm ecm
      ⍪mixed enm ecm
      mixed,ecm
      mixed⍪ecm
      mixed⍪enm
      3 3⍴mixed,ecm 
      3 3⍴mixed enm,ecm
```

- Fac
- Fib
- `NSort←{0=⍴⍵:⍬⋄(U⌿⍵),∇(~U←⍵=⌊⌿⍵)⌿⍵}`
- `TSort←{⍺[((⍴⍵)[2])S ⍺⍳⍵]}`
- `S←{⍺=0:⍵ ⋄ (⍺-1)S ⍵[⍋⍵[;⍺];]}`

## Files & IO
How to read input and write output, both in the session and on the file system

#### New constructs

```APL
      ⎕ ⍞ {//⎕VFI⍵}
      ⎕←
      ⎕CSV ⎕JSON ⎕XML
      ⎕NGET ⎕NPUT
      ⎕F...
```

## Tools & Interfaces
Practise using some of the tools provided by the IDE. It is likely that content from here will be redistributed throughout the course where specific tools are relevant to particular examples.

- Tool bar (paste object, )
- User commands
- Graph
- HttpCommand?

## Handling Data
Practise using existing knowledge, as well as some new constructs, in tasks which involve handling "real" data (some of it may be from real sources, some may be created specifically to demonstrate a primitive or technique).

#### To do
IRL data e.g. https://www.kaggle.com/sudalairajkumar/daily-temperature-of-major-cities

#### New constructs

```APL
      ⌸ ⍸ @ ⊤ ⊥ 
      ⍒ ⍋ ⌽ ⍉ ⊖
      ⍷
      ⎕C ⎕DT
      {⍵[⍋⍵]}
      ]box on 
      ]rows -fold=3
      ⎕PW ⎕PP 
```

### Topics
- Organising data
    - Sorting
    - Classifying
- Transforming data
    - Base conversion 
    - Case mapping/folding
    - Structural
        - Rotate
        - Transpose

# Day 3

## Extra Assignment
- Valid names `a_ó∆ø1⍙`
- Names do not begin with a `⎕D` digit   
- Selective assignment
- Indexed assignment
    - When is `(C[n]←C[n]+1) ≢ C[n]+←1`?
- Modified assignment
- `(strand assignment) ← value1 value2`
- Cannot change var to fn/op (or vice versa) on reassignment
    
    ```APL
          foo←{⍺+⍵}
          foo←42
    SYNTAX ERROR: Invalid modified assignment, or an attempt was made to change nameclass on assignment
          foo←42
          ∧
    ```

- Sparse Matrices

## User Defined Functions

#### Learning Objectives
1. Know when it is appropriate to use each form of user definition
    1. Dfns for pure functions & data transformation
    1. Tradfns for program control and system interaction
    1. Tacit for idioms 

#### Success Criteria
1. Reason about whether a particular function form is appropriate for a particular task
1. Convert dfns to tacit and vice versa
1. Spot errors when name class changes on assignment

#### Optional Extra
- User-defined operators

## Control Flow

#### To do
https://nbviewer.jupyter.org/github/rikedyp/LearnAPL/blob/master/Tutorials/MarkingTests.ipynb

#### New constructs:

```APL
      :If :ElseIf :AndIf :OrIf :EndIf
      :Select :Case :EndSelect
      :For :While 
      :Repeat 
      :Trap
      :With :Hold    
      :Leave :Continue
```

- Interrupt `Ctrl+Break`
- Strong Interrupt 
- While 
    
    ```APL
          :While LikelyToBeFalse
          :AndIf ExpensiveTest          
    ```
    
    is probably better than
    
    ```APL
          :While LikelyToBeFalse ∧ ExpensiveTest
    ```

    You will often see
    
    ```APL
          :While PreCondition
          :AndIf OnlyComputableIfPreCondition
    ```

## Errors

#### Learning Objectives
1. Know the causes of common error messages
1. Know how to find the description of a numeric error code
1. Understand basic trapping and signalling of errors

#### Success Criteria
1. Use `⍳` index-of to find the codes of errors and vice versa
1. Use aplcart to find the codes of errors and vice versa
1. Write control structures to signal or re-signal errors in specific cases

```APL
      ⎕EM ⎕DMX
      ⎕TRAP ⎕SIGNAL
      :Trap :Case :EndTrap
      →   ⍝ Naked branch
      )reset )sic
```

- System functions & commands cheat sheet

## Out in the Wild
Constructs which exist in older APL code but are considered problematic. Users will need to know what they mean, and may be required to use them to maintain the style of an existing code base.

- GoTo, ppt 4, slide 105

```APL
      →Condition/⎕LC
      →⍬
      :GoTo Label:
      (strand assignment) ← value1 value2
```

- ⎕PATH can be used to set a relative search space, in addition to ⎕THIS
    "⎕PATH does not support derived functions and will not be extended to support them; nor will it be extended to support other types of functions that may be developed in the future. ⎕PATH may therefore be considered an archaic feature."

## Your Resources
- APL Wiki
- F1 / web help
- Email
- Dyalog forums
- APL Orchard
- APLCart

## Final Project
Longer form practise project where students apply knowledge and use resources to build small applications

# Optional Extras

These modules may be linked to form parts of the main course, intended for use if certain students complete sections very quickly. Of course, having students teach others, thereby reinforcing their own learning, is very beneficial as well.

## The Inner Product

## Array & Interpreter Internals

```APL
⎕DR ⎕FR ⎕CT ⎕ML 

⍝ Array analysis
'char' 'ref' 'num'[(326∘= + (~2|⊢))⎕DR¨mat]

```

## Notes on Performance