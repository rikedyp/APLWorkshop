---
layout: workshop
title: Course Outline
back: /course/day1/4
next: /course/todo
---

# APL Workshop Plan

# Day 1

Introduction to APL and Problem Solving

Estimated time: `6 hrs`

## First Steps
Estimated time: `35 mins`

#### Learning Objectives

1. Use an APL interpreter
1. Understand the meaning of monadic and dyadic function application  
1. Understand the order of execution   

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
   
## Dfns and Assignment
Estimated time: `15 mins`

#### To do
- Where without ⍸ problem
- Compression

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

## Selecting from Lists
Estimated time: `25 mins`

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

## The Outer Product
Estimated time: `25 mins`

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

## Array Basics 
#### Learning Objectives
1. Understand that all arrays are described as a shape and a list of values
1. Know how to use the shape and reshape functions `⍴`
1. Know that `≢⍴` is the rank of an array
1. Understand that the shape of an indexing expression is determined by the shape of the array of indices
1. Understand empty axes and empty arrays
1. Understand empty array jokes

#### Success Criteria
1. Students can determine the shape of the result of an outer product or indexing expression without evaluating the expression
1. Students can solve problems using `⍴` and simple indexing

```APL
      ⍴ 
      array[I]
      array[n m⍴I]
      array[;;]
```

## Workspace Basics
Estimated time: `15 mins`

#### Learning Objectives
- LO1: Understand that a workspace is a collection of APL names
    Students can:
    - Name a workspace
    - Save a workspace
    - Load a workspace
    - Copy names from a workspace
- LO2: Understand the a namespace is a collection of APL names which resides in a workspace
    Students can:
    - Create a named namespace
    - Copy functions into a namespace using NS.⎕CY
    - Erase a namespace or names from a namespace
- LO3: Understand that non-object names are pass-by-value and that object names are pass-by-reference

Primitives, Commands & Basic constructs:

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

- Namespaces
    - Like a WS within a WS
    - `#`
    - References

        ```APL
              'myns'⎕ns⍬
              his←myns
              myns.arg←0
              his.arg
        0
              myns.arg←5
              his.arg
        5
              myvar←7
              hisvar←myvar
              myvar←10
              hisvar
        7
        ```

# Day 2

Estimated time:

## Going Higher
Primitives & Basic constructs:

- Cells & Axes
- Rank Operator vs Axis "Operator"

```APL
      ⍴ 
      (⍴,≢)
      ⍳ ⌷[] ⌷⍤      
```

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

- Further problem solving practise

## Going Deeper
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
- Tool bar?



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

## Array & Interpreter Internals

```APL
⎕DR ⎕FR ⎕CT ⎕ML 

⍝ Array analysis
'char' 'ref' 'num'[(326∘= + (~2|⊢))⎕DR¨mat]

```

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


## Being an APLer
Longer form practise project where students apply knowledge and use resources to build small applications