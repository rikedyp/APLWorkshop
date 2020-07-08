---
layout: workshop
title: Selecting from Arrays
back: /course/
next: /course/
---

The examples below demonstrate some unfamiliar constructs. Take some time to execute, modify and experiment with the examples until you feel you have an understanding of what each expression does.

```APL      
      3{(⍺-1)↓⍳⍵}7

      n←4 2 2⍴2,(4/1),(4/2),1 2 1 2 2 1 1
      n⍳2 2⍴2 1
      3⌷n
      3 2 1⌷n

      rain←?7 5 12⍴250   ⍝ Monthly rainfall in millimeters over 7 years for 5 countries
      rain[1 3 4;;]
      rain[;1;]

      ¯2 2(↑⍤2)alph
      alph[;2 3;1 2]
      ¯2 1(↑⍤2)alph
      alph[;2 3;1]
```

### Problems

1. Grille Cypher  
	A Grille is a cryptographic device consisting of a square sheet with holes cut out which, when laid on top of a similarly-sized character matrix, reveals a hidden message (see figure 1).

	<div align="center">
		<figure>
			<img src="{{ site.baseurl }}/img/grille.png" alt="A grille and grid cypher" width="100%">
			<figcaption>Figure 1. A grille and grid cypher</figcaption>
		</figure>
	</div>
	Write an APL function `Grille` that implements an electronic version of a grille which:  
	- takes a character matrix left argument, where a hash `'#'` represents opaque material and a space `' '`represents a hole.
	- takes a similarly-shaped character matrix right argumentcontaining the message.
	- returns the hidden message as a character vector.

	Example:

	```APL
	      grid←6 6⍴'ESVWGTHOWTHZHIVSAICASSACFAAUCMNYMPCE'
	      grille←6 6⍴'##### #### ## # # ## ### ## ## #####'
	      grille grid
	┌──────┬──────┐
	│##### │ESVWGT│
	│#### #│HOWTHZ│
	│# # # │HIVSAI│
	│## ###│CASSAC│
	│ ## ##│FAAUCM│
	│ #####│NYMPCE│
	└──────┴──────┘
	      grille Grille grid
	THISISFUN
	```

1. Write a function `InRange` to select numbers from an array `⍵` which are within the range specified by a two-element vector `⍺`.

```APL
      2 6 InRange 3 4⍴1 3 8 6 2 5 5 8 4 10 9 10
3 6 2 5 5 4
```

1. Bar chart
	Histograms are useful for representing frequency data. Before all the fancy charting applications of today, APL was quite adept at producing graphics from text.

	Write a function Histogram which produces a histogram from a vector of frequencies using the `.` and `⎕` characters.

	Example:

	```APL
	      Histogram 3 1 4 1 5 9
	⎕⎕⎕......
	⎕........
	⎕⎕⎕⎕.....
	⎕........
	⎕⎕⎕⎕⎕....
	⎕⎕⎕⎕⎕⎕⎕⎕⎕
	```

1. Checkout Sum  
	In a shop, each product is identified by a code. You are given the list of codes, and the corresponding prices:

	```APL
	      pcodes←56 66 19 37 44 20 18 23 68 70 82
	      prices←9 27 10 15 12 5 8 9 98 7 22
	```

	A customer gives you a list of items he intends to buy as a vector of code/quanitity pairs in the form `code,quantity, code,quantity, ...`

	```APL
	      wanabuy←37 1 70 20 19 2 82 5 23 10
	```	

	Write a function `Evaluate` which takes 
    Evaluate the customer's bill. You will likely want to solve this using several lines of APL. 

	```APL	      
	      pq←(0.5×≢wanabuy)2⍴wanabuy
	      +/pq[;2]×prices[pcodes⍳pq[;1]]
	375
	```

1. Monthly Sales
    You are given a vector of sales data for `3` products over `2` years. The first `12` elements are sale for the first product for the first year, the second `12` elements represent sales of the 2nd products, and so on.

    ```APL
    sales←156 287 180 261 242 102 244 211 286 152 127 38 78 67 101 181 78 78 110 287 250 84 246 268 55 32 87 254 198 252 298 231 102 215 60 196 122 56 194 58 161 177 143 184 280 208 89 10 18 70 212 195 174 176 285 1 159 208 92 223
    ```

    1. Compute the total sales of each of the `5` products.
    1. Compute the total sales for each year
    1. The tax on sales varies by product, and changes each year. The tax for each product for each year is given in Table 1.

        |   |   |   |
        |---|---|---|
        |   |**Product 1**|**Product 2**|**Product 3**|
        |**Year 1**|20%|18%|5%|
        |**Year 2**|17.5%|12%|3%|

        1. Compute the total tax on product 3 over 2 years
        1. Compute the total tax on all products in year 2