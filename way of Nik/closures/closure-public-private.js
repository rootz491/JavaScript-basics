// using closure, we can scope the usage of some variables and functions, 
//  just like public, private in classes.

function makeCounter() {
    let privateCounter = 16;                //  private data.
    let changeBy = i => {                   //  private methods to change private data
        privateCounter += i;
    }

    return {
        increase: () => changeBy(1),        //  these keys as function will be used by outer methods.
        decrease: () => changeBy(-1),
        value: () => privateCounter
    }
}

let counter = makeCounter();

/*

console.log(counter.value());
counter.increase();
counter.increase();
console.log(counter["value"]());

*/

// to reflect change in DOM

document.getElementById('increaseButton').addEventListener('click', () => {
    if (counter.value() < 24)
        counter.increase();
    document.getElementById('value').innerText = counter.value();
});

document.getElementById('decreaseButton').addEventListener('click', () => {
    if (counter.value() > 14)
        counter.decrease();
    document.getElementById('value').innerText = counter.value();
});



