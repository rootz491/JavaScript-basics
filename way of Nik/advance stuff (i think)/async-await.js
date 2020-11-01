let hello = async function() {
    return 'hello';
}

// console.log(hello());

hello().then(value => {
    // console.log(value);
})

//  ---------------------------------------------------

let second = async () => {
    let data = setTimeout(() => {
        console.log('hahaha');
    }, 3000);
    return data
}