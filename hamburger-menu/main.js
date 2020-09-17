/*
for(let i = headingText.length-1; i >= 0; i--) {
    document.getElementById('heading').innerHTML += headingText[i]
}
*/
//++++++++++++++++++++++++++++++++++++++++++++

let button = document.getElementById('burger');
let check = true;

button.addEventListener('change', () => {
    let sideBar = document.querySelector('.sideBar');
    if (check)
        sideBar.classList.add('hide');
   else 
       sideBar.classList.remove('hide');
    check = !check;
})