// this is a promise. 
// Basically a javascript object that represents an asynchronous function.
// it wil either resolve or reject.

/*

let myFirstPromise = new Promise(function(resolve, reject) {
    reject('it doesnt work');           //  reject the promise & pass error message to catch block.
    setTimeout(() => {
        resolve('it fuckin worked!');   //  resolve the promise & pass argument into then block to work with!
    }, 2000);
});

//  THEN will handle RESOLVE
myFirstPromise.then(msg => {
    console.log(msg);
})

//  CATCH will handle REJECT
myFirstPromise.catch(err => {
    console.warn(err);
})

*/

//  it just chaining normal variables right one after another.

let normalChaining = new Promise(function(resolve, reject) {
    let marks = Math.random() * 100;
    console.log(marks)
    if(marks > 30)
        resolve(marks);
    else
        reject('you failed!');
});


let evaluate = marks => {
    return new Promise((resolve, reject) => {
        if(marks > 90) {
            resolve('very good!');
        }
        else if(marks > 75) {
            resolve('fair enough!!');
        }
        else if(marks > 50) {
            resolve('fine but put more hardwork!!!');
        }
        else {
            reject('your scored like shit!');
        }
    })
}


//   chaining to other promises.
normalChaining.then(marks => {
    console.log(`your marks are ${marks}`);
    return evaluate(marks);
})

.then(function() {
    console.log('congratulations your Fucker!');
})

.catch(function(err) {
    console.warn(`you're pathetic because ${err}`);
})

