/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
const test = "assign a string";

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20;

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should 
        be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 20);
console.log(random);
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: 
    name = your name, surname = your surname, age = your age.
*/
const me = { name: "Abnte", surname: "Nega", age: 26 };

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming 
   languages you know right now.
*/
me.skills = "javascript ";

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
delete me.skills;

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice(n) {
  let num;
  if (n <= 6 || n >= 1) {
    num = Math.floor(Math.random() * n);
  }
  console.log(num);
}
dice(5);

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the 
    biggest one.
*/
whoIsBigger = (x, y) => (x > y ? x : y);
console.log(whoIsBigger(12, 6));

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array 
    with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
function splitMe(x) {
  console.log(x.split(" "));
}
splitMe("I love coding");

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the 
    boolean value is true it should return the string without the first letter, otherwise it should 
    remove the last one from it.
*/
function deleteOne(x, boolean) {
  let str = x.split(" ");
  let newstr = [];
  for (i = 0; i < str.length; i++) {
    if (boolean) {
      newstr.push(str[i].slice(1));
    } else {
      newstr.push(str[i].slice(0, str[i].length - 1));
    }
  }
  console.log(newstr.join(" "));
}
deleteOne("it should return the string without the first letter", false);
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing
    all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
function onlyLetters(x) {
  let str = x.replace(/\d+/g, "");
  console.log(str);
}
onlyLetters("I have 4 dogs");

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if 
   the string is a valid email address.
*/
function isThisAnEmail(x) {
  const emailexp = /\S+@\S+\.\S+/;
  console.log(emailexp.test(x));
}
isThisAnEmail("a@gmail.com");

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
function whatDayIsIt() {
  let date = new Date().getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(weekdays[date]);
}
whatDayIsIt();
/* Ex.8
Write a function called "rollTheDices" which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a "sum" property holding the sum of all values extracted
and a "values" array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
    sum: 10
    values: [3, 3, 4]
}
*/
// function rollTheDices(number) {
//   let array = [];
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     array.push(Math.floor(Math.random() * 10));
//     sum += array[i];
//   }
//   var obj = {
//     sum: sum,
//     values: array,
//   };
//   console.log(obj);
// }
// rollTheDices(3);

// function rollTheDices() {}
// dice;

/* Ex.9
Write a function called "howManyDays" which receives a date as a parameter and should return the 
number of days passed since that date.
*/
function howManyDays(date) {
  let days = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 86400000
  );
  console.log(`${days} days has passed since ${date}`);
}
howManyDays("11/12/1980");

/* Ex.10
Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false
otherwise.
*/
function isTodayMyBirthday(x) {
  let bd = new Date(x).getDate();
  let bm = new Date(x).getMonth();
  let date = new Date().getDate();
  let month = new Date().getMonth();
  if (bd === date && bm === month) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isTodayMyBirthday("08/17/1994");
// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns
    the given object after deleting its property named as the given string.
*/

function deleteProp(x, y) {
  let delobj = delete x["y"];
  console.log(delobj);
}

let obj = {
  Title: "Avengers: Endgame",
  Year: "2019",
  imdbID: "tt4154796",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
};
deleteProp(obj, "Title");

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end
     of this file.
*/

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array 
    provided at the end of this file.
*/
function countMovies(x) {
  console.log(`${x.length} movies`);
}

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies 
    provided in the array at the end of the file.
*/
function onlyTheTitles(obj) {
  let movieTitle = [];
  for (let i of obj) movieTitle.push(Object.values(i.Title).join(""));
  console.log(movieTitle);
}
onlyTheTitles(movies);

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this 
   millennium.
*/
const onlyInThisMillennium = function (x) {
  let total = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i]?.Year >= 2000) {
      total.push(x[i]?.Title);
    }
  }
  console.log(new Set(total));
};
onlyInThisMillennium(movies);

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie 
    with the given id.
*/
function getMovieById() {
  for (let i = 0; i < movies.length; i++) {
    console.log(Object.values(movies.imdbID));
  }
}
console.log(getMovieById(""));
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies 
    provided have been produced.
*/
function sumAllTheYears(obj) {
  let movieYear = [];
  let yearSum = 0;
  for (let i of obj) movieYear.push(Object.values(i.Year).join(""));
  for (let i of movieYear) console.log(movieYear[i]);
  console.log(yearSum);
}
sumAllTheYears(movies);
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the 
    movies which contain that string in the title.
*/
function searchByTitle(x) {
  if (Object.values(movies.Title).includes("x")) {
    console.log(bject.values(movies.Title));
  }
}
searchByTitle("Lord");
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an 
    object;this object should contain an array called "match", made by all the movies which contain 
    the given string in the title,and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies 
   array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half 
  tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
function halfTree(x) {
  for (let i = 0; i <= x; i++) {
    console.log("*".repeat(i));
  }
}
halfTree(5);

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with 
  the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the 
  given number is a prime number.
*/

function isItPrime(x) {
  if (x < 2) {
    console.log(`${x} is not a prime number`);
  }

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      console.log(`${x} is not a prime number`);
    }
  }
  console.log(`${x} is a prime number`);
}
isItPrime(13);
