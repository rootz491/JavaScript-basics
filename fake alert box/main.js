let button = document.getElementById('fireAlert');
let alertBox = document.getElementById('alertBox');

button.addEventListener('click', () => { 
    let message = document.getElementById('alertValue').value;

    document.getElementById('alertMessageValue').innerText = message;
    alertBox.style.transform = "translateY(0px) translate(-50%)";
    document.body.style.backgroundColor = 'rgba(0, 0, 0, .1)'
});

let closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', () => {
    alertBox.style.transform = "translateY(-300px) translate(-50%)";
    document.body.style.backgroundColor = 'white';
})