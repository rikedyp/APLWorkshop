---
layout: workshop
title: Selecting from Arrays
back: /course/day1/7
next: /course/day1/8
---

    ```APL        
          pq←(0.5×≢wanabuy)2⍴wanabuy
          +/pq[;2]×prices[pcodes⍳pq[;1]]
    375
    ```