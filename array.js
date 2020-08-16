const myList = [
    { name: "tea", price: 100}, 
    { name: "salt", price: 18}, 
    { name: "chicken", price: 200}, 
    { name: "coffee", price: 75 },
    { name: "tomato", price: 40 },
    { name: "pizza", price: 250 }
];

console.log(myList);        //  original list







//   filter()   ->   all items with price less than or equals to 100 $

const filtererd = myList.filter( (items) => {
    return items.price <= 100;
});

console.log({filtererd});     //  filtered list








//  list of perticular item list in the array

const names = myList.map( items => {
    return items.name;
});

const prices = myList.map( (items) => items.price )

console.log({prices});        //  prices list
console.log({names});         //  names list








//  find specific element from the array acc. to some specific property

const findSpecific = myList.find( (item) => item.name === "tea" );

console.log({findSpecific})   //  specific item (whole object)








//  forEach()   -> dont return,  just to iterate over the elements.

myList.forEach( item => console.log(item.name) )







//  some()  -> if condition gets true for any item int the array, then it returns true.

const inexpItems = myList.some( (items) => items.price > 100 )

console.log({inexpItems})







//  every() ->  only returns TRUE, if every item satisfied with condition.

const pricedItems = myList.every( item => item.price < 50 )

console.log({pricedItems})







//  reduce()  ->    use when doing some cumulative operation on the array, like find TOTAL

const totalPrice = myList.reduce( (total, items) => total + items.price , 0);

console.log({totalPrice});







let numbers = [1, 2, 3, 4, 5, 6, 7];

//  includes()  ->  to see if an item is present in a simple array or not.

const isAval = numbers.includes(6);

console.log(isAval);




console.log("\n\n\n" + numbers)     //  original array

position = -2       //  from
drop = 2            //  to

rest = numbers.splice(position,1);      //  removing number
console.log(rest)

console.log(numbers)        //  rest of the array

const sliced = numbers.splice(drop)     // slicing array into 2

console.log(numbers)        //  
console.log(sliced)

numbers.push(rest[0])
console.log(numbers)

numbers = [...numbers, ...sliced]
console.log(numbers)







const original = ["♦",
"♠",
"♦",
"♣",
"♥",
"✨"
]

const arrange = (array, from, to) => {
    const t = array.splice(from,1);
    const s = array.splice(to+1);
    array.push(t[0]);
    array = [...array, ...s];
    return array;
};

const numb  = ['♠', '♣', '♥', '♦', '✨']
const from = 3
const to = 0

const magic = arrange(numb, from, to);
console.log(magic);
console.log(original)
const isTrue = (magic, original) => magic === original ;

console.log(isTrue(magic, original))