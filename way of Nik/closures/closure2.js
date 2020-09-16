let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');

let originalSize = 2;

function changeSize(size, callback) {
    size = callback(size);
    return function() {
        document.querySelector('main').style.fontSize = size + 'em';
    };
}

let increaseSize = changeSize(originalSize, (num) => {
    originalSize = num+1;
    return originalSize;
});

let decreaseSize = changeSize(originalSize, (num) => {
    originalSize = num-1;
    return originalSize;
});


/*
first.addEventListener('click', increaseSize);
second.addEventListener('click', decreaseSize);
*/

first.onclick = increaseSize;
second.onclick = decreaseSize;