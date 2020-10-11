var firebaseConfig = {
    apiKey: "AIzaSyBHyqvNV0PW3mc9B4TlcCD3xsn9i40MTNM",
    authDomain: "text-web-491.firebaseapp.com",
    databaseURL: "https://text-web-491.firebaseio.com",
    projectId: "text-web-491",
    storageBucket: "text-web-491.appspot.com",
    messagingSenderId: "536288404542",
    appId: "1:536288404542:web:2ebd61ecf5e821099e1d6f",
    measurementId: "G-XXBEBEM2D8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let dbRef = firebase.database();



let form = document.querySelector('form');
form.onsubmit = e => {
    e.preventDefault();
    let userName = document.getElementById('userName').value;
    let fullName = document.getElementById('fullName').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    //console.log(fullName, userName, age, gender);
    //  upload data to database.
    dbRef.ref('user').push().set({
        fullName: fullName,
        userName: userName,
        age: age,
        gender: gender
    })
    .then( setTimeout(()=> {
            document.querySelector('.banner').classList.add('show');
        }, 1000))
    .then( setTimeout(()=> {
            document.querySelector('.banner').classList.remove('show');
            window.location.replace('../markup/home.html');
        }, 4000)  
    )
    .catch(error => {
        console.log(error.message);
    });

}