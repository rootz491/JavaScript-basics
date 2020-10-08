
    //  nav buttons

let findUserButton = document.getElementById('findUser');
let findUserSection = document.querySelector('.findUserContent');

let appInfoButton = document.getElementById('appInfo');
let appInfoSection = document.querySelector('.appInfoContent');

let friendButton = document.getElementById('friend');
let friendSection = document.querySelector('.friendContent');

    //  listener for nav buttons

findUserButton.addEventListener('click', () => {
    findUserSection.classList.add('visible');
    appInfoSection.classList.remove('visible');
    friendSection.classList.remove('visible');
    //console.log('find user click')
});

appInfoButton.addEventListener('click', () => {
    findUserSection.classList.remove('visible');
    appInfoSection.classList.add('visible');
    friendSection.classList.remove('visible');
    //console.log('app info click');
});

friendButton.addEventListener('click', () => {  
    findUserSection.classList.remove('visible');
    appInfoSection.classList.remove('visible');
    friendSection.classList.add('visible');
    //console.log('friend click');
});

<<<<<<< HEAD

//  hamburger code:

let hamburger = document.getElementById('hamburger');
hamburger.onchange = () => {
    let header = document.querySelector('header');
    if (header.style.display === "block") {
        header.style.display = "none";
      } else {
        header.style.display = "block";
      }
}





















=======
>>>>>>> 2bd9490c1ea1b7611196e6df780cb8ca380a8a13
    //  firebase work from here


let auth = firebase.auth();
let dbRef = firebase.database();
let user = firebase.auth().currentUser;


/*
        checking if user is logged in or not
*/


//  wrapper elements

let authWrapper = document.querySelector('.auth-wrapper');
let mainWrapper = document.querySelector('.main-wrapper');







auth.onAuthStateChanged( user => {
<<<<<<< HEAD
    if(user == null) {
        mainWrapper.removeAttribute("id");
        authWrapper.id = 'displayNone';
        logoutBtn.removeAttribute('id');
      //  mainWrapper.hidden = false;
      //  authWrapper.hidden = false;
      //  console.log('signed in');
=======
    if(user != null) {
        mainWrapper.removeAttribute("id");
        authWrapper.id = 'displayNone';
      
      //  mainWrapper.hidden = false;
      //  authWrapper.hidden = false;
        console.log('signed in')
>>>>>>> 2bd9490c1ea1b7611196e6df780cb8ca380a8a13
    }
    else {
        authWrapper.removeAttribute("id");
        mainWrapper.id = 'displayNone';
<<<<<<< HEAD
        logoutBtn.id = 'displayNone';
      //  mainWrapper.hidden = true;
      //  authWrapper.hidden = true;
      //  console.log('signed out');
=======
      
      //  mainWrapper.hidden = true;
      //  authWrapper.hidden = true;
        console.log('signed out');
>>>>>>> 2bd9490c1ea1b7611196e6df780cb8ca380a8a13
    }
});




//      logging in  



let loginBtn = document.getElementById('loginBtn');
let signupBrn = document.getElementById('signupBtn');

let email = document.getElementById('email');
let passwd = document.getElementById('passwd');


loginBtn.addEventListener('click', e => {
    e.preventDefault();
    if(email.value != "" && passwd.value != "") {
        console.log(email.value, passwd.value);
        auth.signInWithEmailAndPassword(email.value, passwd.value)
            .then( () => {
                console.log("login successfully");
            })
            .catch( error => {
                alert(error);
            });
    }
    else {
        alert('fill the form first');
    }
});


//      sign up


signupBtn.addEventListener('click', e => {
    e.preventDefault();
    if(email.value != "" && passwd.value != "") {
        //console.log(email.value, passwd.value);
        //  create new account.
        auth.createUserWithEmailAndPassword(email.value, passwd.value)
            .then( () => {
                console.log("signup successfully\n");
            })
            .catch( error => {
                alert(error);
            });
    }
    else {
        alert('fill the form first');
    }
});



//  logout button

<<<<<<< HEAD
let logoutBtn = document.querySelector('.logoutBtn');
=======
let logoutBtn = document.getElementById('logoutBtn');
>>>>>>> 2bd9490c1ea1b7611196e6df780cb8ca380a8a13
logoutBtn.onclick = auth.signOut();
















//  add User data to database

if(user) {
    dbRef.ref('user').once('value').then(snap => {
        console.log(snap.currentUser);
    })
}

