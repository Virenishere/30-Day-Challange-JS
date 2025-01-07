//Day 10 : Event Handling
//task 1: Add a click event listener to a button that changes the text content of a paragraph.

document.querySelector('button').addEventListener('click', function(){
    document.querySelector("p").innerText = "Hey! Text changed...";
})

// task 2: Add a double-click listener to an image that toggles its visibility.

document.getElementById('imageWrapper').addEventListener('dblclick', function() {
    var image = document.getElementById('hiteshsir');
    if (image.style.display === "none") {
        image.style.display = "block";  // Shows the image
    } else {
        image.style.display = "none";   // Hides the image
    }
});
// task 3: Add a mouseover event listener to an element that changes its background color.

document.getElementById("bgColor").addEventListener('mouseover', ()=>{
    document.querySelector('#bgColor').style.backgroundColor = "aqua"
})

// task 4: Add a mouseout event listener to an element that resets its background color.

document.getElementById('bgColor').addEventListener('mouseout', ()=>{
    document.querySelector('#bgColor').style.backgroundColor= "";
})

// task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

document.querySelector('#keydown').addEventListener('keydown',(e)=>{
    console.log(e.key);
})

// task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

document.querySelector('#keyup').addEventListener('keyup', (e)=>{
    console.log(e.key);
})

// task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.querySelector('#myForm').addEventListener('submit', (e)=>{
    e.preventDefault();

const formData =  new FormData(e.target);
const data= Object.fromEntries(formData.entries());

console.log(data);
})

// task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.getElementById('mySelect').addEventListener('change', function(){
    const selectedValue = this.value;
    document.getElementById('optVal').textContent = `Selected Value: ${selectedValue}`;
})

// task 9: Add a click event listener to a list that logs the text context of the clicked list item using event delegation.

document.getElementById('myList').addEventListener('click', (e)=>{
   if(e.target.tagName === 'LI'){
    console.log(e.target.textContent);
   }
})

// task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const addItemBtn = document.getElementById('addItemBtn');

const dynamicList = document.getElementById('dynamicList'); 


function addNewBtn(){
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${dynamicList.children.length +1}`;
    dynamicList.appendChild(newItem);
}

dynamicList.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        alert(`Clicked item content: ${e.target.textContent}`);
       }
});

addItemBtn.addEventListener('click', addNewBtn);