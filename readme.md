# JavaScript -> True path
    
    closure 
    hoisting 
    scope
    
    Array 
    various array method : 
    pop push shift unshift splice slice toString join sort reverse etc...(bohot sare he mdn me jake dekh har ek method and practice those )
    spread operator
    
    Object
    creating object by literals or by object constructor or different methods
    functions/methods inside objects 
    optional chaining 
    concatination of objects
    function.prototype methods
    accessing objects by key, value and object.entries
    call(), apply(), bind methods
    
    functions 
    functions and objects (class by es5 methods)
    callback functions 
    default parameters 
    generators
    
    try-catch 
    
    Time Intervals : 
    settimeout setinterval etc...
    
    then advance stuffs later .............
    
    And Now Dom 
    
    accessing Dom elements
    children/parent nodes relation
    creating / adding  new dom elements 
    various js methods like for removing class from an elemen or adding a class or toggle etc ... search for it MDN is the place ..
    Event Listeners click drag drop etc ..... 
    
    Ye sab toh seekkhne ke liye topics hogaye 
    beech beech me padha bhi kar kuch aur like 
    changing object to array kese karte he ya nodlist to arraay ye sab 
    instagram me follow kar devs ko twitter me bhi tidbits vagera milte rahenge and ha 
    
    fir baad me dom me advance stuff seekhna like 
    promise or fetch or ajax etc ....

## Domains:
    https://rootz491-users.netlify.app/ 
    https://first-app-491.web.app/

## topics:  
    
    * Beginning with:
    1.  variables
    2.  functions ( and types )
    3.  string & concatenation -> ${magic}
    4.  if else conditionals
    5.  Array
    6.  Object and This
    7.  loop
    8.  DOM manipulation (little bit)



## note: 
    
    1.  == can be used to check for equality, but we use === to strict typeCheck to ensure that type and value, both are same.
    2.  'this' refers to window object.
    3.  cannot compare objects.
    4.  var str = "karan";                   // type : string
        var str = new string("karan");       // type : object
    5.  index returning function returns -1 if not found what's looking for.
    6.  indexOF() and search() are NOT same/equal.
    7.  substring() is similar to slice(), difference is substring() doesnot take negative parameters.
    8.  substr() is similar to slice(), The difference is that the second parameter specifies the length of the extracted part.
    9.  (condition)?(true):(false); is a ternary operator.
    10. document.getElementsByTagName("h1")[0].innerHTML="HELLO"; is to change the content of first h1 tag.
    11. document.getElementsById("demo").style.display="none"; is to change the css property called display of element whose ID is "demo".
    12. document.getElementsByClassName("test")[0].innerHTML="hello" is to change content of element with className: "test", first element.
    13. document.getElementById("image").src="abc.jpeg"; is to change img source of img element with Id: "image".   {attribute change}
    14. document.getElementById("demo").addEventListener("click", myFunction); is to add "onClick" event listener using given tags.
    15. Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.
    16. Using closures in this way provides benefits that are normally associated with object-oriented programming. In particular, data hiding and encapsulation.
    17. typeof of javascript object's properties is always STRING, even if it's a string.

## methods: BASICS
    
    *   text.length;                // returns length of text
    *   text.indexOf("karan");      // return index of first occurence of text.
    *   text.lastIndexOf("is", 15); // searches backwards means if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
    *   text.search("karan");       // search in a string for a string
    *   text.slice(0,-10);          // take slice from string  
    *   text.substring(0,12);       // almost similar,  no -ive values.
    *   text.substr(7,10)           // 1st arg is index no. & 2nd arg is size to extract.
    *   text.replace("from", "to"); // to replace some text from string.
    *   text.toUpperCase();         // to convert string to upper case.
    *   text.toLowerCase();         // to covert string to lower case.
    *   text.trim();                // removes whitespace from both sides of a string
    *   object.hasOwnProperty();    //  takes property name as argument and returns whether that property belongs to object or not using boolean (T/F)
    *   parseInt(str, radix);       //  takes input as a sting and radix, converts str into number to the base radix.
    *   Math.random();              //  Returns a random number b/w 0 and 1, but not 1.
    *   Math.floor(decimal);        //  takes decimal as input and retuns rounded-off interger nearest to it.
    *   Math.max(a,b);              //  find largest of two numbers.
    *   Math.sqrt(x);               //  to find square root of number.
    *   prompt()                    //  method displays a dialog box that prompts the visitor for input.
    *   parseInt(str);              //  convert str into integer
    *   parseFloat(str);            //  convert str into float


## ES6
    
    *   let and const should be used to declare and initialize variables.
    *   const makes a variable as constant, and it is good practice to give name to 'const' variables in upper case.
    *   declare array using 'const', we can't reassign whole array 
        i.e.  const l1 = [2,3,4];
              l1 = [5,6,7];         //  throw an error
              l1[0] = 5;            //  work just fine
              l1[1] = 6;            //  work just fine
              l1[2] = 7;            //  work just fine
    *   Object.freeze(obj1); is a function used to make the object constant meaning that noone can change the properties or data manipulation.
    *   functions :
            old way -
                var fun = function() {
                    return "have fun!";
                }
            ES6 way-
                const fun = () => "have fun!";  // auto return statement
            Also {for functions with arguments}
                const square = a => a*a;        // single argument function
                const add = (a, b) => a+b;      // multiple line argument
                const inc = (a=1, b=1) => a+b;  // assigning default value to arguments.
    *   spread operator (...) is used to spread the array into it's elements.
            uses: 
                ->  Takes input multiple argument as an array to pass through function.
                        const sum = (...args) => args.reduce((a, b) => a+b ,0);
                        //  function to return sum of array of any size.   
                ->  To copy array into another array
                        arr1 = [...arr2];
                        //  copy items of arr2 into arr1.
                ->  To concatinate two arrays together.
                        arr1 = [...arr1, ...arr2];  // concatinate arr2, arr1 into arr1.    
                        arr1 = [...arr2, "coffee", ...arr1]   // can also add your own items while concatinating.
    *   Rest operator (...) looks same as spread operator but work quite opposite, used to combine multiple items into single array.
    *   Destructing assignment is special syntax to extract values from object.
            use:
                *   usage with simple objects.
                const obj = {                           //  common object
                    name: "karan",
                    age: 18,
                    lang: "JavaScript"
                };                                      
                ->  const {name, lang} = obj;           //  extraction of value of item - name, lang from 'obj' object.
                ->  const {name: myName, lang: myLang}  //  extraction of values into different data types.
                *   usage with complex (nested) objects.
                const LOCAL_FORECAST = {                //  nested object
                  yesterday: { low: 61, high: 75 },
                  today: { low: 64, high: 77 },
                  tomorrow: { low: 68, high: 80 }
                };
                ->  const { today: {low: todayLow, high: todayHigh} }; //get 
                it? :)
    
    
    *   array = Object.values(object_name); // copy object values (NOT keys) into Object.
            const arr = Object.values(ob1);
            ->  arr = [value1, value2, ...valueN]
        after making it into array, iterate over the values using 'spread' operator [...arr]
    
        alternative [OLD]
            const something = (obj.value1, ... , obj.valueN) => {//something}
    
    *   const karan = {...person}   //  to make copy of object
        
    *   using SPREAD operator we can spread the list datatype into unique values to pass it as an argument, 
    *   during DESTRUCTURING, we are extracting the values into unique variables rather than passing them as argument. 
            const person {
                name: "karan",
                age: 18,
                job: "Web developer"
            }
        ->  const { name, age, job } = person;
    
    *   Destructing a function is great idea, potentially saving lines of code!
            const fn = ({ name, age, jobTitle }) => { //something }
    *   Destructuring for assigning new name of variable AKA object's property.
            const { oldVar: newVar } = object
            const fn = ({name: fullName, age, job}) = {}  // assigning name within parameter.  
    
    *   filter() to filter-out item by properties on basis of some of it's values.
          ->    const filteredCities = countries.filter(country => country.code === 'IN')
    
    *   restructuring distinct data into an object.
            countries.map(({city, code, longitude, latitude}, index) => (
               <tr key={index}>
                    <td>{city}</td>
                    <td>{code}</td>
                    <td>{longitude}</td>
                    <td>{latitude}</td>
               </tr>
            ))
    
    *   map <data-type> :   is a advanced datatype much like objects, but with some fency functions.
        ->  creating map:   
            1.  const myMap = new map()    OR   //  empty object
            2.  const myself = new map({        //  using object(S)
                    name: "karan",
                    hobby: ["coding", "gaming", "cooking"]
                    address: {
                        country: "India",
                        state: "Uttarakhand",
                        city: "Dehradun",
                        District: "Doiwala",
                        village: "Kaluwala"
                    }
                })                           OR
            3.  const newMap = new Map([        //  using arrays   
                    ['a', 'alpha'],
                    ['b', 'bravo'],
                    ['c', 'charlie']
                ]);
        ->  adding key & values to map:
                myself.set(lang) = ["C", "C++", "Python", "javascript", "Bash"]
        ->  getting key & value from map:
                const myName = myself.get(name)    //  "karan"
        ->  getting all keys ONLY in form of array:
                myself.keys()       //  ["name", "hobby", "address", "lang"]
        ->  getting all values ONLY in from of array:
                myself.values()     //  ["karan", ["coding"..."gaming"], {...}]
        ->  deleting key - value pair from map:
                myself.delete(key)      
        ->  completely clear data from map:
                myself.clear()





## RegEx: Regular expressions
    
    ->  helps to find patterns, 'stringName.test(regex)' returns true if found!
            let myString = "my name is karan";
            let reg = /karan/;
            let result = reg.test(myString);      -->  true
    ->  regex search is case sensetive meaning that, you cannot search for 'Karan' as 'karan'.      -->     false
    ->  search for multiple patterns using OR operator '|'
            let reg = /karan|komal/ -->  returns true if found any one of them.
    ->  search for pattern and extract it. using .match()
            let reg = /karan/
            let result = myString.match(reg); 
    ->  wildcard character or dot '.' lets to search of similar pattens by completing it.
            let reg = /kar./ -> return 'karan' or 'karma' or anyword thats present and starts with 'kar'
            let reg = /.an/  -> return 'pan', 'can', 'karan', or any word thats present and ends with 'an'.
    ->  replace()  is used to find and replace the pattern
            let str = "karan is good guy."
            let regex  = /karan/ig;
            let replaceText = "komal"
            const result = str.replace(regex, replaceText)
                        --> result = 'komal is good guy'
    ->  using '$' sign makes replacement poweful, by allowing to capture the groups and then reuse them. like chaging order of string etc.
            let str = "karan is good guy"
            let regex = "/(\w+)\s(\w+)\s(\w+)\s(\w+)/"
            console.log(str.replace(regex, "$3 $4 $2 $1"))
                ->  "good guy is karan"
    
    ->  FLAGS:
        *   'i' =   ignore the difference b/w uppercase and lowercase.
                let reg = /karan/i;    --> true for 'KARAN' or 'KaraN'
        *   'g' =   To search or extract a pattern more than once.
                let reg = /karan/g;    --> return all karan from string in from of array.
        *   Can also use more than one flag at once like
                let reg = /karan|KOMAL/ig   --> search of all 'karan' and 'komal' is irrespective of upper or lower case.
        *   character classes '[]' =     allow you to define a group of characters you wish to match by placing them inside square brackets.
                let string = "karan is a good uno-handler."
                let reg = /[aeiou]/ig   -> find all word with vowel character.
                let result = string.match[reg]
        *   character set '[a-f]' =  finds words having any of character within this range.
                let reg = /[a-z]/ig     -> find all words from string, flag i,g
        *   character set range includes numbers like [1-9] =
                let string = "k491"
                let reg = /[a-z0-9]/ig  ->  returns ['k', 's', '4', '9', '1']
        *   negated character set '^' = using this with character set, and search with exceptoin, like [^aeiou] means non-vowel characters.
                let reg = /[^0-9]/ig    -> return all character except numbers including white space and ful-stop.
        *   '+' = matches characters that occur one or more times
                let string = "kaaaaraaan"
                let reg = /a+/ig
                let result = string.match(reg)  ->  return ['aaaa', 'aaa']
        *   '*' = matches characters that occur zero or more times
                let string = "kaaAaaaraan";
                let regex = /Aa*/g;
                let result = string.match(regex);   ->  returns ['Aaaa']
        *   lazy match = finds the smallest possible part of the string that satisfies the regex pattern
                let text = "<h1>Winter is coming</h1>";
                let myRegex = /<h.?>/; 
                let result = text.match(myRegex);   -> return ["<h1>"]
        *   caret '^' outside the character set  =  find pattern at beginning.
                let text = "Rick and Morty"
                let regex = /^Rick/
                let result = text.match(regex);     ->  return true
        *   '$' =   search pattern at the end of the screen.
                let regex = /Morty$/    
                let result = reget.test(text);       ->  result true
        *   shorthand =>    '/\w/ig'    is equivalent to    '/[A-Za-z0-9_]+/'
        *   shorthand =>    '/\W/ig'    is equivalent to    '[^A-Za-z0-9_]'
        *   shorthand =>    '/\d/'      is equivalent to    '[0-9]'
        *   shorthand =>    '/\D/'      is equivalent to    '[^0-9]'
    
    ==>    Check for username:
        1) Usernames can only use alpha-numeric characters.
        2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
        3) Username letters can be lowercase and uppercase.
        4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
    
        regex:      let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
                    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    
        *   '\s'    =>  search for whitespace.
        *   '\S'    =>  search for non-whitespace.
        *   quantity specifier '{}' =>  Specify the lower and upper number of patterns with quantity specifiers.
                    let A = "woooooow";
                    let regex = /wo{4,6}w/
                    console.log(A.match(regex))         ->      true
        *   only want a specific number of matches. 
                    let name = "karaaaan"
                    let regex = /kara{4}n/
                            ->  only true for 'karaaaan', having 4 a's
        *   '?'     =>  This checks for zero or one of the preceding element
                        You can think of this symbol as saying the previous element is optional.
                    let name = 'karan'
                    let regex = /karaa?n/i
                            ->  true for both 'karan' and 'karaan'
        *   lookahead '?=...'   =>  just lookahead for specific pattern, but won't match it.
                    let password = "abc123";
                    let checkPass = /(?=\w{3,6})(?=\D*\d)/;
                    checkPass.test(password); // Returns true
        *   name = "karan"
            regex = /k(omal|aran)/i
            regex.test(name)        -> true for komal or karan
    
        =>  string that starts and ends with same vowel.    //  'abcda' is TRUE
                let re =/^([aeiou]).*\1$/;
        



## Javascript DOM:
    
    ->  Fetch elements: 
            *   getElementById('_id_')                      //  unique item
            *   getElementsByClassName('_class_')           //  multiple items
            *   getElementByTagName('li')                   
            *   querySelector('#id OR .class OR tagName')   //  all in one - single
            *   querySelectorAll('same')                    //  all-in-one multiple items
    
            ->  By sudo classes or attributes:
                    *   querySelector('input[type="submit"]')
                    *   querySelector('.class_name:last-child')     //  or :nth-child(3) or 
                    *   querySelector('.class_name:nth-of-type(odd)')
    
            ->  Parent, Children and siblings:
                let item = document.querySelector('#item')
                    *   item.parentNode                 //  PARENT
                    *   item.parentElement              //  similar 
                    *   item.parentNode.parentNode      //  parent of parent
                    *   item.childNode                  //  CHILD
                    *   item.children                   //  return all children as an array
                    *   item.firstElementChild          
                    *   item.lastElementChild
                    *   item.nextElementSiblings        //  SIBLING
                    *   item.previousElementSibling
            
    ->  Changes in elements:
            *   textContent
            *   innerText
            *   innerHTML
            
    ->  Create element:
            *   let newDiv = createElement['div']
            *   newDiv.className = 'anything'
            *   newDiv.id = 'anything'
            *   let newText = document.createTextNode('Hello, World!')
            *   newDiv.appendChild(newText)
            *   let container = docuemnt.querySelector('.container')
            *   container.appendChild(newDiv)
    
    ->  Event Listener:
            *   var button = document.getElementById('header')
            *   button.addEventListener('click', doSomething = (e) => { //body })
    
            ->  Uses:
                    *   e.target.id             //  name of ID
                    *   e.target.className      //  className
                    *   e.target.classList      //  list of classes used in element
                    *   e.type          //  type of event listener
                    *   e.clientX       //  mouse position on X axis with respect to window.
                    *   e.clientY
                    *   e.offsetX       //  mouse position on X axis with respect to current element.
                    *   e.offsetY
                    *   e.altket        //  check if alt key is pressed while trigger eventListener.
                    *   e.crtlkey
                    *   e.shiftkey
    
            ->  Types of events:
                    *   addEventListener('click', function)
                    *   addEventListener('dbclick', function)                                 
                    *   addEventListener('mousedown', function)    
                    *   addEventListener('mouseup', function)   //  when button clicked and then released the buttton, then trigger
                    *   addEventListener('mouseenter', function)    //  whole element included
                    *   addEventListener('mouseleave', function)
                    *   addEventListener('mouseover', function)     //  only triggered element, not even it's chidren
                    *   addEventListener('mouseout', function)      
                    *   addEventListener('keydown', function)   //  capture key when it's pressed, meaning event trigger
                    *   addEventListener('keyup', function)     //  capture key when it's pressed and release, meaning event trigger
                    *   addEventListener('input', function)     //  trigger if anything happened with input.
                    *   addEventListener('focus', function)     //  trigger, if it's focused
                    *   addEventListener('submit', function)    //  trigger, when submit button clicked.
    
                    =>  to capture submit button click event correctly, use so it will no do it's default functtionality, i.e. 'submitting':    e.preventDefault();
                

## ES2020
    
    ->  nullish coalescing operator (??):  logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
            
            var b;
            let c = 45;
            let a = b ?? 45;        //  a = 45, because b is null 



## Advance JavaScript
    
    --> https://dev.to/ryanameri/mastering-hard-parts-of-javascript-callbacks-i-3aj0  
    
    --> high order functions:   funcitons which take another function as input, or return a function.
    
    *    Exercise 1:
            const addTwo = x => x+2;
    
    *   Exercise 2:
            const addS = str => str + 's';
    
    *   Exercise 3:
            const maps = (list, callback) => {
                let newArr = []
                for(let num=0; num<list.length; num++) {
                    newArr.push(callback(list[num]))
                }
                return newArr;
            }
            
            console.log(maps([1,2,3], addTwo))
    
    *   Exercise 4:
            const forEach = (str, callback) => {
              for (let i=0; i<str.length; i++) {
                callback(str[i]);
              }
            }
            
            let alphabet = "";
            const letters = ["a", "b", "c", "d"];
            forEach(letters, function (char) {
              alphabet += char;
            });
            
            console.log(alphabet);      //  "abcd"
    
    *   Exercise 5:
            const mapWith = (array, callback) =>{
              let newArr = [];
              forEach(array, (item) => {
                newArr.push(callback(item));
              });
              return newArr;
            }
            
            console.log(mapWith([1, 2, 3], addTwo));
    
    *   Exercise 6:
            const reduce = (array, callback, initial) => {
              let new_initial = initial ?? array[0];
              forEach(array, (item) => {
                new_initial = callback(new_initial, item);  
              })
              return new_initial;
            };
            
            const nums = [4, 1, 3, 10];
            
            const add = function (a, b) {
              return a + b;
            };
            
            console.log(reduce(nums, add, 0))
    





# MORE: From the Way of Nik
    
    ->  Closures:
        >   closures can be used as fucntion factory to create more funcitons.
        >   closures can be used for data hiding and encapsulation.

   	->	async programming (ES6):
   		>	hold promise-deffered function in microTask queue.
   		>	hold callback functions in task queue (callback queue).
   		>	prioritize microtask queue over callback queue.
   		>	when web browser API finishes, add functions to call stack (run the function) when:
   			>	call stack is empty
   			>	all global code run (Have the event loop check this condition)
   		->	features:
   			>	non-blocking applications:	we don't have to wait in a single thread and don't block further code from running.
   			>	However long it take:	we can't predict when the browser feature's work will finish so we let JS to handle automatically running the function on it's completion.
   			>	web applications:	Asynchronous Javascript is the back-bone of the modern web letting us build fast 'non-blocking' applications.
   			
   	->	classes (object oriented programming):
   		>	


#   JSUnconf - functional programming
    
    >   use map, reduce and filter instead of for loop to iterate over the items in the array.











