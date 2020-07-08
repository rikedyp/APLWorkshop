### The Three Function Styles

So far, we have been reading and writing [dfns](https://aplwiki.com/wiki/Dfn). 

```APL
         3 {⍺+⍵} 5         ⍝ Left argument ⍺, right argument ⍵
           {⍵>0:⍵,⍵+1} 5   ⍝ The function itelf is ∇ (del)
      Fn ← {⍺⍵}            ⍝ We can assign to names
```

It is also possible to name functions without explicitly referring to their arguments. This is called [tacit](https://aplwiki.com/wiki/Tacit_programming) or *point-free* programming.

```APL
      Plus ← +
      IndicesTo ← ⍳
      _Reduce ← /      
      Sum ← Plus Reduce
      Sum IndicesTo 10
```

There is a neat syntax for composing functions called [*trains*](). We won't look at them in detail now, but they allow some 

```APL
      Mean ← +⌿ ÷ ≢         ⍝ The sum divided by the count
      Mean 3 1 4 1
      3 (+,-) 5             ⍝ Plus and minus
      ','(≠⊆⊢)'some,text'   ⍝ Split on commas
```

{% include note.html content="Small unnamed dfns and tacit functions expand your vocabulary. One of my favourites is the "split by delimiter" train `(≠⊆⊢)`. A similar phrase which can take multiple delimiters can be found on [aplcart.info](https://aplcart.info/?q=split%20text#)." %}

### Choo choo

1. Translating functions
    1. Convert the following dfns into trains
        1. `{⌈/≢¨⍵}`
        1. `{1+⍺-⍵}`
        1. `{∨/⍺∊⍵}`
        1. `{(⌽⍵)≡⍵}`
    1. Convert the following trains into dfns
        1. `(⌈/-⌊/)`
        1. `(+⌿÷1⌈≢)`
        1. `(⊢-|)`
        1. `(1∧⊢,÷)`