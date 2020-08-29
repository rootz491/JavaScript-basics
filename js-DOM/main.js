//  Examine DOCUMENT OBJECT
//console.dir(document)
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "karan";
console.log(document.title);

console.log(document.all);  //  all tags in document
console.log(document.all[10]);

//  one way to change   {dont do this way}
//  document.all[10].textContent = "Hello";

console.log(document.forms);    //  collection of FORMS
console.log(document.links);    //  collection of LINKS
console.log(document.images);   //  collection of all images we have!
*/



// GET ELEMENT BY ID

console.log(document.getElementById("header-title"));
//  OR
let headerTitle = document.getElementById("header-title");
console.log(headerTitle);
//  changing content
headerTitle.textContent = "karan"   //  one way to access text of tag
headerTitle.innerText = "Hello World!"  //  another way to do the same

//  try not to use textcontent, it disrespects styling i.e. it ignore display none.
//  headerTitle.innerHTML = "<h3>i'm back</h3>"     //  add HTML inside tags.

//  change perticular peroperty of tags by calling them by ID
document.getElementById('main-header').style.border = "8px solid blue";



//  getElementsByClassName
let items = document.getElementsByClassName('list-group-item');
console.log(items);

items[1].style.fontWeight = 'bold';
items[1].innerText = "karan sharma";

for(let i=0; i<4; i++)
    items[i].style.backgroundColor = '#f5f5f5';






    //  getElementByTagName

let item = document.getElementsByTagName('li');

for(let i=0; i<4; i++)
    item[i].style.backgroundColor = 'lightgrey';




//  querySelector   //  only grab the first one!

let header = document.querySelector('#main-header');
header.style.borderBottom = '10px solid lightblue';
var input = document.querySelector('input');
input.value = "hello world";

//  select elements by attribute
var submit = document.querySelector('input[type = "submit"]')   //  detailed selectionn
submit.style.backgroundColor = 'blue';

//  select elements by sudo-classes.
let listItemLast = document.querySelector('.list-group-item:last-child');
listItemLast.style.border = '4px solid black';

let listItemSecond = document.querySelector('.list-group-item:nth-child(2)');
listItemSecond.style.border = '4px solid black';

//  querySelectorAll    //  grab all of it's type.
let listEven = document.querySelectorAll('li:nth-child(even)');
let listOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(listEven);
for(let i=0; i<2; i++) {
    listEven[i].style.backgroundColor = 'lightgrey';
    listOdd[i].style.backgroundColor = 'darkgrey';
}


//----------------------------PART 2--------------------------------


//  PARENTS

//   SELECTING PARENT NODE
var itemlist = document.querySelector('#items');
//parent node property
console.log(itemlist)
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = 'lightgreen';
//  parent of parent
console.log(itemlist.parentNode.parentNode);

//  PARENT ELEMENT {basically same as parentNode}
itemlist.parentElement.style.backgroundColor = '#f9f9f9';




//  CHILDREN

//  childNode OR children
console.log(itemlist.childNodes);   // {TRY NOT to use it}
//children
console.log(itemlist.children);     //  use it instead!
itemlist.children[1].style.outline = '5px solid green';

//  firstchild OR lastElementChild
console.log(itemlist.firstChild);        // {dont use} will return line-break
console.log(itemlist.firstElementChild); //  will return actual first chilld
itemlist.firstElementChild.textContent = 'firstElementChild';

//  lastchild OR lastElementChild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'lastElementChild';




//  SIBLINGS

console.log(itemlist.nextSibling)   //  give text node i.e. line break, DONT USE IT
console.log(itemlist.nextElementSibling);    //   select next sibling
itemlist.nextElementSibling.textContent = 'nextElenemtSibling is cool';
//  multiple previousElementSiblings
itemlist.previousElementSibling.previousElementSibling.previousElementSibling.textContent = 'previousElementSibling';


//  CREATE

//  createElement
let newDiv = document.createElement('div');
//  add class
newDiv.className = 'newDivClass';
//  add id
newDiv.id = 'newDivId';
//  add attribute
newDiv.setAttribute('title', 'Hello world');
//  create text Node
let newDivText = document.createTextNode('Hello, World!');
//  add text to div
newDiv.appendChild(newDivText);

//  put element to HTML DOM
let container = document.querySelector('header', '.container');
let h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.color = 'black'
container.appendChild(newDiv);
//  container.insertBefore(newDiv, h1)  {doesn't work for me}

//  create element
let myElement = document.createElement('h1');                   
//  assign some ID or CLASS if you want
myElement.className = 'newElem';                                
//  create text node and add some text
myText = document.createTextNode('this is practice element');   
//  append text node to created element
myElement.appendChild(myText);                                  
//  element is created now add it to DOM.
console.log(myElement)                                          
//  select some place in DOM where you have to place new element
let fellow = document.getElementById('main');                   
//  append new element as child of selected selected element
fellow.appendChild(myElement)                                   
//  add some custom property if you want.   :)                  
myElement.style.border = '3px dotted black';
myElement.style.padding = '.5em';


/*---------------- PART 3 - EVENT LISTENER ------------------*/
/*
var button = document.getElementById('myButton').addEventListener('click', function() {
    console.log('karan')
})
       // OR

var button = document.getElementById('myButton').addEventListener('click', buttonClick());

function buttonClick() {
    document.getElementById('header-title').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = 'grey';
}




var button = document.getElementById('myButton').addEventListener('click', buttonClick);

function buttonClick(e) {
 //   console.log(e.target.id);         //  name of iD of element
 //   console.log(e.target.className);  //  name of class
 //   console.log(e.target.classList);  //  list of classes used in element

 //   console.log(e.type);
 //   console.log(e.clientY);     //  mouse position on Y axis respect to whole windows.
 //   console.log(e.clientX);
 //   console.log(e.offsetX);     //  position of mouse respect to element itself.
 //  console.log(e.offsetY);

    console.log(e.altkey);
    console.log(e.ctrlkey);
    console.log(e.shiftkey);
}
*/


//  type of events

var button = document.getElementById('myButton');
button.addEventListener('click', runEvent);   //  single click
button.addEventListener('dblclick', runEvent)   //  double click
button.addEventListener('mousedown', runEvent); //  as soon as click, event will triger. NO WAIT!
button.addEventListener('mouseup', runEvent);   //  when we click and the release button,  then event will trigger.

var box = document.querySelector('#box');
//box.addEventListener('mouseenter', runEvent);   //  whenever we take mouse into box, doesn't matter if we are in it's child or not. as long as we are inside main element, event will trigger.
//box.addEventListener('mouseleave', runEvent);   //  whenever we take mouse out of box, event will triger.
//box.addEventListener('mouseover', runEvent);    //  it is specific to the element it's used on, not even on it's child. it'll will trigger when mou0se is only over the main element not it's children.
//box.addEventListener('mouseout', runEvent);     //  if we take mouse out of box or even if we take it over any of its child, then event will trigger.

//box.addEventListener('mousemove', runEvent);

let output = document.querySelector('.output');

function runEvent(e) {
   console.log('Event Type: ' + e.type);
   //output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>'

   //box.style.backgroundColor = 'rgb(' + e.offsetX*Math.random() + e.offsetX + ', ' + e.offsetY*Math.random() + ',' + ((e.offsetX + e.offsetY)/2)*Math.random() +')';

   output.innerHTML = '<h5> ' + e.target.value + '</h5>';
   e.preventDefault();
}


//  input form data capture.


let inputForm = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

inputForm.addEventListener('keydown', runEvent);    //  used with input type tags and event trigger whenever key pressed from keyboard.


inputForm.addEventListener('keyup', runEvent);      //  trigger when release the key


inputForm.addEventListener('focus', runEvent);  //  focus on some element.


inputForm.addEventListener('input', runEvent);      //  anything you do with input, it will triger


form.addEventListener('submit', runEvent);













