//  save info.
let data = {
    user : {
        fullName: 'example',
        email: 'example@gmail.com',
        age: 19
    }
}

let old_result = document.getElementById('result');

//let isResultVisible = false;







//  ++++++++++++++++++++++++++++++++++++++++++  functions from here


//  add data

const addData = (userName, fullName, email, age) => {
    if (userName == "" || fullName == "" || email == "" || age == "") {
        alert("fill all the fields!"); 
        return false;
    }    
    else if(data.hasOwnProperty(userName)) {
        alert('User already Exist');
        return false;
    }
    else {
        data[userName] = {
            fullName: fullName,
            email: email,
            age: age
        }
        alert('successfully added!');
        return true;
    }
};

//  search data

const search = userName => {
    if(data.hasOwnProperty(userName)) {
        old_result.innerText = userName;
        old_result.classList.add('result');
    }
    else {
        alert('user not found!');
        old_result.innerText = "";
        old_result.classList.remove('result');
        /*    
        let userTag = document.createElement('h3');
        let textNode = document.createTextNode(userName);
        userTag.appendChild(textNode);
        userTag.id = 'result';
        let placeTag = document.getElementById('info');
        placeTag.appendChild(userTag);
        */
    }
}

//  result card info update.

let updateInfoCard = (userName, fullName, email, age) => {
    document.getElementById("resultUser").innerText = userName;
    document.getElementById("resultName").innerText = fullName;
    document.getElementById("resultEmail").innerText = email;
    document.getElementById("resultAge").innerText = age;
}

//  delete button

let deleteData = () => {
    let currentUser = document.getElementById('resultUser').innerText;
    console.log({currentUser});
    let deleteButton = document.getElementById('resultDeleteButton');
    if(confirm('are you sure?')) {
        //deleteButton.addEventListener('click', () => {
            delete data[currentUser];
        //});
    }
    closeData();
}

//  close button

let closeData = () => {
    document.querySelector('.resultCard').style.top = '-50%';               //  hide result card
    document.querySelector('.wrapper').classList.remove('disableClick');    //  enable click
    old_result.innerText = "";
    old_result.classList.remove('result');
}









//  ++++++++++++++++++++++++++++    Listeners from here


//  input event listener.

const inputSubmit = document.querySelector('#inputSubmit');

inputSubmit.addEventListener('click', () => {
    const userName = document.querySelector('#userName').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    //  adding to dataStructure
    addData(userName, fullName, email, age);
    
    //  setting back to default
    document.querySelector('#userName').value = "";
    document.getElementById('fullName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = ""
});


//  search event listener.

const searchButton = document.getElementById('outputSubmitButton');

searchButton.addEventListener('click', () => {
    const user = document.getElementById('searchQuery').value;
    search(user);
    //console.log(data);
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  result logic here

document.getElementById('info').onclick = () => {
    let userName = old_result.innerText;
    console.log(userName);

    let { fullName, email, age } = data[userName];      //  fetch data from opject
    console.log(`${fullName}\n${email}\n${age}`); 
    updateInfoCard(userName, fullName, email, age);     //  put data on DOM
    
    //  showing card
    const resultCard = document.querySelector('.resultCard');
    resultCard.style.top = '50%';
    //  disable wrapper
    document.querySelector('.wrapper').classList.add('disableClick');
   // isResultVisible = true;

}

/*
if (isResultVisible) {

    //  close button listener
    document.getElementById('resultCloseButton').onclick = closeData();
    
    
    //  delete button listener
    document.getElementById('resultDeleteButton').addEventListener('click', deleteData(userName));
}
*/








