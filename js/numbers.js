// Variable declaration
const a = 7;
let b = 3;

// Mathematical operations
console.log(a + b); // 10
console.log(a - b); // 4
console.log(a * b); // 21
console.log(a / b); // 2.3333333333333335

// Edge case testing
b = 0; // Changes the value of variable b to 0

console.log(a + b); // 7
console.log(a - b); // 7
console.log(a * b); // 0
console.log(a / b); // infiniti

b = -0; // Changes the value of variable b to -0
console.log(a + b); // 7
console.log(a - b); // 7
console.log(a * b); // -0
console.log(a / b); // -infiniti

// is a decimal
b = 3.7;

console.log(a + b); // 10.7
console.log(a - b); // 3.3
console.log(a * b); // 25.900000000000002
console.log(a / b); // 1.8918918918918919

//======================================================================================================
/*
Tasks for analysis:
1. What happens when dividing by zero in JavaScript?

In JavaScript, when dividing a number by zero, the result is Infinity.


2. How does JavaScript distinguish between division by 'positive zero' and 'negative zero'?

JavaScript supports both positive zero (+0) and negative zero (-0). This is a feature of floating-point numbers in the IEEE 754 specification, which JavaScript's number system is based on.
    - When dividing a positive number by +0, the result will be Infinity.
    - When dividing a positive number by -0, the result will be -Infinity.


3. What happens to the result of an operation if one of the numbers is a decimal?

If one of the numbers is a decimal, the result might be a decimal with small rounding errors due to how JavaScript handles numbers.
*/



//======================================================================================================
// Numbers
// Type conversion to a number
const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

// Methods Number.parseInt and Number.parseFloat
// Number.parseInt() - parse an integer from a string
console.log(Number.parseInt("5px")); // 5 (number)
console.log(Number.parseInt("12qwe75")); // 12 (number)
console.log(Number.parseInt("12.45qwe89")); // 12 (number)
console.log(Number.parseInt("Mango")); // NaN

// Number.parseFloat() - parse a floating-point number from a string
console.log(Number.parseFloat("5px")); // 5 (number)
console.log(Number.parseFloat("12qwe75")); // 12 (number)
console.log(Number.parseFloat("12.45qwe89")); // 12.45;  (number)
console.log(Number.parseFloat("Mango")); // NaN

// Check for a number, method - Number.isNaN(val)
const validNumber = Number("77");

console.log(typeof validNumber); // number;
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("string");

console.log(typeof invalidNumber); // number (!!! - A peculiarity of JavaScript is that NaN is a number)
console.log(Number.isNaN(invalidNumber)); // true

// Addition of floating-point numbers
console.log(0.1 + 0.2 === 0.3); //false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.17 + 0.24); // 0.41000000000000003
//You can make them whole numbers by multiplying by N, adding them, and then dividing the result by N
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// Another method toFixed()
console.log((0.17 + 0.24).toFixed(2)); //0.41 (string) !!!
console.log(typeof (0.17 + 0.24).toFixed(2)); // string !!!

// The Math class
// Math.floor(num) - returns the largest integer less than or equal to the given number
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - returns the smallest integer greater than or equal to the given number
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - returns the value of the number rounded to the nearest integer
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2,...) - returns the largest integer from the set
console.log(Math.max(10, 30, 45, 77, 50)); // 77

// Math.min(num1, num2,...) - returns the smallest integer from the set
console.log(Math.min(10, 30, 45, 77, 50)); // 10

// Math.pow(base, exponent) - raising to a power
console.log(Math.pow(2, 4)); // 16

// Math.random() - returns a pseudorandom number in the range [0, 1)
console.log(Math.random()); // a pseudorandom number between 0 and 1
console.log(Math.random() * (10 - 1) + 1); // a pseudorandom number from 1 to 10
