# text-Box
This is a simple HTML and JavaScript code that allows a user to add paragraphs to a webpage.

hosted Link- https://kmsarikasingh.github.io/text-Box/
# HTML
The HTML code creates a simple webpage with a text input, a button, and a div to hold the paragraphs.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TextBox</title>
</head>
<body>
    <div>
        <input type="text" id="tex">
        <button id="button">Add</button>
        <div id="para"></div>
    </div>
    <script src="element.js"></script>
</body>
</html>
```
# JavaScript
The JavaScript code adds a new paragraph to the webpage when the "Add" button is clicked.

```
let button = document.getElementById('button');
const text = document.getElementById('tex');
const para = document.getElementById('para');
button.addEventListener('click', ()=>{
    const text2 = text.value;
    const para2=document.createElement('p');
    para2.textContent = text2;
    para.appendChild(para2);
    text.value='';

})
```
