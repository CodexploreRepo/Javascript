//<------JavaScript: Variables------->

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then
// check them by copying them and running it in the console yourself
// line by line

// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "Code";
var lastName = "Xplore";

// create a variable that holds the answer // of "firstName" + " " + "LastName"
var fullName = firstName + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
// console.log(b + a); // 23

// What is c equal to?
var c; // undefined

//<------JavaScript: CONTROL FLOW------->

if (firstName === "Code" && lastName === "Xplore") {
  console.log("Hi, " + fullName);
} else if (!(firstName === "Code") || lastName === "Youtube") {
  console.log("Chao mung cac ban den vs Youtube Channel");
} else {
  console.log("I dont know who are you :(");
}

//<------JavaScript: FUNCTION ------->

function sayHello() {
  console.log("Hello Cac Ban");
}
//Function Expression: Anonymouse Function, meaning function has no name
//Only able to access via variable "sayBye"

var sayBye = function () {
  console.log("Bye");
};

// sayBye();

//<------JavaScript: ARRAY ------->

var animals = ["tiger", "cat", "bear", "bird"];
//Array Methods: shift(), pop(), push(), concat()
// animals.shift(); //["cat", "bear", "bird"]
// animals.pop(); // ["bear", "bird"]
// animals.push("elephant") // ["bear", "bird", "elephant"]
// animals.concat("bee", "deer") //["bear", "bird", "elephant", "bee", "deer"]
// console.log(animals[1]);
var mixedList = ["apple", 3, undefined, true, function apple() {
  console.log("apple");
}];
//2D Array
var arrayInArray = [
  ["tiger", "cat", "bear", "bird"],
  ["meat", "mouse", "honey"],
];
//Access the second array's the third element
// console.log(arrayInArray[1][2]); //honey

//<------JavaScript: OBJECT ------->

var user = {
  name: "CodeXplore",
  age: 25,
  //Array inside Object
  hobby: ["Footbal", "Swimming"],
  isMarried: false,
  //Method inside Object
  shout: function () {
    console.log("TD, I love you");
  },
};

//Access Object's Property:
// console.log(user.name);

//Access Object's Method
// user.shout();

//Add more property to Array
user.favouriteFood = "Hamburger";
// console.log(user);

//<------JavaScript: LOOP ------->

var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];
//FOR Loop
for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
  // console.log(todos[i]);
}

//forEach

todos.forEach(function (todo, index) {
  todo = todo + " at index: " + index;
  console.log(todo);
});

//WHILE Loop
var counterOne = 10;
while (counterOne > 0) {
  //   console.log(counterOne);
  counterOne--;
}
