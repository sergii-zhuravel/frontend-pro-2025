// SECOND PART, THIS!

let car = {
    model: "BMW",
    age: 20,
    testFunction: function() {
        console.log('Inside object')
    }
  };
  // car.testFunction()

  // console.log(car)

  car.size = 'BIG'


car.sayBip = function() {
    console.log('Bip Bip Bip')

}
// console.log(car)
car.sayBip()

car.isNew = function() {
    if (this.age > 1) return false

    return true
}

const newCar = {
  mode: 'Audi',
  age: 0
}

newCar.isNew  = car.isNew 


// console.log(newCar.isNew.call(car))
// console.log(newCar.isNew.apply(car, []))
let numbers = [1, 3, 4, 5, 6, 9, 2]
// console.log(Math.max(1, 2 , 5, 3))

const f = car.isNew.bind(newCar)

console.log(f.call(car))


// console.log(Math.max.apply(null, numbers))
// console.log(Math.max(...numbers))








// let car = {
//     model: "BMW",
//     age: 20,
//     isNew() {
//         return true
//     },
//     sayBip: function() {
//         console.log("Bip")
//     }
//   };

// console.log(car.isNew())
// car.sayBip()

// Виклик з об'єктом
// Виклик без об'єкта this === undefined (in Strict Mode or Global Object)

// function sayHi() {
//     console.log(this);
// }
  
// sayHi(); // undefined

// Arrow functions don't have THIS