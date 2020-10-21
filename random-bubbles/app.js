        //      RANDOM BUBBLES

let min = 10, dmin = 2;
let max = 90, dmax = 5;
let body = document.querySelector('body');

setInterval(() => {    
    let r = Math.random()*(255 - 10 + 1) + 10;
    let g = Math.random()*(255 - 10 + 1) + 10;
    let b = Math.random()*(255 - 10 + 1) + 10;
    let sphere = document.createElement('div');
    sphere.id = 'thing';
    //  random position
    sphere.style.left = `${Math.floor(Math.random()*(max - min + 1) + min)}vw`;
    //  random color
    sphere.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${Math.random()})`;
    //  random speed
    sphere.style.animationDuration = `${Math.floor(Math.random()*(dmax - dmin + 1) + dmin)}s`;
    body.appendChild(sphere);
    //  remove the shapes
    sphere.addEventListener('animationend', (e) => {
        e.target.remove();
    })

}, 1000);

        //  TYPE WRITER FONT.

let i = 1;
let str = 'Karan Sharma.';
let ori = [...str];    //  convert str into array using spread operator
let type = document.getElementById('type');

ori.forEach(char => {

    setTimeout( () => {
        type.textContent += `${char}`;
    }, 500*i);

    i+=1;
})