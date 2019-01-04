# Iterator Drill: Find

## Learning Goals

* Define how the `map()` method works
* Demonstrate `find()`

## Introduction

In any programming language, you'll perform operations on arrays. Looking in
an `Array` for a sub string or set of characters is a common task. Sometimes
you need to look for a _specific_ item in the array, and return it. Given a
string or array you can iterate over its elements and perform actions. ES6
introduced a few new `Array` methods--one of them being `find()`.

## Define How the `map()` Method Works

```js
const items = [
  { name: 'a', content: { /* ... */ }},
  { name: 'b', content: { /* ... */ }},
  { name: 'c', content: { /* ... */ }}
]
for (const item of items) {
  if (item.name === 'b') {
    return item
  }
}
```

## Demonstrate `find()`

The `find` function behaves similar to others in JavaScript (like `filter`)
that want a truthy / falsey result. `find` returns the **first**
element for which the function returns true, a single element.

The initial example can be written as a `find()` function as seen below:

```js
items.find((item) => item.name === 'b')
```

Another example with a calculation:

```js
[1,3,5,6,8].find( e => e % 2 === 0 )
```

**Note**: You could have multiple matches, but `find` returns _only the first
element_. This could lead to some bugs if you're not careful.

```js
let activeStudents = [hermioneGranger, nevilleLongbottom, harryPotter,
ronWeasley];

activeStudents.find( s => isPossibleSavior(s) )
// => nevilleLongbottom

activeStudents.filter( s => isPossibleSavior(s) )
//=> [nevilleLongbottom, harryPotter]
```

## Conclusion

`Array.find()` is a built-in function in JavaScript which is used to get the
value of the first element in the array that satisfies the provided condition.
With this, you can quickly check all the elements of the array and returns the
first match.

## Resources

- [MDN: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)