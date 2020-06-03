---
layout: home
title: The Array Model
back: /
next: /
---

# Notes

### Style

`code`

[internal link](#)

**new jargon**

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
{% include note.html content="e.g." %} 


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
      
```

- Stupid text editor using
```APL
      edit@(⍸'/'=input)⊢array
      array[⍸'/'=input]←edit
      (pos/array)←edit
```
