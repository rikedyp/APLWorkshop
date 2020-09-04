---
layout: workshop
title: Tools and Interfaces
back: /course/9
next: /course/10
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

🛠 Use `⎕SE.Dyalog.Utils.repObj myArray` to generate an expression for (almost) any given array. 

🛠 use `Ctrl+Enter` to step through a multi-line function line-by-line.

🛠 Use `Shift+Enter` to edit a suspended function. This is also a shortcut for `)ED Function`.

🛠 While in the editor, use the [numpad](https://en.wikipedia.org/wiki/Numeric_keypad) *forward-slash* `/` key to align code.

🛠 Use `Ctrl+Shift+Backspace` and `Ctrl+Shift+Enter` to scroll backward and forwards in your input history. They can also be used as *Undo* and *redo* in the editor. 

🛠 Press `Esc` to close the editor and fix the function.