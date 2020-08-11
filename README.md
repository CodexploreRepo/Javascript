# Javascript

Javascript NoteBook for Beginners from CodeXplore

# Table of contents

- [Table of contents](#table-of-contents)
- [Basics](#basics)
- [Document Object Model](#document-object-model)
- [FAQ](#faq)



# Basics 

1. **Variables**
```Javascript
var firstName = "Code";
var lastName = "Xplore";
```
2. **Control Flow**<br>
3. **Functions**
    - **Function Expression**
    ```Javascript
    //Function Expression: Anonymouse Function, meaning function has no name
    //Only able to access via variable "sayBye"

    var sayBye = function () {
      console.log("Bye");
    };
    ```
4. **Array**
5. **Object**
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


[(Back to top)](#table-of-contents)

# FAQ
1. Why JQuery is not popular nowadays?
    JQuery has 1 issue, it make the code imperative => you have to tell the program what to do 1-by-1. When website get scaled => JQuery becomes a issue as 1 action depends on other actions, and depends on another action => more bugs. 


