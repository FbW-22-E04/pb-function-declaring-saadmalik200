function multiplier(a, b) {
  //   return a * b;
  console.log(a * b);
}

multiplier(2, 4);

console.log("---------------------------------------------");

// Q2

const secondQues = function multiplier2(a, b) {
  return a * b;
};

console.log(secondQues(1, 2));

console.log("---------------------------------------------");

// Q3

const arrowFunc = (a, b) => a * b;
console.log("Arrow Functions is: ", arrowFunc(3, 5));

// Q4
// part 1
function q4NormalFunc(a, b) {
  return a % b;
}
console.log(q4NormalFunc(15, 4));

// part 2

const newSecondQues = function multiplier3(a, b) {
  return a % b;
};

console.log(newSecondQues(3, 3));

const newArrowFunc = (a, b) => a % b;
console.log("New Arrow Functions is: ", newArrowFunc(5, 5));
