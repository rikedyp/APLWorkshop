---
layout: workshop
title: Course Outline
back: /course/4
next: /course/todo
---

# APL Workshop Plan

# Day 1

Introduction to APL and Problem Solving

Estimated time: `5 hrs`

Completable using <a target="_blank" href="https://tryapl.org">TryAPL</a>

## First Steps
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
Primitives & Basic constructs:

```APL
      ≢ ⌊ |
      {⍺⍵}
      name ← value      
```
- Dfns syntax
- Name assignment
    - Valid names `a_ó∆ø⍙`
    - In-line assignment  

## Selecting from Lists
Primitives & Basic constructs:

```APL
      [] ⍸
      {⍵/⍳⍴⍵}
```
- Simple indexing into lists 

## The Outer Product
Primitives & Basic constructs:

```APL
      ∘.f , ⌿      
```

- Problem solving practise

## Going Higher
Primitives & Basic constructs:

- Reshaping data & high rank arrays
- Rank vs Axis

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
- Nested arrays 
- Primitive Loops 
- Dfn recursion

```APL
¨ ⍤ ⍣
{∇}
```

## Workspace 101
If Dyalog is being used

```APL
      )wsid FirstnameLastname
      )save      
```

# Day 2

Estimated time:

Dyalog installation required

## The Workspace & Session
Primitives, Commands & Basic constructs:

```APL
      )CLEAR )ERASE
      )VARS )FNS )OBS
      )SAVE )LOAD )XLOAD )COPY )PCOPY
      )DROP
      ⎕NL-⍳9
      )SAVE'MyWS'
      )CLEAR      
      'Day1'⎕NS''
      Day1.⎕CY'MyWS'
      )SAVE'MyWS'
```

- Workspace basics


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

## User Defined Functions
- Dfns
- Tradfns
- Tacit

## Control Flow
Primitives, Commands & Basic constructs:

```APL
      :If :Else
      :Select :Case
      :
```

## Errors
```APL
      ⎕EM ⎕DMX
      ⎕TRAP ⎕SIGNAL
      :Trap
      →   ⍝ Naked branch
      )SIC
```

## Out in the Wild

- GoTo, ppt 4, slide 105

```APL
      →Condition/⎕LC
      →⍬
      :GoTo :Labels
```

## Your Resources

- APL Wiki
- F1 / web help
- Email
- Dyalog forums
- APL Orchard
- APLCart


## Being an APLer
Longer form practise project where students apply knowledge and use resources to build small applications
