// 'use strict'
// 1. Gaps
//   a. function expression, function declaration.


//  let myFunc2 = function (a, b)  {
//     return a + b
// }

// myFunc2.newField = 'new'

// console.log(typeof myFunc2)
// console.log(myFunc2.name)
// console.log(myFunc2.newField)




//   b. Передача параметрів за посиланням та за значенням.

// function multiply(x, y) {
//     x = 2
//     return x * y
// }

// multiply(1, 2)


// function multiply(arr1) {
//     let newArray = [...arr1]
//     newArray[0] = 3

//     return arr1
// }

// multiply([1, 2, 3])


//   c. Копіювання об'єктів та масивів.
//   d. Рекурсія.


// function sayHello(count) {
//     if (++count === 10) return

//     console.log('Hello')
//     sayHello(count)
// }

// sayHello(0)

// sayHello(0) -> sayHello(1) -> sayHello(2) -> ... -> sayHello(10) 
//   e. Робота з масивом за допомогою методів map, filter, forEach, find, reduce. 
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function reverse(s) {
    return s.split('').reverse().join('')
}

console.log(fruits.map(reverse))



// const arr = [3, 5, 1, 4, 2];
// const total = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);


// 2. Working with arrays and functions
//
// 1. how to swap two variables?
// 2. Simple search in an array
// 3. Binary search in an array
// 4. Is Array sorted?
// 5. Bubble sort of the array 
// 6. Fibo:
// 1 1 2 3 5 8 13 21


// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

//   console.log( fib(3) ); // 2
//   console.log( fib(7) ); // 13
//   console.log(fib(50)); 

// function fib(n) {
//     if (fib.cache === undefined) {
//         fib.cache = {}
//     }
//     if (fib.cache[n] === undefined) {
//         fib.cache[n] = n <= 1 ? n : fib(n - 1) + fib(n - 2);
//     }
//     return fib.cache[n]
//   }
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757






// Bonus
// https://leetcode.com/
// https://bigfrontend.dev/

// Linkedin