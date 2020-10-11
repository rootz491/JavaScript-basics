

//  signup event listener
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    emailData = email.value;
    passData = pass.value;

    firebase.auth().createUserWithEmailAndPassword(emailData, passData).then(() => {
        alert('successful');
    })
    .then(
        window.location.replace('markup/login.html')
    )
    .catch(error => {
        alert(error.message);
    });
    email.value = '';
    pass.value = '';
});


//  redirect to home page when logged in.
firebase.auth().onAuthStateChanged( user => {
    if(user) {
        window.location.replace("./markup/home.html");
    }
})

console.log("active signup");

