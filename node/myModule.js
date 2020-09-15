
//  modules ->  fs, event, global etc...

/*
    common JS       =>      require()
    ES6             =>      import/export

    npm init -y                 //  set up 'npm' to install modules from internet. 
    npm install express         //  installing EXPRESS.


    express is used to manage endpoints for the webapp.
    then node.js server that endpoint back to clint.
*/

module.exports = {
    name: 'karan'
}

const express = require('express');     //  inporting express which is installed using npm command-line.

//  console.log(express);