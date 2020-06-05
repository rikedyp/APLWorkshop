---
layout: exercise
title: Handling Data
---

# Handling Data

These problems will introduce you to the manifold ways in which you can manipulate data using Dyalog APL.

## Organizing

## Transforming

### Base Conversion

* Mixed radix... time conversion?
* https://www.sacrideo.us/apl-a-day-6-indices-and-encoding/

1. Convert the decimal (base 10) number `42` to its binary equivalent:

	Answer:
	```
	
	```

2. Test

3. Convert the binary number `110101` to its decimal (base 10) equivalent

	Answer:
	```
	      2 ⊥ 1 1 0 1 0 1
	53
	```

4. Given a matrix, `mat`, whose elements are any decimal number less than `15`,

	Generator:
	```
	mat←((?15) (?15))⍴(?⍳15)
	```

	Answer:
	```
	((+/⍴mat)⍴2)⊤mat
	```
