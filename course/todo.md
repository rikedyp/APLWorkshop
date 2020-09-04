---
layout: workshop
title: To Do
back: /course/plan
next: /
---

# Main Course
1. Write main sessions according to [the plan]({{site.baseurl}}/-course/plan).
  1. Array Model
  1. Where is the term *stranding* first used?
  1. Session 2.1 is windowed reduction ever introduced?
  1. Rank operator - include training wheels function `⊂` and `{⍺⍵}` ,⍥⊂.  
  1. Style links ⠿⠇
1. Is it important to always have tasks/problems at the end of each section, or interspersed with related instruction?
1. Why is `(6⍴'⍥⎕')@1 2⊢2 3⍴'DYALOG'` a LENGTH ERROR if `(2 3⍴'⍥⎕')@1 2⊢2 3⍴'DYALOG'` is valid? Shape error?
1. Possible split 9: Going Deeper into two sections (10: Going around and around?)
1. User-facing course outline with links to each section[]
1. Answer pages
1. Replace hints with HTML details / summary tags
1. References to primitive functions should refer to arguments e.g. *shape* `⍴X` suggests monadic application
1. ]box on when nested arrays first appear
1. Implement better numbering scheme for problems / sections
    section k, problem j, problem k.j
1. Perhaps 13/Help I'm Trapped can be more businessey and text-based?
1. Edit / [Freddify](https://www.theatlantic.com/family/archive/2018/06/mr-rogers-neighborhood-talking-to-kids/562352/) (probably do not make entirely Freddish)
    Perhaps have a native version with a bit more fruity style on personal site, and an official version which is more straightforward and probably better for e.g. someone with English as a second language.
1. Test / review

# Extra Modules
Further content may be provided as workshop modules or as [Jupyter notebooks](https://github.com/rikedyp/LearnAPL).

## History of APL (link to APL wiki & HOPL paper?)
- ppt 1
    - Type ball: slide 37
## Motivation
- Notation as a tool of thought
- Comparison to TMN (link to APL wiki)   

## APL Language    
- Syntax overview
    ~~array | fn arg | larg fn rarg | fn op | lfn op rfn | array[indices]~~
    - ~~Basic arithmetic~~
    - Scalar vs. Non-scalar functions
    - ~~Order of execution~~
    - ~~Singleton extension~~
    - Chars and Nums
        - ~~Quotes `''`~~ double quotes `''''`
        - Real, Complex, Engineering        
- Primitives
    - Mathematics
        - `⌊ * ⍟ ○ ! ⊥ ⊤ ? ⌹`
        - ~~`+ - × ÷ ⌈ |`~~
    - Logic and Comparison
        - `∧ ∨ ⍲ ⍱ < ≤ ≥ > = ≠ ≡ ≢`
        - ~~`=`~~
    - Structural 
        - `⍪ ⌽ ⍉ ⊖ ↑ ↓ ⊂ ⊆ ≡ ∊`
        - ~~`≢ , ⍴`~~
    - Selection 
        - `⌷ ⊃ / ⌿ \ ⍀ ⊣ ⊢ @`
    - Set functions 
        - `∪ ∩ ∊ ~ ⍳`
    - Search and Sort 
        - `⍳ ⍸ ∊ ⍷ ⍋ ⍒ ⌸`
    - Miscellaneous
        - `¯ ' ← ⍬ ⍎ ⍕ ⋄ ⍝ ∇ ⍺ ⍵ ⎕ [] {} ⍠ ⌶`
    - Loops
        - `¨ ⍣ ⍤ ⌺`
    - Function composition
        - `∘ ⍤ ⍥ ⍨ ∘.f f.g`
    
    - `⌹ * ⍟ !`
    - ~~Reduce `/ ⌿`~~ Scan `\ ⍀`
    - Replicate, Expand
        - Most commonly, Compress
    - `⌈ ⍋ ⍒`
    - ~~`≢ ⌊`~~
    - Where ~~`⍸`~~
    - `∊ ∪ ∩ ~ ⍷`
        - Link to Progressive-index-of webinar
    - `⍝ ⎕ ⍞`
    - `⍴≢,⍪↑↓`
    - `⌽⍉⊖`
    - `⍳ ?`
        - `⎕RL`
    - `○` 
    - `⍬ ''`
    - `⋄`
    - `⊤ ⊥ 2⊥⍣¯1`
    - Format `⍕` Execute `⍎`
    
- Selecting from Arrays
    - Link to Webinar
    - Index-of `⍳`
    - ~~`[]`~~ `⌷` 
    - ~~High rank selection~~
        - ~~The shape of the result~~
        - ~~`⌷[]` vs `⌷⍤`~~
- Products
    - ~~`∘.f`~~
    - ~~f.g~~
- Naming / Assignment
    - ~~(strand assignment)←v1 v2~~
    - ~~Selective assignment~~
    - ~~Indexed assignment~~
        - ~~When is `(C[n]←C[n]+1) ≢ C[n]+←1`?~~
    - ~~Modified assignment~~
    - ~~Names do not begin with a `⎕D` digit~~
    - ~~Cannot change var to fn/op (or vice versa) on reassignment~~
    
        ```APL
              foo←{⍺+⍵}
              foo←42
        SYNTAX ERROR: Invalid modified assignment, or an attempt was made to change nameclass on assignment
              foo←42
              ∧
        ```
- Control Structures
    - ~~ppt 4, slide 89~~

- Array model
    - ~~Rank vs Axis~~
    - ~~Nested arrays~~
    - ~~Floating scalars~~

- Nested arrays
    ppt 5
    - Simple scalar
    - ~~Simple array~~
    - ~~Nested array~~
    - ~~Stranding~~
    - Detph `≡`
    - Floating scalars
    - Prototypes
    - `⊃` pick
    - ~~`]box on`~~
        - `]disp`, `]display`
        
- Operators
    - Trapezium rule & Simpson's rule problems (2018)
    - Most useful
        - `/ ⌿ ⍣ ⌺ ⌸ ¨ ⍤ f.g ∘.f @`
        - `Axis[] vs Rank`
        - Laminate `,[0.5]` 
    - Also useful
        - `\ ⍀ ∘ ⍤ ⍥ ⍠ ⍨ & ⌶`
        
- Text formatting
    - `⍕ ⎕FMT`
    
- Input/Output
    - ~~`⎕ ⍞ ⎕VFI`~~
    - ~~`{//⎕VFI⍵}`~~

- Namespaces & Other Objects
    - ~~Namespaces~~
        ppt 6, slide 39...

## Phrases and Idioms

#### The Inner Product

```APL
      f.g
      ∧.∨
      ∧.=
      ⎕←names←4 5⍴'HarryDave SteveFaye '
Harry
Dave 
Steve
Faye 
      names∧.='Steve'
0 0 1 0      
```

### User-defined functions & operators
- Primitive function 
- Scalar function 
- Structural function 
- Monadic
- Dyadic
- Niladic
- Dfns
    - ~~`{⍺⍵}`~~
    - Guards
    - Recursion
- Dops
- Tradfns
    - Local names
    - Control structures
    - Session
- Tradops
- Multi-line functions
- Tacit (point-free) programming
- `⎕FIX` `⎕FX`

### Using the session 
- The workspace
- System commands
    - ppt4, slide 16
    
    ```APL
    )clear
    )vars )fns )obs )erase
    )save )load )xload )copy )pcopy 
    )drop ⍝ or delete on file system
    ```
- System Variables / System Functions
    - Cheat sheet 
        ppt 5, slide 88/89
        - Most common ones up front 
        - The rest on the back / links to docs?
    - Tradfn ⎕NC exercise
        - create ambivalent tradfn using 0=⎕NC
    - `⎕SI ⎕XSI`

- Session config
    ppt4, slide 38
    - quadVars
    - GUI menu

- Shortcuts & UCMDs cheat sheet
    - Shortcuts
        - Ctrl-Home/End
        - Shift-Enter
        - Ctrl-Enter 
        - Esc
        - Shift-Esc
        - Ctrl-UpArrow
        - NumPad- [line numbers]
        - NumPad/ [reformat]
        - Ctrl-Delete 
        - Shift-Esc 
        - Ctrl-Shift-Backspace
        - Ctrl-Shift-Enter 
        - Ctrl(-Shift)-Tab 
        
        
    - UCMDs 
        - `]box -trains=tree -fns=on`
        - `]rows -fold=3`
        - `]chart` `]plot`
        - Where to find more?
        
     

### File Handling
ppt 7, slide 15
- Tie numbers `⎕NTIE ⎕NUNTIE`
- Native files `⎕N...`
- APL Component Files `⎕F...`

### Modern APL
ppt 7 slide 35...
- v14.0
    - `⍤ ⌸ ≢`
    - Dyadic `⍳` high-rank extension 
- v16.0
    - Where / interval-index `⍸`
    - `⊆`
    - ~~`⎕CSV` `⎕JSON`~~
    - `@`
    - `⌺`
- v18.0
    - Atop `⍤`
    - Over `⍥`
    - Unique mask `≠`
    - `⎕C`
    - `⎕DT`
    - Case-insensitive match `≡⍥⎕C`

### Out in the wild
- `⎕← ⊢ +` as Identity / Print-out functions 
    - Only use `⎕←` in production
- Goto
    ppt 4, slide 105
    - `→/` Goto-reduction *\*shudders\**
    - `:Goto`
    - `:Labels`
    - `→⎕LC`
- Valid names
    - `a_ó∆ø⍙`
    - Names cannot begin with digits
    - Capital underscore in Classic code

### Toolbelt

```APL
      (≠⊆⊢)     ⍝ Split text by delimiter
      ((~∊⍨)⊆⊢) ⍝ Split text by delimiters
      {(⊂⍋⍵)⌷⍵} ⍝ Sorting idiom
```

### Toolbox
- dfns.dyalog.com
- aplcart.info

### Errors
- Common errors
    - LENGTH
    - DOMAIN
    - SYNTAX
    - RANK
    - VALUE
    - WS FULL
- `⎕DMX`
- `⎕TRAP`, `:Trap` 
- `⎕SIGNAL`
- Interrupts
    ppt 4, slide 109
- Clear last calls 
    ppt 4, slide 116
    - `→` "naked branch"
    

### Terminology
- Scalar
- List 
- Table 
- Vector 
- Matrix
- Rank 
- Array 
- Variable 
- Naming / Assignment 
- System commands 
- Integer 
- Floating point number 
- E-notation
    - Scientific notation 
    - Engineering notation 
    - Exponential notation
- Primitive function 
- Scalar function 
- Structural function 
- Monadic
- Dyadic
- Niladic
- Lamp 
- IME (Input Method Editor)
- Constant / Literal
- Stranding
- Inverted table

### Interpreter internals
- APL arrays are self-describing
- Automatic memory management (ppt1, slide 15)
- Dynamically typed
    - Bit booleans
    - Int... Float
        - 8-byte double, 16-byte decimal
    - Complex
        - 2×8 byte double
    - Decf
    - Engineering notation
    - Character 
        - 1-byte, 2-byte, 4-byte
    - Reference
        - e.g. Namespace, Class
    - `⎕FR ⍝ 645 or 1287`
    - Tolerant comparison `⎕CT`
- Data copied only if necessary
- Unicode (unless Classic)
- The Stack 
    - ppt 4, slide 58
    - Name scope
    - Avoid globals

    
### Tools & Interfaces
- GUI IDE
    - Toolbar (ppt 4, slide 50)
- Classic vs Unicode (ppt1, slide 42)
    - Classic 
        - ⎕AV
    - Unicode 
        - UPPERCASE before lowercase
- Typing APL 
    - Windows IME
    - Language bar
    - APL Wiki
- OOP
- Parallel
    - Vector instructions
    - Compile to GPU
    - Multi-process with Futures & Isolates
- OLE/COM and Microsoft .NET
- SQL
- `⎕XML`, `⎕JSON`, `⎕CSV`
- Inter-operable
    - Win, AIX, Linux, Pi, macOS
    - Code can be used across platforms without conversion
    - Data files can be used across 32/64 bit, Unicode vs Classic, Big- vs Little-Endian
        - Even if transmitted via TCP sockets
    
### Where to find out more
- F1 / web help
- Google
- support@dyalog.com
- rpark@dyalog.com 

## Exercises
- Diane
- Perl Weekly Challenge
- Code Golf Stack Exchange
- APL Problem Solving Competition
- MK ppt

1. The Shape of the Result  
    Without executing in an interpreter, evaluate the following expressions as if they were executed in order. Afterwards, use an interpreter to check your results.

```APL
      ⍴'new' 'old'∘., apple' ' pear' ∘., ' cider' ' pie' ' tree'
      ⍴(2 2⍴⍳4)∘.÷1 10 100 1000
      ⍴¯50 50∘.+1 10 100∘.×¯1 1
      ≢⍴0 1∘.+2 3∘.-4∘.×5 6∘.÷7 8
      a←1 2 1
      ⍴⍬
      ⍴''
      ⍴⍬,⍬
      ⍴⍪⍪⍳2
      3⍪⍪⍳2
      ⍴,⍪⍳8
      b←2 3 4 1
      ⍴a,b
      c←1 5 3 4 1 5
      ⍴,b∘.+c
      ⍴b[b]
      B←6⌊c∘.+c
      ⍴B[a;c]
      C←b∘.×B
      ⍴C[;2;]
      ⍴C[a;;b]
```   

Tutorial
--------

Handout
-------

