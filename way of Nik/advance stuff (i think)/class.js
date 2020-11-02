let user1 = {
    name: 'robin',
    score: 20,
    increase: function () {
        this.score += 1;
    }
}

console.log(user1.name);
console.log(`score: ${user1.score}`)
user1.increase();
console.log(`new score: ${user1.score}`)



/*  now i want another user!!!

let user2 = {
    //  ....
}

    and after that one more :/

*/

// and if we want to store data of 10 USERS what should we do then ???

//  SOLUTION 1: Make a function that will create object for us.

// SOLUTION 2: Using the prototype chain

function createUser(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increase: function () {
        this.score++;
    },
    /*  what if we do this ?
    well it wont work!!!
    'this' don't know to whom it have to point to? 
    
    increase:   function() {
        function add() {
            this.score++;
        }
        add();
    },
    */
    //   Now it's working like a charm. BUT how?
    //   it's called lexically scoped this
    increase: function () {
        let add = () => {
            this.score++;
        }
        add();
    },

    login: function () {
        console.log(this.name + ' logged in');
    }
}

let user2 = createUser('russel', 10);
let user3 = createUser('Seirus Snapes', 50);

console.log(`${user2.name} -> ${user2.score}`);
console.log(`${user3.name} -> ${user3.score}`);
user3.increase();
console.log(`${user3.name} -> ${user3.score}`);
user2.login();


//  well this is good enough BUT we are using increase and login, are they even object's property ?         NO it comes with userFunctionStore object !

if (user2.hasOwnProperty('login'))
    console.log(true);



//      so SOLUTION 2 is good and all, BUT still is suphosticated and non-standard



//  SOLUTION 3: using 'new' keyword that automates the hardwork

/*
    when we call function though 'new' keyword, it does 2 things

    ->  it does 2 things

        1.  create a new object
        2.  return the object

    LET'S DO IT !!!

*/

function createOtherUser(name, score) {
    this.name = name;
    this.score = score;
    //  here we are nether linking other object with Object.create() nor we are returning the object
}

createOtherUser.prototype //  {}

createOtherUser.prototype.increase = function () {
    this.score++;
}
createOtherUser.prototype.login = function () {
    console.log('login');
}

//  see that's all! we don't need to do hardwork now!

let user4 = new createOtherUser('kevin', 22);

console.log(`${user4.name} -> ${user4.score}`);



//  SOLUTION 4: using 'class' syntactic sugar

class createDifferentUser {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increase() {
        this.score++;
    }
    login() {
        console.log(`${this.name} logged in`);
    }
}

//  so here we are using classes so we don't have to use Object.prototype object.
//  using constructor we can declare all variables.
//  member functions are used to perform operatons.

let user5 = new createDifferentUser('karan sharma', 100)



console.log(`${user5.name} -> ${user5.score}`);
user5.increase();
console.log(`${user5.name} -> ${user5.score}`);