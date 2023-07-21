//   DEFAULT VALUES IN A FUNCTION

function sum1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(sum1()); // result: 3
console.log(sum1(3)); // result: 5
console.log(sum1(0, 0, 0)); // result: 3

function sum2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(sum2());

// Using default value by ECMA Script 2015
console.log(
  "----------------------- Using default value by ECMA Script 2015 -----------------------"
);
function sum3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(sum3());
