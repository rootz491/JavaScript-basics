// Object keyword


//  1.  Object.create(obj);     creates a new object, using an existing object as the prototype of the newly created object.

let ob1 = {
    truth() {
        console.log('existance is a pain');
    }
}

let ob2 = Object.create(ob1);

ob2.gun = 'colt 45';
ob2.sword = 'french';

// 2.   Obect.entries(obj);     returns an array of given object's own enumerable key value pairs

console.log(Object.entries(ob2));

for (const [key, value] of Object.entries(ob2)) {
    console.log(`${key}  ->  ${value}`);
}

console.log('\n\n'); //  for...in  also loops over properties in object's prototype chain.

for (const key in ob2) {
    console.log(`${key}  ->  ${ob2[key]}`)
}

console.log('\n\n');

//  3.  Object.keys();   return array of keys

console.log(Object.keys(ob2));

//  4.  Object.values();

console.log(Object.values(ob2));

//  QUESTIONS
console.log('\n\n');

/*
1. Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj, sum = 0) {
    //Object.values(obj).map(val => sum+=val);
    // for (const val of Object.values(obj))   sum += val;
    // return sum;
    return Object.values(salaries).reduce((a, b) => a + b);
}
  
console.log( sumSalaries(salaries) );

/*
2. Write a function count(obj) that returns the number of properties in the object:
*/

let user = {
    name: 'John',
    age: 30
};

function count(obj, num = 0) {
    // for (const prop of Object.keys(obj))    num++;
    // return num;
    return Object.values(obj).length;
}

console.log(count(user));



//  Object.fromEntries(array)
console.log('\n\n');


let users = {
    'harry':    1,
    'sheno':    2,
    'jerry':    3,
    'naruto':   4
}

const userList = Object.entries(users);
console.log(userList);

const userObj = Object.fromEntries(userList);

console.log(userObj);