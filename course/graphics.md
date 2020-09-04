---
layout: workshop
title: Input & Output
back: /course/14
next: /course/15
---

#### Graphics
Sometimes we need to visualise data.

The `]plot` user command works on all supported platforms (except AIX maybe)

- Plot monthly temperatures averaged over n years
- Plot least squares?

```APL
]plot (((+⌿÷≢) (+⌿÷≢)⍤1⊢temp) ((⍳25)(⊢(⊢+.×⌹)1,∘⍪⊣)(+⌿÷≢) (+⌿÷≢)⍤1⊢temp))⍬
```

The `]chart` user command works on Microsoft Windows.
... more on SharpPlot but not a lot

Task: plot various temperature data thingies.

SyncFusion controls

Ascii Art `'^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'`