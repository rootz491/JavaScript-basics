class person {
    constructor(name, aged) {
        this.name = name;
        this.age = aged;
        this.hi = () => {
            console.log(`Hii, ${this.name}`);
            //  how();
        }
        //  this.hi();
    }

    myAge() {
        console.log(`I'm ${this.age} year old!`);
    }
}


class student extends person {
    constructor(name, age, hobby, fav) {
        super(name,age);
        this.hobby = hobby;
        this.fav = fav;
    }

    myDegree() {
        console.log('ima Computer Science student.');
    }

    myHubby() {
        console.log(`my hobby is ${this.hobby}`);
    }

    myFav() {
        console.log(`my fav lang. is ${this.fav}`);
    }
} 

//  use of base class
me = new person("karan", 18);
me.hi();
me.myAge();


//  use of inherited class
nikhil =  new student("Nik", 19, "coding", "Javascript");
nikhil.hi();
nikhil.myAge();
nikhil.myDegree();
nikhil.myFav();
nikhil.myHubby();


//----------------------------------------------------
/*

if(NaN !== NaN) {
    console.log("fuck");
}

*/
//-----------------------------------------------------

//  chaining function


const phrase = "I am a sentence";
// console.log(phrase)
const flip = phrase.split(" ").reverse().join(" ");
// console.log(flip);