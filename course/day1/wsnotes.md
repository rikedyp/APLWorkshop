---
layout: workshop
title: Workspace Basics
back: /
next: /
---

We sure have made a lot of functions so far. There seem to be a few variables in our workspace as well. We should save them somewhere for later.

### What's a workspace?
If you have been using Dyalog, the session log is the page with all of your input and output so far. 

A workspace is a collection of names. We can obtain some lists of names using <a target="_blank" href="http://help.dyalog.com/latest/#Language/System%20Commands/Introduction.htm?Highlight=System%20commands">**system commands**</a>.

- Functions

```APL
	  )fns    ⍝ Functions
	  )vars   ⍝ Variables (arrays)	  
```

These commands have the special `)COMMAND` syntax, and are only used when interacting with the session. They have no result to be used programmatically.

### System Functions
**System functions** are functions of the form `⎕FUNCTION` and *do* return a result. Some have shy results which can be used by subsequent functions, or printed to the session output with `⎕←`.

The Name List `⎕NL` function lists names.

```APL
	  ⎕NL 2    ⍝ List variables as a text matrix
	  ⎕NL 3    ⍝ List functions
	  ⎕NL-⍳9   ⍝ List all names as a nested vector of character vectors
```

### Namespaces
If nested arrays are arrays inside arrays; **namespaces** are a bit like a workspace within a workspace. They are **objects** which contain collections of names, and these names can be listed as before, but using the dot `.` syntax from <a target="_blank" href="https://cs.stackexchange.com/questions/89031/what-is-the-origin-of-dot-notation">object-oriented</a> programming.

```APL
      'ns'⎕ns⍬       ⍝ Create an empty namespace called ns
      ns.var←1 2 3   ⍝ Create a variable in ns called var
      ns.fn←{⍺,⍵}    ⍝ Create a function in ns called fn
      ⎕nl-⍳9	     ⍝ List names in the current namespace
┌──┐
│ns│
└──┘
      ns.⎕nl-⍳9      ⍝ List names in ns
┌──┬───┐
│fn│var│
└──┴───┘
      ⎕this.⎕nl-⍳9   ⍝ The current namespace is ⎕THIS
┌──┐
│ns│
└──┘
      #.⎕nl-⍳9       ⍝ The root namespace is #
┌──┐
│ns│
└──┘
```

### Mutable Objects
Variables are pass-by-value. This means that if one name is used to assign another name, changes to the first name are not reflected in the second name.

```APL
      var1←1 2 3
      var2←var1     ⍝ The value of var1 is assigned to var2
      var1←var1+6   ⍝ The value of var2 is changed
      var2          ⍝ var2 retains the previous value
1 2 3
```

Namespaces are objects and are pass-by-reference. All names which are assigned a reference can be used to refer to the original object.

```APL
      'ns1'⎕ns''
      ns1.name←'Bob'
      'ns2'⎕ns''
      ns2←ns1
      ns1.name←'Steve'
      ns2.name
Steve
```

### Saving and Loading
There is one more type of system-thing to mention, although you have seen the `]box` one before. Commands which begin with a right-square-bracket `]` are called <a target="_blank" href="">User Commands</a>. These are also only used while interacting with the session, but you can customise them and create your own.

Dyalog webinar: <a target="_blank" href="https://dyalog.tv/Webinar/?v=LWJzRGrOC3k">Creating and Managing your own User Commands</a>

The example below shows how to save and load a workspace.

```APL
	  ]cd /tmp
	  )save MyFirstWS
	  )clear
	  )load MyFirstWS
```

---
**NOTE**
If you have not been using Dyalog, you should install it now. From now on we begin to deal with aspects of the session and interactions with the file system and other external systems which might not be possible to without a local installation of Dyalog.
---

# End of Day 1 Tasks

1. What is the rank of `⎕NL x` for any scalar or vector `x`?
1. What is the rank of `⎕NL -x` for any scalar or vector `x`?
1. Save Your Work
	1. Use `]cd` to change to a directory on your machine where you would like to save your work.
	1. Use `)wsid WSName` to change the name of your active workspace.
	1. Use `)save` to save your workspace.
	1. Use `)clear` to clear  
	1. Create a new namespace called 'Day1'
	1. Use `'Day1.⎕CY'WSName'` to copy the contents of your saved workspace into the `Day1` namespace.
	1. Now `)save` again.
	While `⎕SAVE` exists, it will overwrite any existing workspace file without asking first. Always use `)SAVE` when saving workspaces.