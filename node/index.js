//console.log('Hello World!');


/*
//  GLOBAL

global.lucky = '23';        //  makes variable use anywhere in the code.

console.log(global.lucky);

global.karan = 123;

console.log(global.karan);
*/

//  PROCESS

console.log(process.platform);

console.log(process.env.USER);



//  callback function run on event automatically.

process.on('exit', function() {
    console.log('\nBye bye!');
});

/*      this isn't working, maybe launch is not a event for PROCESS.          
process.on('launch', () => {
    console.log('welcomeback\n')
});
*/


//  Event Emitter   {   event driven programming    }


const { EventEmitter } = require('events');     //  inporting from JS module.
const eventEmitter = new EventEmitter();        //  creating an instance.


eventEmitter.on('launch', () => {               //  adding event listener for launching server
    console.log('welcome to the server!');
})

eventEmitter.on('exit', () => {                 //  adding event listener for exiting the server
    console.log('Exiting the server!');
})


//eventEmitter.emit('launch');                    //  triggering the event

//eventEmitter.emit('exit');                      //  again, triggering the event.




/*
//  File system - fs

const { readFile, readFileSync } = require('fs').promises;       //  inporting from module.

//  1.  Reading from file synchronously

const txt = readFileSync('./hello.txt', 'utf-8');       // meaning first read content of file the read rest of script.

//  2.  Reading from file asynchronously

readFile('./hello.txt', 'utf-8', (err, txt) => {        //  executing rest of script at same time.
    console.log(`1. ${txt}`);
})

console.log('bla bla');
*/
//  3.  Promises

const { readFile } = require('fs').promises;

async function reading() {
    const file = await readFile('./hello.txt', 'utf-8');
    console.log(file);
}

reading();

console.log('more bla bla');


//  importing own module.

const myModule = require('./myModule.js');
console.log(myModule);