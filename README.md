# Using the Array Find Method

## Learning Goals

* Practice using `find()` to isolate a specific result

## Introduction

We have learned that the `indexOf()` and `find()` methods can be used to locate
a single element in an array. In this lab, we'll practice using the `find()`
method.

> Top Tip: We've learned that the `find()` method takes a _callback function_ as
> its argument. This is a common pattern for the `Array` methods we'll be
> learning about in this section. (In fact, `indexOf()` is the only one that
> _doesn't_ take a callback function as an argument.) `find()` is one of two
> `Array` methods that expects the callback function to return either `true` or
> `false` ( `filter()` is the other one).

Recall that `find` returns the **first** element for which the function returns
true, a single element. If you want a list of _all_ elements that meet a
condition, you would use the `Array.prototype.filter()` method instead. We'll
learn about `filter()` in the next lesson.

## Practice Using `find()` to Isolate a Specific Result

Let's create a function that uses the method `find()` to single out a specific
result in game record data for the Kansas City Chiefs football team. We want to
find out if, at _any_ point in the team's existence, they've had a win in the
Superbowl. Our data looks like this:

```js
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
```

Write a function called `superbowlWin()` in `index.js` that:

* Receives 1 argument, an `Array` of JavaScript `Object`s
* Each object has two properties: `year` and `result`
* Use `find()` to test each `Object` to see if the `result` is `"W"` — a
   win!
* `superbowlWin()` should return the `year` when the win occurred (if it
   occurred at all!). If no win is found, it should return, sadly, `undefined`

## Conclusion

`Array.prototype.find()` is a built-in function in JavaScript which is used to
get the value of the first element in the array that satisfies the provided
condition. With this, you can quickly check all the elements of the array and
return the first match.

## Resources

* [MDN: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
