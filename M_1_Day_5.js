/////// Homework
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of 
the associated rectangle.
*/
const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(2, 5));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those
two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (x, y) {
  if ((typeof x == "number") & (typeof y == "number")) {
    if (x !== y) {
      return x + y;
    } else {
      return (x + y) * 3;
    }
  }
};
console.log(crazySum(5, 6));
console.log(crazySum(5, 5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (x) {
  if (typeof x == "number") {
    if (x > 19) {
      return (x - 19) * 3;
    } else {
      return 19 - x;
    }
  }
};
console.log(crazyDiff(2));
console.log(crazyDiff(22));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 
100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
  if (typeof n == "number") {
    if ((n <= 100 && n >= 20) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already 
begins with "Strive", then it should just return the original string.
*/
const strivify = function (txt) {
  if (
    txt[0] == "S" &&
    txt[1] == "t" &&
    txt[2] == "r" &&
    txt[3] == "i" &&
    txt[4] == "v" &&
    txt[5] == "e"
  ) {
    return txt;
  } else {
    return "Strive " + txt;
  }
};
console.log(strivify("Strbhfvbfhbv"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 
3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function (n) {
  if (typeof n == "number" && n > 0) {
    if (n % 3 == 0 || n % 7 == 0) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(check3and7(30));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string 
(es.: Strive => evirtS).
*/

"Hello" // 5 // 0, 1, 2, 3, 4
function xreverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(xreverseString("hello"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed
as a parameter.
*/

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a 
given string.
*/

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random 
numbers between 0 and 10.
*/
const giveMeRandom = function (x) {
  let randnum = [];
  if (typeof x == "number") {
    for (let i = 0; i < x; i++) randnum.push(Math.round(Math.random() * x));
  }
  return randnum;
};
console.log(giveMeRandom(9));
////// Extra

/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) 
and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
const checkArray = function () {};

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a 
number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
  { name: "object 1", id: " AS2002", price: 20, quantity: 3 },
  { name: "object 2", id: " AS2003", price: 10, quantity: 2 },
  { name: "object 3", id: " AS2004", price: 25, quantity: 8 },
  { name: "object 4", id: " AS2005", price: 100, quantity: 1 },
];

const shippingCartTotal = function (x) {
  let y;
  for (let i = 0; i < x.length; i++) {
    y = price.x[i] * quantity.x[i];
  }
  return y;
};
//console.log(shippingCartTotal(...shoppingCart));
/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number 
of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and 
returns the total number of items in the shoppingCart.
*/

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number 
of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most 
expensive item in the array.
*/

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number 
of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last 
item.
*/

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger 
than x for three times in a row.
*/

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function 
automatically skips non-numeric entries in the array.
*/

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a 
string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the 
words SPAM and SCAM does not appear.
*/

const antispam = function (array) {
  let x = "";
  if (x.includes("SPAM") || x.includes("SPAM")) {
    return false;
  } else {
    true;
  }
};
x = "bgtjsjkkaljjdnd";
console.log(antispam("bgtjsjkkaljjdnd"));

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes 
since the d.
*/

/* 
EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a 
matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
