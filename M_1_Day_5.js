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
function xreverseString(str) {
  let newstr = str.split("").reverse().join("");
  console.log(newstr);
}
xreverseString("Hello Strive");

///////////////////or
const strrev = (str) => {
  let newstr = "";
  for (let i = str.length; i >= 0; i--) {
    newstr += str[i];
  }
  console.log(newstr);
};
strrev("Via Angelo Tavanti 23, Firenze, Italy");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed
as a parameter.
*/
const str =
  "capitalize the first leTTer of each wOrd oF a giVen sTRing PASSED.";
const upperFirst = function (str) {
  let x = str.toLocaleLowerCase();
  let y = x.split(" ");
  let z = [];
  for (let i = 0; i < y.length; i++) {
    z.push(y[i][0].toUpperCase() + y[i].slice(1));
  }
  return z.join(" ");
};
console.log(upperFirst(str));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a 
given string.
*/
const cutString = function (str) {
  let x = str.split(" ");
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y.push(x[i].slice(1, x[i].length - 2));
  }
  return y.join(" ");
};
console.log(cutString(str));

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

/////////////////Extra//////////////////////////
/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) 
and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
/// need explanation
const checkArray = function (n) {
  return n.reduce(function (sum, num) {
    if (num > 5) {
      console.log(num + " is greater than 5");
      return sum + num;
    }
    return sum;
  }, 0);
};
console.log(checkArray([4, 5, 6, 7]));

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a 
number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
let shoppingCart = [
  { name: "object 1", id: " AS2002", price: 20, quantity: 3 },
  { name: "object 2", id: " AS2003", price: 10, quantity: 2 },
  { name: "object 3", id: " AS2004", price: 25, quantity: 8 },
  { name: "object 4", id: " AS2005", price: 10, quantity: 1 },
  { name: "object 5", id: " AS2006", price: 15, quantity: 12 },
  { name: "object 6", id: " AS2007", price: 20, quantity: 13 },
  { name: "object 7", id: " AS2008", price: 40, quantity: 10 },
];
const shippingCartTotal = function (x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += x[i]?.price * x[i]?.quantity;
  }
  return total;
};
console.log(`Total amount is ${shippingCartTotal(shoppingCart)}€.`);

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number 
of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and 
returns the total number of items in the shoppingCart.
*/
const addToShoppingCart = function (
  ObjectName,
  objectID,
  objectPrice,
  objectQuantity
) {
  shoppingCart.push({
    name: ObjectName,
    id: objectID,
    price: objectPrice,
    quantity: objectQuantity,
  });
  console.log(shoppingCart);
};
addToShoppingCart("aaa", "fff", 23, 45);

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number 
of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most 
expensive item in the array.
*/
const maxShoppingCart = function (x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    if (total < x[i]?.price) {
      total = x[i]?.price;
    }
  }
  return total;
};
console.log(`${maxShoppingCart(shoppingCart)}€.`);

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number 
of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last 
item.
*/
const latestShoppingCart = function (x) {
  let total;
  for (let i = 0; i < x.length; i++) {
    total = x[x.length - 1]?.name;
  }
  return total;
};
console.log(`${latestShoppingCart(shoppingCart)} is the last item.`);

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger 
than x for three times in a row.
*/

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function 
automatically skips non-numeric entries in the array.
*/

let collection = ["a", 10, 8, 0, 6, 5, 7, 3, 5, 1, 6];
const average = function (x) {
  let nums = [];
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      nums.push(x);
      sum += x[i];
    }
  }
  return sum / nums.length;
};
console.log(average(collection));
/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/
const longest = function (arr) {
  let longstr = "";
  let newstr = arr.split(" ");
  for (let i = 0; i < newstr.length; i++) {
    if (longstr.length < newstr[i].length) {
      longstr = newstr[i];
    }
  }
  console.log(longstr);
};
longest("function to create a inthisexampleisvalid very simple");

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a 
string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (inthisexampleisvalid) isvalid if the 
words SPAM and SCAM does not appear.
*/
const tXT =
  "SCAM capitalize the first leTTer of each wOrd oF a giVen sTRing PASSED.";

const antispam = (str) =>
  str.includes("SPAM") || str.includes("SCAM")
    ? console.log("This email is a scam 😬")
    : console.log("This email is not a scam 😁");

antispam(tXT);

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes 
since the d.
*/
function dayCalc(date) {
  let diff = new Date().getTime() - new Date(date).getTime();
  let years = Math.floor((diff / 31536000000) % 365);
  let month = Math.floor(diff / 2628000000) % 12;
  let days = Math.floor(diff / 86400000) % 24;
  let hr = Math.floor((diff / 3600000) % 24);
  let min = Math.floor((diff / 60000) % 60);
  let sec = Math.floor((diff / 1000) % 60);
  console.log(
    `${years} years, ${month} months, ${days} days, ${hr}:${min}:${sec} has passed since ${date}`
  );
}
dayCalc("11/12/1980");

/* 
EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a 
matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
const matrixGenerator = function (x) {
  let matrix = [];
  for (let i = 0; i < x; i++) {
    matrix[i] = [i];
    for (let j = 0; j < x; j++) {
      matrix[i][j] = `${i}${j}`;
    }
  }
  console.log(matrix);
};
matrixGenerator(5);
