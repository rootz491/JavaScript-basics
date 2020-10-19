                    //  HOISTING

// variables
                    
// console.log(name);          //  if we declare variable with 'var' and then use it before line of decaration, will throw 'undefined'
                            //  but if we do same with variable -> 'let' then it will throw big error.

// console.log(myName);     //  will throw an 'Error'.

// console.log(var1);       //  again using 'const' before defining will throw an error

var name = 'karan';             
let myName = 'someone';
const var1 = 123;


//  functions

// whoAmI(name);                   //  same, as function is defined in old way (using keyword 'function') so it throws an 'undefined'

// whoIs(myName);               //  it throws an 'Error'.

// anotherFn();                 //  again it will throw an error.

function whoAmI(name) {         //  this is function declaraiton. so it will move to the top.
    console.log(name);
}

let whoIs = myName => {         //  this is variable declaraiton
    console.log(myName);
}

var anotherFn = function() {    //  this is variable declaraiton
    console.log(1337);
}  


            //  IIFE (immidiately invoked function expressions)         ????????

//      (function() {
//          var name = 'karan';
//      })();


            //  GLOBAL SCOPE


var myAge = 18;

function sayName() {
    console.log(myName);
    let myAge = 20;         //  if we remove this, then function will look for age in outer space and diplay -> 18

    function sayAge() {
        let myAge = 10;
        console.log(myAge);     //  this is using closest myAge variable and display it.
    }
    sayAge();
    console.log(myAge);         //  it will search of variable in same scope and if not found, then move to upper scope BUT it wont go deeper into child scope to look for variable.
}

// sayName();
// console.log(myAge);             //  same here, it will just search in  parallel if not found here, then show error.






            //  CALLBACK


const greetings = (name, fn) => {               //  synchoronous callback
    console.log(`Welcome, ${name} !!!`);
    fn();                                       //  callback called 
}



console.log('before');

setTimeout(callback, 2000);                     //  asynchoronous callback so other code will run as it is. 

console.log('after');



function callback() {
    console.log('hii im callback');
}

// greetings(myName, callback);


        //      promises, async await.


//      async function getData() {
//          let promise = new promise((resolve, reject) => {
//              setTimeout( () => resolve('done'), 2000);
//              reject('bad timing');
//          });
//          let result = await promise;
//          console.log(result);
//      }

//      getData();
