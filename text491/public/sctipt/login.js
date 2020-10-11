let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    emailData = email.value;
    passData = pass.value;

    firebase.auth().signInWithEmailAndPassword(emailData, passData).then(() => {
        alert('successful');
    }).catch(error => {
        alert(error.message);
    });
    email.value = '';
    pass.value = '';
});


//  home page
firebase.auth().onAuthStateChanged( user => {
    if(user) {
        window.location.replace("../markup/home.html");
    }
});


console.log("active login");