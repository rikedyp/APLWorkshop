### What's in a Name?

Study the following expression. It contains an error guard. 

```APL      
      vn←({2 6::0 ⋄ ⍎(⎕UCS ⍵),'←',⍕⍵}¨⍳1E4)~0   ⍝ Valid Naming Character Codes
```

1. Which errors are trapped by the guard?

1. `⎕AV` is the list of 
   Which valid naming characters are 

1. When are digits `⎕D` not allowed in names?

1. Why is `9109 9054` printed to the session when the expression is run?

### Selecting from Arrays

```APL
      codes←'ACDDC'
      salaries←18250 42500 56000 57250 48640 
      t←4 4⍴'some sample text'
      t[⍸t∊'aeiou']←'!'
```

### Selective Assignment

((15=+/m)⌿m)←2 2⍴0 15
n←5 5⍴⍳25

1. Find at least four different ways as you can to set the bottom-right 3 by 3 submatrix in `n` to `0`.
   For example, `(2 2↓n)←0`.

### Modified Assignment

salaries[⍸codes='C']×←1.05
n←⍳10
((2|n)/n)

m←5 2⍴6 1 3 3 10 5 1 10 6 9

n←5 5⍴⍳25

### At

ACBLScore
TitleCase

### Strand Assignment