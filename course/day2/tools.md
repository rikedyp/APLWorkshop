---
layout: workshop
title: Tools and Interfaces
back: /course/day2/1
next: /course/day2/2
---

Here we highlight some particularly useful settings, menu items and tools in Dyalog.

### Session Toolbelt
[These tips](https://abrudz.github.io/tips/) work in Dyalog on any supported platform. 

🛠 Place the cursor on a symbol or other built-in and press `F1` to go straight to the help page for it. 

🛠 By default, printing to the session from within a function has `]boxing` off. 

```APL
      {⎕←⍳⍵}3 3
 1 1  1 2  1 3 
 2 1  2 2  2 3 
 3 1  3 2  3 3 
      ]box -fns=on
Was -fns=off
```

🛠 Sometimes we generate large output which clutters the session log.

```APL
      ]rows -fold=3
was -fold=off
      ⍪⍳100
```

🔧 1 2 3

### Dyalog for Microsoft Windows
For historical reasons, the Windows [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) is somewhat more mature and feature-filled than the default environment.

- Copy/Paste Object
- Fix function kbd shortcut

### RIDE
The [Remote Integrated Development Environment](https://github.com/Dyalog/ride) is an IDE for Dyalog which runs on Microsoft Windows, macOS and Linux (including Raspberry Pi).