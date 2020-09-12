const auth = firebase.auth()

const whenSignedIn = document.getElementById('signedIn');
const whenSignedOut = document.getElementById('signedOut');

const signedInBtn = document.getElementById('signedInBtn');
const signedOutBtn = document.getElementById('signedOutBtn');

const userDetails = document.getElementById('userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

signedInBtn.onclick = () => auth.signInWithPopup(provider);

signedOutBtn.onclick = () => auth.signOut();
/*
auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    }
    else {
        // signed out
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = "";
    }
});

*/