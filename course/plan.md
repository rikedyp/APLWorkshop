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

#### To do
- counting vowels / text problems
- Use `⌿`

#### Learning Objectives

1. Use an APL interpreter
1. Understand the meaning of monadic and dyadic function application  
1. Understand the order of execution   
1. Understand conformance of arguments to scalar functions

#### Success Criteria
Students can:
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
- examples which generate errors to be fixed
- demonstrate iterative function building in the session

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
1. Students can solve problems using selection

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

#### Learning Objectives
1. Understand that all arrays are described as a shape and a list of values
1. Know how to use the shape and reshape functions `⍴`
1. Know that `≢⍴` is the rank of an array
1. Understand empty axes and empty arrays
1. Understand empty array jokes

#### Success Criteria
1. Students can determine the shape of the result of an outer product or indexing expression without evaluating the expression
1. Students can solve problems using `⍴` and simple indexing
1. Students can summarise data along different dimensions using the rank operator

```APL
      (⍴)(≢⍴) 
      (+⌿⍤k)
      +⌿[a]
```

## Cells and Rank

#### Learning Objectives
1. Know the terms major cell, k-cell, axis, dimension, tally and rank in terms of array shape
1. Know the difference between simple and nested arrays
1. Know how to use rank `⍤` to loop over k-cells

#### Success Criteria
1. Students can apply 
1. Students can reason about when an application of rank will error

#### New constructs

```APL
      ⍤ ⌷ ⊂ []
```

## Indexing

#### To do
- Cells & Axes
- Reshaping data for processing
- Selecting data of different shapes
    - Link to webinar 
- Index-of
- High rank membership
- PDI

Example:
Monthly sales data
Reshape into years / quarters & do summaries

#### Learning Objectives
1. Understand that the shape of an indexing expression is determined by the shape of the array of indices

#### Success Criteria

#### New Constructs

```APL
      array[I]
      array[n m⍴I]
      array[;;]
      a ⍳ b        ⍝ Index-of
      {(≢⍺)≥⍺⍳⍵}   ⍝ First-axis membership
```

#### Optional Extra
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
- Copy functions into a namespace using NS.⎕CY

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
1. Know how to use each `¨` to loop over elements 

- Nested vs. Simple arrays 
- Stranding
- Prototypes
- Floating scalars
- Primitive Loops 
- Dfn recursion

```APL
      ≡ ⍬ ''
      ¨ ⍤ ⍣
      {∇⍵}
```

- Fac
- Fib
- `NSort←{0=⍴⍵:⍬⋄(U⌿⍵),∇(~U←⍵=⌊⌿⍵)⌿⍵}`
- `TSort←{⍺[((⍴⍵)[2])S ⍺⍳⍵]}`
- `S←{⍺=0:⍵ ⋄ (⍺-1)S ⍵[⍋⍵[;⍺];]}`

## Files & IO
Primitives, Commands & Basic constructs:

```APL
      ⎕ ⍞ {//⎕VFI⍵}
      ⎕←
      ⎕CSV ⎕JSON ⎕XML
      ⎕NGET ⎕NPUT
      ⎕F...
```

## Tools & Interfaces
- Tool bar
- Graph
- HttpCommand?

## Handling Data
Primitives, Commands & Basic constructs:

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

- Organising data
    - Sorting
    - Classifying
- Transforming data
    - Base conversion 
    - Case mapping/folding
    - Structural
        - Rotate
        - Transpose

- Changing name class on assignment

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
- Dfns
- Tradfns
- Tacit

## Control Flow
https://nbviewer.jupyter.org/github/rikedyp/LearnAPL/blob/master/Tutorials/MarkingTests.ipynb

Primitives, Commands & Basic constructs:

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
```APL
      ⎕EM ⎕DMX
      ⎕TRAP ⎕SIGNAL
      :Trap :Case :EndTrap
      →   ⍝ Naked branch
      )SIC
```

- System functions & commands cheat sheet

## Out in the Wild

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

These modules may be linked to from parts of the main course, intended for use if certain students complete sections very quickly. Of course, having students teach others, thereby reinforcing their own learning, is very beneficial as well.

## The Inner Product

## Array & Interpreter Internals

```APL
⎕DR ⎕FR ⎕CT ⎕ML 

⍝ Array analysis
'char' 'ref' 'num'[(326∘= + (~2|⊢))⎕DR¨mat]

```

## Notes on Performance