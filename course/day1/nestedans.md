---
layout: workshop
title: Going Deeper: Solutions and Explanations
back: /course/
next: /course/
---

### Depth

A simple scalar is a rank-0 array which contains itself as its value.

```APL
      'a'≡⊃'a'   ⍝ The disclose of a simple scalar is itself
      42≡⊂42     ⍝ As is the enclose
```

```APL
      {⍵>1:⍵×∇ ⍵-1 ⋄ ⍵}   ⍝ A recursive dfn of the factorial function
      {⍺←1 1 ⋄ ⍵=2:⍺ ⋄ (⍺,(+/¯2↑⍺))∇⍵-1}   ⍝ Fibonacci sequence
```

The membership function `∊` asks if scalars in `⍺` are members of `⍵`, and returns a boolean array of shape `⍴⍺`. 