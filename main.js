let addToButton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addToButton.addEventListener('click', function(){
var paragraph = document.createElement('p'); 
// with every click on button a new para is created

paragraph.classList.add('para-styles'); // adding class to the new para

paragraph.innerText = inputField.value;// the value of the input field is added to the paragraph


toDoContainer.appendChild(paragraph); // the new para is appended to the todocontainer

inputField.value = ''; // the input field is emptied after every click

paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through'; // when the paragraph is clicked the text is strikethrough
});

paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph); // when the paragraph is clicked the text is strikethrough
});

})