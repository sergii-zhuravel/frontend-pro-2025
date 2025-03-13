//   e. Робота з масивом за допомогою методів map, filter, forEach, find, reduce. 


// 1. Написати функцію що приймає строку (строка = назва фрукту). Вивести цифрове значення скільки разів зустрічається цей фрукт у масиві
// 2. Написати функцію що повертає унікальні значення фруктів масиву
// 3. Написати функцію що приймає строку (строка = назва фрукту). Вивести масив фруктів без фрукту що був переданий в цю функцію.


const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];


// const basket = {}
// if (basket[fruit]) {
//     basket[fruit]++
// } else {
//     basket[fruit] = 0
// }


// function getUnique() {
//     const basket = {}
//     for (let fruit of fruits) {
//         if (basket[fruit]) {
//             basket[fruit]++
//         } else {
//             basket[fruit] = 0
//         }
//     }

//     return Object.keys(basket)
// }

// console.log(getUnique())


console.log(Array.from(new Set(fruits)))




// function countFruitInArray(fruitToCount) {
//     let counter = 0
//     for (let fruit of fruits) {
//         if (fruit === fruitToCount) {
//             counter++
//         }
//     }

//     return counter
// }

// function countFruitInArray(fruitToCount) {
//     return fruits.filter(fruit => fruit === fruitToCount).length
// }

// console.log(countFruitInArray('apple'))

// function filterFruit(fruitToFilter) {
//     const newFruits = []
//     fruits.forEach((fruit) => {
//         if (fruit !== fruitToFilter) {
//             newFruits.push(fruit)
//         }
//     })

//     return newFruits
// }

// function filterFruit(fruitToFilter) {
//     return fruits.filter(fruit => fruit !== fruitToFilter)
// }


// console.log(filterFruit('apple'))