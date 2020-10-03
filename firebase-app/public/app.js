  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA1j_7FO-_URmRpoSCuOJbS7_M30X_8J2M",
  authDomain: "first-app-491.firebaseapp.com",
  databaseURL: "https://first-app-491.firebaseio.com",
  projectId: "first-app-491",
  storageBucket: "first-app-491.appspot.com",
  messagingSenderId: "775097660967",
  appId: "1:775097660967:web:a3e48c53e3fdefefd70002",
  measurementId: "G-K3Q1K1JYXV"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dbRef = firebase.database();


//  fetch any new posts

dbRef.ref('comment').on('child_added', snap => {
    let comment = snap.val();
    createComment(comment);
});



const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();






//  listening to auth state change!
firebase.auth().onAuthStateChanged( user => {
    if(user) {
        let whenSignedIn = document.querySelectorAll('.whenSignedIn');
        whenSignedIn.forEach(item => {
            item.hidden = false;
        })
        let whenSignedOut = document.querySelectorAll('.whenSignedOut');
        whenSignedOut.forEach(item => {
            item.hidden = true;
        })

        document.getElementById('postName').innerText = auth.currentUser.displayName;
        
    }
    
    else {
        let whenSignedIn = document.querySelectorAll('.whenSignedIn');
        whenSignedIn.forEach(item => {
            item.hidden = true;
        })
        let whenSignedOut = document.querySelectorAll('.whenSignedOut');
        whenSignedOut.forEach(item => {
            item.hidden = false;
        })
    }
})

















  //    DOM


//sign in button listener
let signIn = document.getElementById('signIn');
signIn.addEventListener('click', () => {
    //console.log('signIn click');
    let promise = auth.signInWithPopup(provider);
    promise.catch(e => console.log(e.message));
})



//sign out button listener
let signOut = document.getElementById('signOut');
signOut.addEventListener('click', () => {
    //console.log('signOut click');
    auth.signOut();
})



//Form event listener
let form = document.querySelector('form');
form.addEventListener('submit', postComment);















//  functions


let createComment  = commentObj => {
    let wrapper = document.getElementById('commentWrapper');
    let commentBody = document.createElement('div');
    commentBody.id = 'comment';

    let commentContext = document.createElement('p');
    commentContext.id = "commentContext";
    commentContext.appendChild(document.createTextNode(commentObj.text));

    let commentName = document.createElement('h4');
    commentName.id = 'commentName';
    commentName.appendChild(document.createTextNode(commentObj.name));

    commentBody.appendChild(commentContext);
    commentBody.appendChild(commentName);

    wrapper.appendChild(commentBody);
}



function postComment(e)  {
    e.preventDefault();
    
    let text = document.getElementById('postText');

    let userId = auth.currentUser.uid;
    let userName = auth.currentUser.displayName;
    let postId = dbRef.ref('comment').push().key;

    //console.log(userId, userName, postId, text.value)
    
    dbRef.ref(`comment/${postId}`).set({
        userId: userId,
        name: userName,
        text: text.value
    })
    .then(
        alert('Posted successfully\n it may take few seconds to appear!')
    )
    .catch(
        error => alert("error", error)
    )
    //console.log(postId, name, text);
    name.value = "";
    text.value = ""; 

    
}
