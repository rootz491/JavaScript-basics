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



//  if logout, back to login page
auth.onAuthStateChanged(user => {
    if(!user) {
        window.location.replace("login.html");
    }
});


//  logout button listener
let logout = document.getElementById('logout');
logout.onclick = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('logout successful!');
    });
};

//  hamburger code
let isOpen = false;
let hamburger = document.getElementById('hamburgerWrapper');
let header = document.querySelector('header');
hamburger.onclick = () => {
    if(!isOpen) {
        header.classList.add('out');
    }
    else {
        header.classList.remove('out');
    }
    isOpen = !isOpen;
};