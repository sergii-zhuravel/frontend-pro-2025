1. throw new Error()
2. Show call stack in a browser
3.

Test Promises

Question 10
before, after, undefined

async function fetchData() {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
return data;
}
console.log('before');
const result = fetchData();
console.log('after');
console.log(result);
