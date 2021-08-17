// //JS Basics

// /* Ex.A
//  Create a variable called "test" and assign a string to it.
// */
// let test = "strive"

// /* Ex.B
//   Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
// */
// let sum = 0
// sum = 10 + 20

// /* Ex.C
//   Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
// */

// let random

// random = (Math.floor(Math.random() * 20))
// console.log(random)

// /* Ex.D
//   Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
// */

// let me = {
//   name: "Lorenzo",
//   surname: "Giorgini",
//   age: 20
// }
// console.log(me)

// /* Ex.E
//   Programmatically remove the age property from the previously create object.
// */

// delete me.age
// console.log(me)
// /* Ex.F
//  Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
// */
// me.skills = ["html" , "css" , "javascript" , "C" , "C#" , "python" , "sass"]
// console.log(me)
// /* Ex.G
//  Programmatically remove the last skill from the "skills" array inside the "me" object.
// */

// me.skills.pop()
// console.log(me)

// // JS Functions
// /* Ex.1
//   Write a function called "dice"; it should randomize an integer number between 1 and 6.
// */

// function dice() {
//   let random
//   random = (Math.floor(Math.random() * 6)) + 1
//   return random
// }
// console.log(dice())
// /* Ex.2
//   Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
// */

// function whoIsBigger (x, y) {
//   let biggestOne = 0
//   if(x > y){
//       biggestOne = x
//   } if (y > x) {
//       biggestOne = y
//   }
//   return biggestOne
// }
// console.log(whoIsBigger(20,200))

// /* Ex.3
//   Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
//   Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
// */

// function splitMe (_imString) {
//   let array = []
//   for (let i = 0; i < _imString.length; i++) {
//       array = _imString.split(" ")
//   }
//   return array
// }

// let str = "Hello how is it going"
// console.log(splitMe(str))

// /* Ex.4
//   Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
// */

// function deleteOne(_imString , _imBool) {
//   if (_imBool === true) {
//       return str.slice(1);
//   } else {
//       return str.slice(0 , str.length - 1);
//   }
// }
// console.log(deleteOne( str, true))

// /* Ex.5
//  Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
//  Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
// */

// function onlyLetters(_imString) {
//   return _string = _string.replace(/[0-9]/g, '');
// }
// _string = "hello 123 i'm new"
// console.log(onlyLetters(_string))

// /* Ex.6
//  Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
// */

// function isThisAnEmail(_imAnEmail) {
//   let email = "lorenzo.giorgini@outlook.com"
//   if (email.includes("@") && email.includes(".")) {
//       return true
//   } else {
//       return false
//   }
// }

// let email
// console.log(isThisAnEmail(email))

// /* Ex.7
//  Write a function called "whatDayIsIt" that should return the current day of the week.
// */

// function whatDayIsIt() {
//   let today = new Date().toLocaleDateString()
//   console.log(today)
// }

// whatDayIsIt()

// /* Ex.8
//   Write a function called "rollTheDices" which receives a number as a parameter.
//   It should invoke the dice() function defined in Ex1 the specified amount of times,
//   and return an object containing a "sum" property holding the sum of all values extracted
//   and a "values" array containing the single values of the dicerolls themselves.
//   Example: RollTheDices(3) => returns {
//       sum: 10
//       values: [3, 3, 4]
//   }
// */

// function rollTheDices(_number) {
//   let array = []
//   let sum = 0
//   for (let i = 0; i < _number; i++) {
//       array.push(Math.floor(Math.random() * 10))
//       sum += array[i]
//   }
//   var obj = {
//       sum:  sum,
//       values: array,
//     }
//     return obj
// }

// console.log(rollTheDices(3))

// /* Ex.9
//  Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
// */

// let howManyDays = (date) => {

//   const today = new Date();

//   let difference =  today.getTime() - date.getTime();
//   difference = ((difference / 1000) / 3600) / 24

//   return Math.floor(difference);
// };

// const randomDay = new Date('7/16/2020');

// console.log(howManyDays(randomDay));

// /* Ex.10
//  Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
// */

// let myBirthday = '8/14'

// function isTodayMyBirthday(_myBirthday) {
//   let d = new Date()
//   let dd = d.getDate()
//   let mm = d.getMonth() + 1

//   let today = mm + '/' + dd
//   if (today === myBirthday) {
//       return true
//   } else {
//       return false
//   }
// }

// console.log(isTodayMyBirthday())

// // JS Arrays // Objs
// // NOTE: movies array is defined at the end of this file!

// /* Ex.11
//  Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
// */

// /* console.log("===================================================")
// function deleteProp(_imObj , _imString) {
//   delete _imObj[_imString]
//   return _imObj
// }
// console.log(deleteProp(movies[0] , "Title")) */

// /* Ex.12
//   Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
// */

// function olderMovie(_movies) {
//   let year = []
//   for (let i = 0; i < _movies.length; i++) {
//     year.push(_movies[i].Year)
//   }
//   year.sort()
//   return year[0]
// }

// console.log(olderMovie(movies))

// /* Ex.13
//   Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
// */

// function countMovies (_movies) {
//   let count = 0
//   for (let i = 0; i < _movies.length; i++) {
//       count++
//   }
//   return count
// }

// console.log(countMovies(movies))

// /* Ex.14
//   Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
// */

// function onlyTheTitles(_movies) {
//   let arrayOfTitles = []
//   for (let i = 0; i < _movies.length; i++) {
//       arrayOfTitles.push(_movies[i].Title)
//   }
//   return arrayOfTitles
// }

// console.log(onlyTheTitles(movies))

// /* Ex.15
//  Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
// */

// function onlyInThisMillennium(_movies) {
//   let array = []
//   for (let i = 0; i < _movies.length; i++) {
//     _movies[i].Year = parseInt(_movies[i].Year)
//     if (_movies[i].Year >= 2000) {
//       array.push(movies[i])
//     }
//   }
//   return array
// }

// console.log(onlyInThisMillennium(movies))

// /* Ex.16
//   Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
// */

// function getMovieById(_imTheId) {
//   for (let i = 0; i < movies.length; i++) {
//     if (_imTheId === movies[i].imdbID) {
//       return movies[i]
//     }
//   }
// }

// console.log(getMovieById("tt1731697"))

// /* Ex.17
//   Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
// */

// function sumAllTheYears(_movies) {
//   let sum = 0
//   for (let i = 0; i < _movies.length; i++) {
//     _movies[i].Year = parseInt(_movies[i].Year)
//     sum += _movies[i].Year
//   }
//   return sum
// }

// console.log(sumAllTheYears(movies))

// /* Ex.18
//   Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
// */

// let newString = "Avengers"

// function searchByTitle(_imHiddenInTheTitle) {
//   let newArrayFullOfMovies = []
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].Title.includes(newString)) {
//       newArrayFullOfMovies.push(movies[i])
//     }
//   }
//   return newArrayFullOfMovies
// }

// console.log(searchByTitle(newString))

// /* Ex.19
//   Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
//   this object should contain an array called "match", made by all the movies which contain the given string in the title,
//   and another array "unmatch" with all the remaining ones.
// */

// function searchAndDivide(_imString) {
//   let match = []
//   let unmatch = []
//   for (let i = 0; i < movies.length; i++) {
//     if (movies[i].Title.includes(newString)) {
//       match.push(movies[i])
//     } else {
//       unmatch.push(movies[i])
//     }
//   }
//   var obj = {
//     match:  match,
//     unmatch: unmatch
//   }
//   return obj
// }

// console.log(searchAndDivide(newString))

// /* Ex.20
//  Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
// */

// function removeIndex (_index) {
//   delete movies[_index]
//   return movies
// }

// console.log(removeIndex(3))

// // [EXTRAS] JS Advanced

// /* Ex.21
// Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
// Example:
// halfTree(3)
// *
// **
// ***
// */

// /* Ex.22
// Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
// Example:
// tree(3)
//   *
//  ***
// *****
// */

// /* Ex.23
// Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
//  */

// function isItPrime(_number) {
//   for(let i = 2; i < _number; i++)
//     if(_number % i === 0) return false;
//   return _number > 1;
// }

// console.log(isItPrime(7001))
