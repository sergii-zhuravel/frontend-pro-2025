// Reduce visualization
// https://reduce.surge.sh/

const arr = [3, 5, 1, 4, 2];
const total = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

const doubledArray = arr.reduce((acc, item) => {
  console.log("acc: ", acc);
  console.log("item: ", item);
  return [...acc, item * 2];
}, []);

const arrayToObject = arr.reduce((acc, item) => {
  console.log("acc: ", acc);
  console.log("item: ", item);
  return { ...acc, [item]: item * 2 };
}, {});

console.log(arrayToObject);
