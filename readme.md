# JavaScript

    will be doing some javascript lately.
    i know 'Im late but hey i actually started :)


    C'ya ...

## topics :
    
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
    2.  this refers to window object.
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
    13. document.getElementById("image").src="abc.jpeg"; is to change img source of img element with Id: "image".
    14. document.getElementById("demo").addEventListener("click", myFunction); is to add "onClick" event listener using script tags.

## methods: BASICS
    
    *   text.length;                // returns length of text
    *   text.indexOf("karan");      // return index of first occurence of text.
    *   text.lastIndexOf("is", 15); // searches backwards means if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
    *   text.search("karan");       // search in a string for a string
    *   text.slice(0,-10);          // take slice from string  
    *   text.substring(0,12);       // almost similar
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

 

### ES6
    
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
                const inc = (a=1, b=1) => a+b;    // assigning default value to arguments.
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
                ->  const { today: {low: todayLow, high: todayHigh} }; //get it? :)
    *   
            






