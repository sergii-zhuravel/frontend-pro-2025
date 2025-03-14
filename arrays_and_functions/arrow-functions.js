// (params)) => expression
() => 5;

// examples
() => 2 + 5;
(oneParam) => console.log(oneParam);
(a, b) => a + b;
(a, b) => {
  return a + b;
};

//IIFE:  (function)()
(() => console.log(2 * 5))();

// Return object
() => ({ id: 1, model: "Audi" });
