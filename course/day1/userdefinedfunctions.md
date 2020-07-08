## The Three Function Styles

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

## Traditional functions

Dyalog is a modern APL implementation. Original APL implementations had a way of defining functions with a header line and named arguments and results. Since the introduction of dfns, functions of the original style are called *tradfns*.

```APL
      Mean ← +⌿÷≢
      Mean ← {(+⌿⍵)÷≢⍵}
      ∇ m ← mean a
        m ← (+⌿a) ÷ ≢a
      ∇
```

A tradfn header reflects the calling syntax of the function. Reflects how the function is used.

```APL
      ∇ {result} ← {optional} TradFn argument;local      
        :If 0=⎕NC'optional'
           optional ← 'no left argument'
        :EndIf
        local ← optional argument
        result ← local local        
      ∇      
```

Try calling `TradFn` with one and two arguments. How can we get the result to display to the session?

Here is the smallest tradfn:
```APL
      ∇ T
      ∇
```

`T` is a function which takes no arguments, returns no results and has no effects.

Results in `{}` curly braces do not print to the session by default, but can be passed to arguments. To ease debugging and write functions with predictable behaviour, it is generally best not to use shy results.

Optional left arguments are a little awkward in tradfns. The dfn equivalent is a little nicer looking: `{⍺←'default' ⋄ ⍺,⍵}`.

While usage of different function styles varies throughout many, I suggest the following non-prescriptive guidelines.

#### dfns
[pure functions](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjp8_Krx77qAhW8SEEAHXtQAyoQFjAAegQIBBAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPure_function&usg=AOvVaw2dwW-CHbjpaA2b5N5TqK8h)

#### tacit
Best as short, [pure functions](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjp8_Krx77qAhW8SEEAHXtQAyoQFjAAegQIBBAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPure_function&usg=AOvVaw2dwW-CHbjpaA2b5N5TqK8h), performing some specific task such as data transformation.

However, sometimes a simple file reading (from trains webinar) is a reasonable use of a train interacting with the file system.

#### tradfns
Best used as program control for dealing with system interactions. The use of control structures can make procedural tasks easier to debug. For example, if an error occurs when processing files using `¨` each.

```APL
      'first file'⎕nput'f0'
      '2nd '⎕nput'f1'
      'oof'⎕nput'f3'
      
      {⊃⎕nget'f',⍕⍵}¨¯1+⍳3
FILE NAME ERROR: f2: Unable to open file ("No such file or directory")
      {⊃⎕NGET'f',⍕⍵}¨¯1+⍳3
        ∧
      
      'okay'⎕nput'f2'
      {⊃⎕nget'f',⍕⍵}¨¯1+⍳4
┌──────────┬────┬────┬───┐
│first file│2nd │okay│oof│
│          │    │    │   │
└──────────┴────┴────┴───┘
```

{% include note.html content="💡 Use `Ctrl+Enter` to step through a multiline function." %}

```APL
∇  r←ReadFiles fnames;fn
   r←⍬                  
   :For fn :In fnames   
       r,←1⌷⎕NGET fn    
   :EndFor              
∇ 

      ⎕ndelete'f2'
      ReadFiles fnames
FILE NAME ERROR: f2: Unable to open file ("No such file or directory")
ReadFiles[3] r,←1⌷⎕NGET fn
                  ∧      
```

- Program control
- System control
- File handling

## Choo choo

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

