---
layout: workshop
title: Handling Data
back: /course/
next: /course/
---

### Sort

```APL
      names←'Finn' 'Charlotte' 'George' 'Anna' 'Bob' 'Dave' 'Ellie'
      scores←9 6 3 10 8 1
      heights←1.72 1.65 1.69 1.7 1.8 1.72 1.56
      names[⍋heights]
      (⍉↑names scores)[⍒scores;]
```

### Categorise

`⍸ ⌸`

```APL
HHist←{                               
     ⎕←bc←(⍺⍸⍵){≢⍵}⌸⍵           
     ⎕←hist←{'.⎕'[1+⍵∘.≥⍳⌈/⍵]}bc
     ⍺,hist                     
 }    
```


### Clean

### Summary