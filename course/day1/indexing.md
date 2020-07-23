---
layout: workshop
title: Selecting from Arrays
back: /course/
next: /course/
---

The examples below demonstrate some unfamiliar constructs. Take some time to execute, modify and experiment with the examples until you feel you have an understanding of what each expression does.

```APL      
      n←4 2 2⍴2,(4/1),(4/2),1 2 1 2 2 1 1
      n⍳2 2⍴2 1
      3⌷n
      rain←?7 5 12⍴250   ⍝ Monthly rainfall in millimeters over 7 years for 5 countries
      rain[1 3 4;;]
      rain[;1;]
      ¯2 2(↑⍤2)alph
      alph[;2 3;1 2]
      ¯2 1(↑⍤2)alph
      alph[;2 3;1]
```

