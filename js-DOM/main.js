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