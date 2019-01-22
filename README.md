# Iterator Drill: Find

## Learning Goals

* Demonstrate `find()`
* Use `find()` to isolate a specific result

## Introduction

In any programming language, you'll perform operations on arrays. Looking in
an `Array` for a sub string or set of characters is a common task. Sometimes
you need to look for a _specific_ item in the array, and return it. Given a
string or array you can iterate over its elements and perform actions. ES6
introduced a few new `Array` methods--one of them being `find()`.

## Demonstrate `find()`

The `find` function behaves similar to others in JavaScript (like `filter`)
that want a truthy/falsey result. `find` returns the **first**
element for which the function returns true, a single element.

```js
[1,3,5,6,8].find( e => e % 2 === 0 )
```

**Note**: You could have multiple matches, but `find` returns _only the first
element_. This could lead to some bugs if you're not careful.

```js
let roommates = ["jess", "winston", "winston", "nick"];

roommates.find( s => s === "winston" )
// => winston

roommates.filter( s => "winston" )
//=> [winston, winston]
```

## Use `find()` to Isolate a Specific Result

Let's create a function that uses the method `find()` to single out a specific
result in game record data for the football team Kansas City Chiefs. We want to
find out if at any point in the team's existence, if they've had a win in the
Superbowl at _any_ point in time. Our data looks like this:

```js
const record = {
  2018: "L",
  2017: "W",
  2016: "N/A",
  //...
}
```
When writing our function, we want to return a year that has a value of `W`,
indicating that the Kansas City Chiefs have in-fact won a Superbowl game. Run
the tests using `learn`.

## Conclusion

`Array.find()` is a built-in function in JavaScript which is used to get the
value of the first element in the array that satisfies the provided condition.
With this, you can quickly check all the elements of the array and returns the
first match.

## Resources

- [MDN: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)