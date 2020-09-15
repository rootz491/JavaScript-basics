
class person {
    constructor(name, aged) {
        this.name = name;
        this.age = aged;
        this.hi = () => {
            console.log(`Hii, ${this.name}`);
            const how = () => console.log(`you're ${this.age} years old!`);
            how();
        }
        this.hi();
    }
    myName = () => {
        console.log(`My name is ${this.name}`);
        const myAge = () => console.log(`I'm ${this.age} year old!`);
        myAge();
    };
}

me = new person("karan", 18);

class student extends person {
    constructor(name, age, hobby, fav) {
        super(name,age);
        const data = {
            name,
            age,
            hobby,
            favourate_lang : fav
        }
        console.log(data);    
    }
}

nikhil =  new student("Nik", 19, "coding", "Javascript");



//----------------------------------------------------


if(NaN !== NaN) {
    console.log("fuck");
}



//-----------------------------------------------------

//  chaining function


const phrase = "I am a sentence";
console.log(phrase)
const flip = phrase.split(" ").reverse().join(" ");
console.log(flip);