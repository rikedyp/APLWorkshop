---
layout: workshop
title: Instructor's Guide
back: /
next: /
---

### Terminology


### Style

`code`

[link](#)

**new jargon**

To do: distinguish between internal / external links

### Themes
- Modern APL techniques from day-1
    - First-axis theory
    - Cells & Rank
- Function style
    - Dfns & tacit programming for functional data manipulation
    - Tradfns for program control and system interaction

### Technical
Possible to put in an HTMLRenderer?

### Workshop Layout

Notes are sufficient for students to learn the basic constructs needed to solve the problems on each page. The accompanying video may contain additional explanations, visualisations and analogies to aid understanding. Instructors are advised to deliver this content "live" (in real time) so that students can ask questions as they arise. Independent learners can use the materials as provided.

Initially, concepts are sufficiently explained so that the students only need to apply them to the problems given. As the course progresses, students are given examples and should discover the behaviour for themselves.

Although this course provides an order of modules, it should be perfectly fine to shuffle sessions around and address certain topics sooner than otherwise. It is possible that in conversations and students' questioning it will be worthwhile to introduce things not yet introduced.

### Selecting from Arrays
The first few sessions are designed to teach array-oriented approaches to problems which are often framed as a loop over a sequence of logical statements. In fact, in some courses, control structures are taught under the title of "selection". A sum as a reduction over a list (as opposed to the incrementataion of an accumulator, as is used when counting using one's fingers), together with implicit mapping of scalar functions, are two foundational concepts in array programming.

It is said that APLers have over 100 words for indexing, by people who are wrong. I've so far counted `5` (there are more) and here they are.

```APL
      A←2 3 4⍴⎕A
      A[1 2;3;]                  ⍝ Simple Bracket Indexing
      2 3⌷A                      ⍝ Squad Indexing
      A[(1 1 1)(2 1 4)(1 3 4)]   ⍝ Choose Indexing

      nest←2 3⍴'DY' 'AL' 'OG' ⍬ (⍬((2 2)2)) ⍬
      nest[⊂(2 2)2]             ⍝ Reach Indexing
      (2 2)2⊃nest               ⍝ Pick
      S←((⊃⊣)⌷⊢)⍤0 99   
      (1 1)(1 2 1)(1 2 2) S A   ⍝ Select
```

### Language Learning

Learning APL can be more like learning a natural language
- Learn in the native script (no romanisation / wordification of symbolic constructs)
- Produce output from the beginning
    - Have output corrected by "native speaker" (experienced user) 
- Frequent input and exposure to model

Not every word or construct needs to be explicitly introduced before use or reference. Observing the use of words which one doesn't understand is normal at the beginning of learning a language. Often seeing the result in context is enough to at least know "what is going on". 

### Terminology

It might be worth putting together a guide to the spoken language APL. Many functions are spoken by their function name in context, while others have colloquially adopted the symbol to refer to one of their common uses.

{% include hint.html id="1" content="APL is fun for the whole family!" %}

{% include note.html content="

This function returns the prime numbers up to `⍵`. If I were dictating this to someone, I might say:
> *Where two equals plus slash-bar zero equals jot-dot mod selfie iota omega*

However, it is generally best practice to give the function names:

> *Where two equals the plus reduce-first (plus reduction along the first axis) of zero equals the residue outer-product selfie of the indices up to omega*

The expression translates more literally to English as:

> *zero equals the modulus between all combinations of numbers from one to the integer right argument inclusive*

> *Positive integers up to ⍵ which have two factors*

```APL
      Primes←{⍸2=+⌿0=∘.|⍨⍳⍵}   ⍝ Primes up to ⍵
```

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

A place to paste examples which might be useful in some modules (not all content has been written up yet)

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

- From https://dl.acm.org/doi/pdf/10.1145/800058.801108
  Given a matrix, find as many ways as you can of retrieving the element in the last column of the last row

### Primitive Playground
A set of problems, each one designed specifically around a particular primitive.

1. Counting Vowels  
    `'aeiou'(+/∊⍨)'mississippi'`
1. Matching Cycles
    `r1(∧÷,)r1`    

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

### Dyadic Transpose
I've heard at least one person say that mastery of dyadic `⍉` transpose is mastery of array programming.
Reshape and rearrange a vector of monthly sales data to do convenient summaries with `⌿⍤`.

### Pedagogy
Lessons roughly follow the structure:

```
┌ 1. Introduction
│ 2. Activity
└ 3. Assessment
```

Introductions give context or a link to prior learning. 

All modules have activities; we learn by doing. Some modules have written notes and problems to solve, with content which models a written numbered exam. Some have more exploratory activities to help foster intuition. 

Assessment comes in many forms. It could be just an indication that learners are ready to move on, or it could be more formal like an invigilated exam. 

Some examples:  
- Use thumbs up/down to indicate readiness to move on
- Write or share with the class
    - 3 things you have learned
    - What you found easy
    - What you found hard
    - Something you would like to learn in the future
- Written test 
- Problem solving
- Project work
    Implement a small application

If possible, there should be a few short cycles of this structure within sessions. The assessments can help everyone to decide when to move on to new material, or if something needs reclarification. Discussions may indicate that a detour into some other material might be a good idea.