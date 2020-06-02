---
layout: workshop
title: Course Outline
back: /course/day1/4
next: /course/todo
---

# APL Workshop Plan

# Day 1

Introduction to APL and Problem Solving

Estimated time: `5 hrs`

## First Steps
#### Learning Objectives
- LO1: Be able to type APL symbols
- LO2: Understand the meaning of monadic and dyadic function application
- LO3: Understand the order of execution and be able to change it with parentheses

#### Success Criteria
- SC1: Students can solve simple arithmetic problems using reductions

Primitives & Basic constructs:

```APL
      + - ¯ × = 
      +/⍳N
      (a-b)-c
```

- Typing APL
- Basic arithmetic
- Singleton extension
- Reduction
- Order of execution   
   
## Dfns and Assignment
#### To do
- Where without ⍸ problem

#### Learning Objectives
- LO1: Know what dfns are and what they look like
- LO2: Know how to assign names 

#### Success Critera
- SC1: Write one-line anonymous dfns to solve simple problems
- SC2: Use in-line assignment to solve simple problems

Primitives & Basic constructs:

```APL
      ≢ ⌊ | ÷
      {⍺⍵}
      name ← value      
```
- Dfns syntax
- Name assignment 
    - In-line assignment  

## Selecting from Lists
New constructs:

```APL
      [] ⍸ 
      {⍵/⍳≢⍵}
```
- Simple indexing into lists 

## The Outer Product
#### Learning Objectives
- LO1: Understand the outer product `⍺ ∘.f ⍵` applies `f` dyadically between all combinations of elements from `⍺` and `⍵`.

#### Success Criteria
- SO1: Produce tables using `∘.f`
- SO2: Solve some categorisation problems

#### New constructs

```APL
      ∘.f , ⌿      
```

- Problem solving practise

## Array Basics 
#### Learning Objectives
- LO1: Understand that all arrays are described as a shape and a list of values
- LO2: Know how to use the shape and reshape functions `⍴`
- LO3: Understand that the shape of an indexing expression is determined by the shape of the array of indices
- LO4: Understand empty axes and empty arrays
- LO5: Understand empty array jokes

#### Success Criteria
- SC1: Students can determine the shape of the result of an outer product or indexing expression without evaluating the expression
- SC2: Students can solve data summary problems using `⍴` and simple indexing

```APL
      ⍴ 
      'vector'[I]
      'vector'[n m⍴I]
```

## Workspace Basics
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
      ⍳ ⌷[] ⌷⍤ [;;]      
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

## User Defined Functions
- Dfns
- Tradfns
- Tacit

## Control Flow
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