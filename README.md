# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dmartinez-van/lotide`

**Require it:**

`const _ = require('@dmartinez-van/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: asserts if two arrays of data are strictly equal or not.
* `assertEqual(actual, expected)`: asserts if two pieces of data are strictly equal or not.
* `assertObjectsEqual(actual, expected)`: asserts if two objects are strictly equal or not.
* `countLetters(string)`: counts the characters of a provided string.
* `countOnly(string, element)`: accepts an array of strings and an item the user wishes to count.
* `eqArrays(array1, array2`: returns true if arrays are strictly equal
* `eqObjects(object1, object2)`: returns true if objects are strictly equal
* `findKey(object, keyToFind)`: finds the key in an object.
* `findKeyByValue(object, value)`: finds key by a corresponding value.
* `flatten(nestedArray)`: removes all nested arrays within an array.
* `head(array)`: returns the first element of an array.
* `letterPositions(string, letter)`: returns the position(s) of a provided letter in a provided string.
* `map(array, callback)`: transforms an array's elements by some a callback function.
* `middle(array)`: returns the middle element(s) of an array.
* `tail(array)`: returns an array of all elements of an array expect the first element.
* `takeUntil(array, item)`: returns array populated from a provided array until some item is reached.
* `without(array, items)`: returns an array without the provided items.