---
layout: workshop
title: Multidimensional Arrays
back: /course/day1/4
next: /course/plan
---

### Shape
All arrays can be described using two vectors: the **shape** and the **ravel** of elements.

The monadic *function* "ravel" `,` returns items of an array as a vector.

```APL
	  ]box on
      ,'AB'∘.,'PQRS'
┌──┬──┬──┬──┬──┬──┬──┬──┐
│AP│AQ│AR│AS│BP│BQ│BR│BS│
└──┴──┴──┴──┴──┴──┴──┴──┘
```

The monadic *function* "shape" `⍴` returns the shape of an array. This is a vector of the length of each dimension.

```APL
      ⍴ 3 4 ∘.× 1 10 100
2 3
      (⍴3 4) ,⍴ 1 10 100
2 3
```

The general rule for a scalar function `f` (which maps between elements) is `{(⍴ ⍺ f ⍵) = (⍴⍺)⌈⍴⍵}`.

The general rule for the outer product is `{(⍴ ⍺ ∘.f ⍵) = (⍴⍺),⍴⍵}`.

---
**NOTE**
  Here is some extra info

---

> **NOTE**
    Here is some info

{% include note.html content="This is my note. All the content I type here is treated as a single paragraph. <br/><br/> Now I'm typing on a  new line." %}

### Reshape  
The dyadic function **reshape** `⍴` takes elements from `⍵` and creates an array of shape `⍺`.

```APL
      3 4⍴⍳12       
1  2  3  4
5  6  7  8
9 10 11 12
      3 4⍴⍳10000   ⍝ Only the first (×/⍴⍵) elements are used
1  2  3  4
5  6  7  8
9 10 11 12
      3 4⍴⍳3       ⍝ Elements are repeated if there are too few
1 2 3 1
2 3 1 2
3 1 2 3

```

Arrays can have dimensions of length 0. These arrays have a shape but no values.

```APL
      2 1 5⍴⎕A   ⍝ Two matrices with one row each
ABCDE
     
FGHIJ
      2 0 5⍴⎕A   ⍝ Two matrices with no rows

```

The number of dimensions is the *rank* of an array. Dyalog supports arrays of up to rank 15.

```APL
      ≢⍴0 1∘.+2 3∘.-4 5∘.×6 7∘.÷8 9
5
```

It is not always obvious what the shape of an array is from its display form in the session.

```APL
      X←'ABCD'
      Y←'ABBA'
      X=Y
1 1 0 0

      X←1 4⍴'ABCD'
      X=Y
RANK ERROR: Mismatched left and right argument ranks
      X=Y
       ∧
```

Using `≢⍴` can reveal differences.

```APL
      ≢⍴,2   ⍝ Vectors are rank-1 arrays
1
      ≢⍴2    ⍝ Scalars are rank-0 arrays
0
```

While `=` is a <a target="_blank" href="https://aplwiki.com/wiki/Scalar_function">scalar function</a>, dyadic **match** `≡` simply returns `1` if two arrays are equivalent and `0` otherwise.

```APL
      (,2)≡2     ⍝ A vector is not a scalar
0
      (,1)≡⍴,2   ⍝ The shape is always a vector
1	  
      ⍬≡⍴2       ⍝ The shape of a scalar is the empty numeric vector zilde
1
      ⍬≡0⍴0      ⍝ Zilde has a shape of 0
1
      ⍬≡⍳0       ⍝ Array of the indices up to 0
1
      ''≡⍬       ⍝ EmptyCharacterArray ≢ EmptyNumericArray
0
	  ''≡'list of all my friends'   ⍝ An empty array joke
1	  
```

### The Shape of the Result
Now it is time for you to learn the truth about indexing. So far we have only seen indexing into a vector using another vector. However, the result of an indexing expression is the shape of the array of indices.

```APL
      'DYALOG'[2 3⍴6?6]
DAY
GLO
```

High rank <a target="_blank" href="http://help.dyalog.com/latest/#Language/Primitive%20Functions/Indexing.htm?Highlight=simple%20indexing">simple indexing</a> involves selecting from `0` or more dimensions or *axes* in an array.

```APL
      (2 3⍴'DYALOG')[;2]
YO
```

Omitting an axes selects from the whole axes


### Multiline Input
Type `)ED myfn` and press `Enter`  
Congratulations! You have now unlocked multi-line dfns! 

Paste the following into the editor after `myfn`

```APL
←{
⍝ My First Multi-line Dfn!
⍝ ⍵: Simple character vector name
⍝ ←: Words of encouragement
'Wow, ',⍵,', you''re doing so well! Keep up the good work!'
}
```

If you have a numpad on your keyboard, press the `/` key on your numpad to see your code magically reformatted. 

Press `Esc` to quit the editor while saving changes to `myfn`.

# Problem Set 5: High Rank Arrays

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