//  writing async in front of function makes it return a promise.
//  if we return a constant (it will be returned as resolved promise);

let bob = async function () {
    return 20;
}

bob().then(data => console.log(data));

//  here we have returned a whole promise.

let oggy = async function (car) {
    return new Promise(function (resolve, reject) {
        if(car == 'tesla') {
            console.log('elon musk');
        }
        else {
            console.log('fuck you');
        }
    })
}

oggy('tesla')
    .then(data => console.log(data))
    .catch(err => console.log(err));


//  using await, we can delay the execution of async code untill promise is not resolved.
///*

let savvy = async function () {
    let result = new Promise((resolve, reject) => {
        if(1 == 1.0)    resolve(true);
        else    reject(false);
    });
    let done  = await result;
    console.log(done);
}

savvy();

//*/
    
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });
    
    // wait until the promise returns us a value
    let result = await promise; 
    
    // "Now it's done!"
    console.log(result); 
}
    
firstAsync();