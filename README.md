# Javascript

Javascript NoteBook for Beginners from CodeXplore

# Table of contents

- [Table of contents](#table-of-contents)
- [Basics](#basics)
- [Document Object Model](#document-object-model)



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

