const todo = [ { hobby: ["IoT", "chess", "hardwares"] }, { love: [ "computers", "coding", "hacking" ] } ];

// console.log(todo);


let database = {
    name: 'karan',
    rollNo: 38,
    sem: 3,
    colg: 'graphic era university',
    course: 'bechalors of computer applications',
    field:  'computer Applications'
}

for (i in database) {
    console.log(`${i} -> ${database[i]}`);
}
