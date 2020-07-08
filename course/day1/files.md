---
layout: workshop
title: Files & IO
back: /course/
next: /course/
---

### Hello, World!
If you have seen any kind of computer programming before, you are probably aware of a quite famous program called "[Hello, World!](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)".

Here it is in APL:
```APL
      ⎕←'Hello, World!'
```

`⎕` (*quad*) is like the door to the outside of the session. `⎕` is used for both input and output.

```APL
      Test←{                                 
         ⍺←0                          
         s←⍎⎕←⍕(?10),('+-×÷'[?4]),?10 
         a←⎕                          
         p←⍺+a≡s                      
         ⍵>1:p ∇ ⍵-1                  
         ⎕←'You scored',p,'points' ⋄ p
      }  
      
      Test 3
```

```APL
      Test←{                                 
         ⍺←0                          
         s←⍎⎕←⍕(?10),('+-×÷'[?4]),?10 
         a←⎕                          
         p←⍺+a≡s                      
         ⍵>1:p ∇ ⍵-1                  
         ⎕←'You scored',p,'points' ⋄ p
      }  
      
      Test 3
```

#### System Functions
So `⎕` can be used for simple input and output. 



1. Why would you want to use `)SAVE` instead of `⎕SAVE`?