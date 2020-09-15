//alert("you're PWNed!")

/*
    Variables
*/

let name = 'karan';         // string
let rollno = 2101787;       // number
let coder = true;           // boolean
let variable;               // undefined
let another = null;         // null

console.log(name, rollno, coder, variable, another);

/*
    functions
*/

function first(text) {
    const upper = text.toUpperCase();
    console.log(upper + ' is best');
}

first(name);

const second = function() {
    console.log('this is second function !');
}

second();

const third = () => {
    console.log('this is third function !');
}

third();

// string concatination

console.log('this is ' + name + ' doing some string concatination on Js')

console.log(`just normal stuff by ${name}`)

const combined = name + rollno;
console.log(typeof(combined))
console.log(combined)

let myPet = 'seahorse';
console.log(`My favorite animal is the ${myPet}.`);

/*
    if() conditionals
*/

const age = 10;
console.log(age);
if (age>18) {
    console.log(`welcome dude!`);
}
else if (name === 'karan') {
    console.log(`${name}, wow big guy here!`)
}
else {
    console.log('back-off little punk');
}

if(name === 'karan' || age === 18) {
    console.log(`hey, i know you, maybe ...`);
}

/*
    ARRAY
*/

const schedule = ['karan', 'komal', 'sans', 'mom', '<3']
console.log(schedule); 
console.log(schedule[0], schedule[4], schedule[2])

// to add new elements to array

schedule.push('dad');
console.log(schedule);

// remove last element from array

schedule.pop();
console.log(schedule);

// find index by value.

console.log(schedule.indexOf('sans'));
console.log(schedule[2]);

/*
    Object and This
*/

// 1. object

const user = {
    name: 'karan',
    age: 18,
    married: false,
    purchases: ['phone', 'RAM']
};

// 2. This

console.log(this)

/*
    loop
*/

names = ['karan', 'komal', 'ishu', 'monu', 'anku', 'lucky', 'hunny', 'manya']

for(name of names) {
    console.log(name);
}

for(name of names) {
    if('lucky' === name)
        console.log(`${name} : Jerk is still here!`);
}

let loading = 1000;

while(loading) {
    if(loading === 1)
        console.log('here it ends')
    loading -= 1;
}

/*
    DOM manipulation
*/

// i didn't get it. maybe watch it later again!

const deadcall = () => {
    alert("function called through onclick event via function");
}

// strings

var str = "lorem ipsum is grabage";
console.log('\n' + str)
console.log(str.length);
console.log(str.indexOf("is"));
console.log(str.slice(0,-10))
console.log(str.substring(0, 12));
console.log(str.replace("is", "was"));












