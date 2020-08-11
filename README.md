# Javascript

Javascript NoteBook for Beginners from CodeXplore

# Table of contents

- [Table of contents](#table-of-contents)
- [Basics](#basics)
- [Document Object Model](#document-object-model)
- [FAQ](#faq)



# Basics 

1. **Variables: var, let, const**
    - **var:** the scope is quite similar to let; but a little bit confusing, so not recommend to use
    - **let (ES6):** the scope is only within {}
    - **const (ES6):** cannot be re-assigned the variable; use to assign for variables which we will not re- like: Function; Object<br>
    cannot be re-assigned means: const a = {}; a = 1; => Error <br>
    const a = function() {}; a is a function; const a: to make sure nobody assign something else to function a
	```Javascript
	var firstName = "Code";
	var lastName = "Xplore";

	let experience = 100;

	const a = function() {
		console.log("Hello World");
	};
	```
2. **Control Flow**<br>
    - **Ternary Operator**
    ```Javascript
    condition ? expr1: expr2;
    ```
    - **Switch**
    ```Javascript
	switch(expression) {
	  case x:
	    // code block
	    break;
	  case y:
	    // code block
	    break;
	  default:
	    // code block
	}
    ```
3. **Functions**
    - **Function Expression**
    ```Javascript
    //Function Expression: Anonymouse Function, meaning function has no name
    //Only able to access via variable "sayBye"

    var sayBye = function () {
      console.log("Bye");
    };
    sayBye()
    ```
4. **Array**
5. **Object**

```
const user = {
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

//ES6 Feature for Objects:

//Object Destruction:

const { name, hobby } = user

//Object Construction:

const a = "Simon";
const b = true;
const c = {};
const obj = {a,b,c}
```
6. **Loop: for, while, forEach**
     - **forEach**
     ```Javascript
      todos.forEach(function (todo, index) {
          todo = todo + " at index: " + index;
          console.log(todo);
      });
    ```
[(Back to top)](#table-of-contents)

# Document Object Model 
1. **DOM Selectors**:

```JavaScript
document.getElementsByTagName("h2")
document.getElementsByClassName("second")
document.getElementById("first")

document.querySelector("h1") //Only select First item
document.querySelectorAll("h1")
```
   **Parent and Children Selector**

```JavaScript
document.querySelector("li").parentElement
document.querySelector("ul").children
```

2. **DOM Change innerHTML textContent**:
```JavaScript
var h1Tag = document.querySelector("h1")
h1Tag.innterHTML = "Welcome to CodeXplore"

var css = document.querySelector("h3");
css.textContent = body.style.background + ";";

```

3. **DOM Event Listener**
```JavaScript
var button = document.getElementsByTagName("button")[0];

//Method 1:
button.addEventListener("click", function () {
	console.log("CLICK !!!!");
});
//Method 2:
//addListAfterClick = Callback function (without added ()):
//the function now automatically gets run (auto-gets added the ()) every time the click happens. So we are passing a reference to the function without running it (without added ()).
button.addEventListener("click", addListAfterClick);

//Method 3:
button.onclick = addListAfterClick;
```

**Method 4: Add Event Listener directly in HTML Tag**<br>
Using: onclick, onsubmit, oninput in HTML tags
```HTML
<button onclick="myFunction()">Click me</button>
<input oninput="setGradient()" class="color1" type="color" name="color1" value="#00ff00">

```
[(Back to top)](#table-of-contents)

# FAQ
1. **Why JQuery is not popular nowadays**?<br>
    JQuery has 1 issue, it make the code imperative, you have to tell the program what to do 1-by-1. When website get scaled, jQuery becomes a issue as 1 action depends on other actions, and depends on another action, more bugs. 


