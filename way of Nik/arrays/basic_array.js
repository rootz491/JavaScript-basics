const array = ['mango', 'apple', 'banana', 'orange'];
console.log(array);
/*
array.push('kiwi');         //  add element to the end of the array.
array.pop();                //  remove element from the end of the array.
array.shift();              //  remove element from start of array.
array.unshift('papaya');    //  adds element to the starting of the array.
console.log(array);

//  SPLICE and SLICE

let position = array.indexOf('banana');     //  returns position of an element.
array.splice(position, 1);                  //  removes the one element whose position is given.
console.log(array);

position = array.indexOf('papaya');
array.splice(position, 2);                  //  remove no. of elements from certain index/position.
console.log(array);

const array2 = array.slice();               //  copy an array
array2.push('kiwi');

console.log(array2[0] === array2['0']);     //  indices can either be string or digit.

//console.log(array2['01']);    is not same as array2[1]        

console.log(Object.keys(array));            //  return array of indices
console.log(Object.values(array));          //  return array of values

array[2] = 'nothing';                       //  can also assign to out of bound index.
console.log(array.length);                  //  and it will affect index.
console.log(Object.values(array));          //  although on checking values, it just show only defined values.
console.log(Object.keys(array));            //  and also not showing undefined indices in-between, 


//  array.lenght


let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array3);
console.log(array3.length);
//  increase the length
array3.length = 12;                     
console.log(array3);
//  decrease the length
array3.length = 5;                          //  reassigning the array.lenght will actually affect the real array.
console.log(array3);

*/

/*

//      tale of array splice property

array.splice(2, 0, 'new here');                 //  it will add new element to 2nd index
console.log(array);

array.splice(2, 1);                             //  remove that element from second place
console.log(array);

array.splice(array.length-1, 1, 'replaced');    //  replace the last element of array
console.log(array);

array.splice(10, 0, 'weirdo');
console.log(array);

*/

/*          POWER OF ARRAY LENGTH PROPERTY


console.log(array.length)           //  some length of array, say 5         
array.length=4                      //  modify lenght or length -= 1
console.log(array);                 //  last element is no more.                        [ 'mango', 'apple', 'banana', 'replaced' ]
array.length++                      //  then, increase the length or length += 1
console.log(array);                 //  see, the removed array wont come back!          [ 'mango', 'apple', 'banana', 'replaced', <1 empty item> ]


*/

//  static functions

var array1 = Array.from(array);     //  create new array
//  console.log(array1);

var array2 = Array.isArray();       //  check if it's an array or not!
//  console.log(array2);

var array3 = Array.of(array1, array, 1, 2, 3, 4, {"karan sharma" : true})
//  console.log(array3);



//  instance functions

var array4 = Array.prototype.concat(array1, array2, array3);
console.log(array4);




