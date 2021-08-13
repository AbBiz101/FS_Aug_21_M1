/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
let num5 = [];
for (let i = 1; i <= 5; i++) {
  num5.push(i);
}
console.log(`the first 5 positive numbers are ${num5}`);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
let me = {
  name: "Abnet",
  surname: "Nega",
  emailAddress: "emailaddress@gmail.com",
  age: 26,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
me.drivingLicense = true;
//console.log(me);

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete me.age;
//console.log(me);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a 
different email address than the previous one.
*/
let me1 = {
  name: "Tom",
  surname: "Jerry",
  emailAddress: "emailaddress1@gmail.com",
};

if (me.emailAddress === me1.emailAddress) {
  console.log(`the email addresses are the same`);
} else {
  console.log("the email addresses are not the same");
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total 
amount spent by the current user.Currently you have a promotion: if the customer's shopping cart total 
is more than 50, the user is eligible for free shipping (otherwise it costs 10).Write an algorithm that 
calculates the total cost to charge the user with.
EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the 
end of the purchase.Modify the previous answer inserting this information and, applying the same rules for 
the shipping cost, calculate the totalCost.
*/
let totalShoppingCart = 30;
let shipping = 10;
let blackFriday = 20;
let TOTAL;
if (totalShoppingCart > 50) {
  TOTAL = totalShoppingCart - (totalShoppingCart * blackFriday) / 100;
  console.log(
    `You are eligible for free shipping. Your total amont is ${TOTAL}`
  );
} else {
  TOTAL =
    shipping + (totalShoppingCart - (totalShoppingCart * blackFriday) / 100);
  console.log(
    `You are not eligible for free shipping. Your total amont is ${TOTAL}`
  );
}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.After you create the 
first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original 
one.
*/
let car = {
  brand: "Ford",
  model: "Mustang",
  licensePlate: "S-ET400",
};
let car2 = Object.assign({}, car);
car2.licensePlate = "S-ET410";
let car3 = Object.assign({}, car);
car3.licensePlate = "S-ET420";
let car4 = Object.assign({}, car);
car4.licensePlate = "S-ET430";
let car5 = Object.assign({}, car);
car5.licensePlate = "S-ET440";
//console.log(car);
//console.log(car2);
//console.log(car3);
//console.log(car4);
//console.log(car5);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
let carsForRent = [car, car2, car3, car4, car5];
//console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
let newlist = Object.assign([], carsForRent);
newlist.shift();
newlist.length = newlist.length - 1;
//console.log(newlist);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log(typeof car.licensePlate);
console.log(typeof car.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and 
carsForRent arrays.
*/

let carsForSale = [car, car2, car3];
let totalCars = {
  carsForSale: carsForSale.length,
  carsForRent: carsForRent.length,
};
console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for (let i = 0; i < totalCars.length - 1; i++) {
  for (let j = 0; j < totalCars[i].length; j++) {
    console.log(totalCars[i][j]);
  }
}

/////////Extra

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let y = [x.reverse()];
console.log(`the revert val is ${y}`);
console.log(x);

/* EXERCISE 2
Write the code to get the maximum value in an array.
EXERCISE 3
Write the code to get the minimum value in an array.
*/
let xmax = Math.max(...x);
let xmin = Math.min(...x);
console.log(`the max val is ${xmax}`);
console.log(`the min val is ${xmin}`);

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
var evenNum = x.filter((x) => x % 2 === 0);
console.log(`even vals only ${evenNum}`);

//or
let evenNumbers = [1, 5, 2, 3, "cat", "whatever", { name: "Test" }];
let acc = [];
for (let i = 0; i < evenNumbers.length; i++) {
  if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 1)
    acc.push(evenNumbers[i]);
}

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
let y1 = [];
let x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < x1.length; i++) {
  if (i % 2 != 0) {
    y1.push(i);
  }
}

//or

for (let i = 0; i < evenNumbers.length; i++) {
  if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 1) {
    evenNumbers.splice(i, 1);
    i--; // i = i -1
  }
}

console.log(`odd vals only ${y1}`);

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
let novowels = "";
let string =
  "Write the code to increase all the numeric values in a array by 1.";
for (let i = 0; i < string.length; i++) {
  if (
    string[i] != "a" &&
    string[i] != "e" &&
    string[i] != "i" &&
    string[i] != "o" &&
    string[i] != "u"
  ) {
    novowels += string[i];
  }
}
console.log(novowels);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
let y2 = [];
let xx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < xx.length; i++) {
  if (typeof xx[i] === "number") {
    y2.push(i + 2);
  }
}
//console.log(`orignal number ${xx}`);
//console.log(`+1 number ${y2}`);

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let txt = [
  "Replace",
  "all",
  "the",
  "strings",
  "in",
  "an",
  "array",
  "with",
  "their",
  "length",
];
let txtnum = [];
for (let i = 0; i < txt.length; i++) {
  x = txt[i].length;
  txtnum.push(x);
}
console.log(`txt count ${txtnum}`);

let num = [3, 5, 8, 4, 6, 9, 7, 1, 0, -2, -5];
num.sort();
console.log(num);
