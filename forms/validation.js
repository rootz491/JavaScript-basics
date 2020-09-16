console.log('karan')


let validation = () => {
    let name = document.forms['myForm']['fname'].value;
    let pass = document.forms['myForm']['fpass'].value;
    let nameRegex = /^karan/i;
    let validInput = /\w/ig;
    let passRegex = /hexxor123/;
    if (name == "") {
        printHint("NAME is required");
        return false;
    }    
    if (pass == "") {
        printHint("PASSWORD is required");
        return false
    }
    if(!(validInput.test(name) && validInput.test(pass)))  {
        printHint('only alpha-numeric characters allowed');
        return false; 
    }
    if(!nameRegex.test(name)) {
        printHint('Not ADMIN')
        return false;
    }
    if(!passRegex.test(pass)) {
        printHint('wrong password');
        return false; 
    }
}

/*
document.querySelector('form').addEventListener('submit', validation());


document.querySelector('h2').innerText = `hello ${name}`; 
*/


let printHint = message => {
    document.getElementById('hint').innerHTML = message;
}