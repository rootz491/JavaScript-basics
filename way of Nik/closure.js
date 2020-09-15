// closure is the rule that we can access and user variables and methods of outer function's scope.

//  Lexical enviroment: is where the data is stored and as we can see it's also the place of origin of inner function, from where we are using the outerFunction variables (DATA) to perform specific work with it.


// it is much like, taking help from older siblings.

//  LEXICAL SCOPING     ----------------------------------------------------------------------------->

function outerFunction() {
    //  let name = 'karan';             //  this is correct.
    function innerFunction() {
        console.log({name});                    //  using variable in inner function.
    }
      let name = 'karan';               //  But this one is fine cause although we've used name variable in function but fact that we haven't called it yet, so we have still time to initialize it before calling and everything work just fine.
    innerFunction();
    //  let name = 'karan';             //  this is wrong cause we are first using it in innerfunction and then declaring it.0
}

outerFunction();

//  CLOSURES    ------------------------------------------------------------------------------------->

function outerFunction2() {             //  So here this is outer function, where 'name' variable is declared.
    let name = 'Nik';                   //  That's the variable.
    function innerFunction2() {         //  this is inner function, where we'll use that 'name' variable.
        console.log({name});            //  using the variable's value.
    }
    return innerFunction2;              //  returning the innerFunction() instead of just calling it.         < IMPORTANT >
}

let foo = outerFunction2();             //  Here, reference of innerFunction() is given to function 'foo'.
foo();                                  //  using variable of outerFunction which is used in innerFunction which is referenced to 'foo' function. and now calling it and using that variable.

//--------------------------------------------------------------------------------------------------->

function outerFunction3(firstName) {                //  this is outerFunction here, taking 'first name' as an argument
    return function innerFunction3(lastName) {      //  this is return statement of outerFunction, which is returning innerFunction which also takes an argument 'last name'.
        console.log(`${firstName} ${lastName}`);    //  So now, in innerFunction, we can use both the arguments of outerFunction and innerFunction and create something with it.
    };  
}

let myName = outerFunction3('Karan');               //  myName is instance that reference to innerFunction because outer function is returing it as a return value, so it takes innerFunction's reference and now we can use it.
let myFriendName = outerFunction3('Nikhil');        //  same with this one also.

myName('Sharma');                                   //  Here as i know that myName is just a reference to innerFunction that takes an argument to successfully call it. 
myFriendName('Swain');                              //  so simply we are using variable from argument of outerFunction, innerFunction thought these instance with are not anywhere near the scope of innerFunction. 

                        //  also here outerFunction is working as FUCNTION FACTORY, now we can create as many new function as we want.

//--------------------------------------------------------------------------------------------------->



//  changing the size of font in the page using closure technique.

function generateSize(size){ 
    return function() {
        document.querySelector('#heading').style.fontSize = size + 'px';
    };
}

let size40 = generateSize(40);
let size60 = generateSize(60);
let size80 = generateSize(80);


let button1 = document.getElementById('size-40');
let button2 = document.getElementById('size-60');
let button3 = document.getElementById('size-80');

/*
button1.addEventListener('click', size20);
button2.addEventListener('click', size30);
button3.addEventListener('click', size40);
*/

button1.onclick = size40;
button2.onclick = size60;
button3.onclick = size80;