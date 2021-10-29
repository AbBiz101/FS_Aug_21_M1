// /* EXERCISE 1
// Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as 
// you were speaking to a 12 years old.
// */

// let me1 = {
//   name: "Abnet",
//   surname: "Nega",
//   friends: ["Miki", "Tom", 12],
//   age: 12,
//   spouse: undefined,
//   drivinglicense: false,
//   siblings: null,
// };
// console.log(me1);

// /* EXERCISE 2
// Try to describe what a variable is, in your own words.
// */
// // var is a container where we put different values in

// /* EXERCISE 3
// Write the code to execute an addition (a sum) of the numbers 12 and 20.
// EXERCISE 6
// Execute a subtraction between the number 12 and the variable x, which is storing 
// the value 12.
// */
// let xx = 12;
// let yy = 20;
// let zz = xx + yy;
// let zzz = 12 - xx;
// console.log(
//   `the sum is ${zz} and  subtraction between the number and variable is ${zzz}`
// );

// /* EXERCISE 5
// Create a variable called name containing the string John Doe.
// */
// let name = "John Doe";

// /* EXERCISE 7
// Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
// Verify that name1 is different from name2. 
// Verify then, that name1 and name2 are equals if both lowercase (without changing the 
//   value of name2).
// */
// let name1 = "john";
// let name2 = "John";

// if (name1 === name2) {
//   console.log(`${name1} and ${name2} are the same.`);
// } else {
//   console.log(`${name1} and ${name2} are not the same.`);
// }
// console.log(name1.toLowerCase() === name2.toLowerCase());

// /* EXERCISE 8
// Create a variable named x (its value must be less than 10). Write the code to print the 
// literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
// */
// let txt = 6;
// switch (txt) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   case 5:
//     console.log("five");
//     break;
//   case 6:
//     console.log("six");
//     break;
//   case 7:
//     console.log("seven");
//     break;
//   case 8:
//     console.log("eight");
//     break;
//   case 9:
//     console.log("nine");
//     break;
// }

// /* EXERCISE 9
// [Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered 
//   during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
// */

// let v2 = 10;
// let v3 = 20;
// let v1 = v3 === v2 ? "no" : "yes";
// console.log(v1);

// /////////// Extra
// /* EXERCISE 1
// Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as 
// you were speaking to a 12 years old.
// */

// let me11 = {
//   name: "Abnet",
//   surname: "Nega",
//   friends: ["Miki", "Tom", 12],
//   age: 12,
//   spouse: undefined,
//   drivinglicense: false,
//   siblings: null,
// };
// console.log(me1);

// /* EXERCISE 2
// Try to describe what a variable is, in your own words.
// */
// // var is a container where we put different values in

// /* EXERCISE 3
// Write the code to execute an addition (a sum) of the numbers 12 and 20.
// EXERCISE 6
// Execute a subtraction between the number 12 and the variable x, which is storing 
// the value 12.
// */
// let xx1 = 12;
// let yy1 = 20;
// let zz1 = xx + yy;
// let zzz1 = 12 - xx;
// console.log(
//   `the sum is ${zz} and  subtraction between the number and variable is ${zzz}`
// );

// /* EXERCISE 5
// Create a variable called name containing the string John Doe.
// */
// let name = "John Doe";

// /* EXERCISE 7
// Create two variables: name1 and name2. name1 is equal to 
// john, name2 is equal to John.
// Verify that name1 is different from name2. 
// Verify then, that name1 and name2 are equals if both 
// lowercase (without changing the 
//   value of name2).
// */
// let name1 = "john";
// let name2 = "Joh";

// if (name1 === name2) {
//   console.log(`${name1} and ${name2} are the same.`);
// } else {
//   console.log(`${name1} and ${name2} are not the same.`);
// }
// console.log(name1.toLowerCase() === name2.toLowerCase());

// /* EXERCISE 8
// Create a variable named x (its value must be less than 10). Write the code to print the 
// literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
// */
// let txt = 1;
// switch (txt) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   case 5:
//     console.log("five");
//     break;
//   case 6:
//     console.log("six");
//     break;
//   case 7:
//     console.log("seven");
//     break;
//   case 8:
//     console.log("eight");
//     break;
//   case 9:
//     console.log("nine");
//     break;
// }

// /* EXERCISE 9
// [Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered 
//   during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
// */

// let v2 = 20;
// let v3 = 20;
// let v1 = v3 === v2 ? "no😭" : "yes!!!";
// console.log(v1);

// ///////////

// /*
//  1. Use ternary operator to assign "male" or "female" string to a variable based on the 
//  value of another 'isMale' variable
// */

// let isMale = true;
// let x = isMale ? "male" : "female";
// console.log(x);

// /*
//  2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
// */
// let y = 12;
// let z = 10;

// if (y + z === 8 || y - z === 8 || z === 8 || y === 8) {
//   console.log(true);
// } else {
//   console.log(!true);
// }

// /*
//   3. Create a variable which concatenates two strings.
// */
// let var1 = "Java";
// let var2 = "Script";
// let var3 = var1 + var2;
// console.log(var3);

// /*
// 4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
// */
// let num = [3, 5, 8, 4, 6, 9, 7, 1, 0, -2, -5];
// num.sort();
// console.log(num);

// /*
//  5. Write code to find the average of two given integers.
// */
// let num1 = 10;
// let num2 = 250;
// let avg = (num1 + num2) / 2;
// console.log(avg);

// /* 
//   6. Find the longest of two given strings
// */
// let a = "abchsd";
// let b = "vbfdher";
// let longstring = function (a, b) {
//   return a.length > b.length ? a : b;
// };
// console.log(`${longstring(a, b)} is longer.`);

// /*
//  7. Write code to check whether a value is an integer or not.
// */
// let intnum = 12;
// console.log(Number.isInteger(intnum));

// /*
//  8. Write code to calculate the percentage (%) of a number.
//         Ex.: 20% of 400 is 80
// */
// let percentage = function (numval, pval) {
//   let x = (numval * pval) / 100;
//   console.log(`${pval}% of ${numval} is ${x}`);
// };
// percentage(400, 20);

// /*
//  9. Write code to check if a given number is even or odd.
//  */

// if (intnum % 2 == 0) {
//   console.log(`${intnum} is even number`);
// } else {
//   console.log(`${intnum} is odd number`);
// }

// //////////
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}
let neww = {...vehicleOne,
  brand:45
}

myVehicle(neww);

function myVehicle({ type, color, brand, model }) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.'
  console.log(message);
}