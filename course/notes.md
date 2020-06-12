---
layout: workshop
title: Instructor's Guide
back: /
next: /
---

### Style

`code`

[internal link](#)

**new jargon**

### Themes
- Modern APL techniques from day-1
    - First-axis theory
    - Cells & Rank
- Function style
    - Dfns & tacit programming for functional data manipulation
    - Tradfns for program control and system interaction

### Workshop Layout

Notes are sufficient for students to learn the basic constructs needed to solve the problems on each page. The accompanying video may contain additional explanations, visualisations and analogies to aid understanding. Instructors are advised to deliver this content "live" (in real time) so that students can ask questions as they arise. Independent learners can use the materials as provided.

Initially, concepts are sufficiently explained so that the students only needs to apply them to the problems given. As the course progresses, students are given examples and should discover the behaviour for themselves.

### End of day 1
If you've made it this far, you'll probably want to install Dyalog. The APL interpreter is free for non-commercial use. 

Day 1 ends with some workspace and namespace basics
If students get to this part with time to spare, then we can do more problem solving while introducing other common mathematical constructs.

`* ⍟ ⌈ ⌊ ○`

- find the range
- cumulative interest
- trigonometry & shapes
- complex numbers

Otherwise, explore topics which arise from students' questions naturally.

### Language Learning
Learning APL can be more like learning a natural language
- Learn in the native script (no romanisation / wordification of symbolic constructs)
- Produce output from the beginning
    - Have output corrected by "native speaker" (experienced user) 
- Frequent input and exposure to model

Not every word or construct needs to be explicitly introduced before use or reference. Observing the use of words which one doesn't understand is normal at the beginning of learning a language. Often seeing the result in context is enough to at least know "what is going on". 

It might be worth putting together a guide to the spoken language APL. Many functions are spoken by their function name in context, while others have colloquially adopted the symbol to refer to one of their common uses.

{% include hint.html id="1" content="APL is fun for the whole family!" %}

{% include note.html content="what about this one?" %}

{% include note.html content="

Does this work?

Here is my note content

" %} 


(12 3 4⍴(3×4)/1 10 100 1000)×a
(12⍴1 10 100 1000)×⍤0 2⊢a

{% include note.html content="Rho, rho, rho of X Always equals 1 Rho is dimension, rho rho rank. APL is fun!"%}
Richard M. Stallman, 1969

### Assessment
- Written test
    Answer questions and evaluate expressions without an interpreter
    - Parenthesise expressions 
- Show-and-tell
    Stand up and teach something to the class
- Problem solving
    Write APL which solves a problem
- Quiz
    Kahoot quiz probably

### Examples etc.
```APL
      gibberish←'janfebmaraprmayjunjulaugsepoctnovdec'
      months←12 3⍴gibberish
      ⊖months
      (⊖⍤1)months

      )lib
      )copy dfns days date      

      cost ← quantities +.× prices

      n←123 456
      c←'123 456'
      ⍴n
      ⍴c
      n,n
      c,c
      c,n
      n,c

      ⍉'A12345678910JQK'∘.,'♠♥♦♣'      
```

- Stupid text editor using
```APL
      edit@(⍸'/'=input)⊢array
      array[⍸'/'=input]←edit
      (pos/array)←edit
```

### Axis vs Rank

```APL
      ⍝ Each axis as an aspect of data
      (year country month)←1 2 3 
      +/[year]rain
10 14 16 22 18 14 21 13 18 22 18 13
20 10 17 14 19 10  8 20 14 17 17 12
11 22 10 16 20  8 16  4 21 17 25 10
 9 16 10 18 13 12  8 12 15  8 19 11
18 12 14 18 10 12 12 15 12 22 15 10
      +/[country]rain
25 30 17 30 33 17 19 23 26 31 18 17
15 20 26 34 27  9 27 19 28 27 35 32
28 24 24 24 20 30 19 22 26 28 41  7
      +/[month]rain
64 62 53 43 64
71 59 56 60 53
64 57 71 48 53
```

### User defined function style
I actually sometimes appreciate the tradfn header, as it gives me a quick hint at how this thing is to be called, and if proper names are used, also what the arguments/operands are supposed to hold. A dop using only ⍺ ⍵ ⍺⍺ ⍵⍵ gives no hints as to the purpose of anything, and you have to go hunting in a large one, to see if it is a function or an operator.

### Primitive Playground
A set of problems, each one designed specifically around a particular primitive.

### Selecting from Lists
The first few sessions are designed to teach array-oriented approaches to problems which are often framed as a loop over a sequence of logical statements. In fact, in some courses, control structures are taught under the title of "selection". A sum as a reduction over a list (as opposed to the incrementataion of an accumulator, as is used when counting using one's fingers), together with implicit mapping of scalar functions, are two foundational concepts in array programming.