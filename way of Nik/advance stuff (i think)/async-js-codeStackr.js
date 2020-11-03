//  this is callback. but if we just pass fuctions inside another functions then, it's known as callback hell!

function greeting(name) {
    console.log(`hello  ${name} !!!`);
}

let userInfo = (first, last, callback) => {
    let fullName = `${first} ${last}`;
    callback(fullName);
}

userInfo('karan', 'sharma', greeting);

//  promises
let hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetail = {
            name:   'marketing meeting',
            location:   'skype',
            time:   '1:00 PM'
        }
        resolve(meetingDetail);
    }
    else {
        reject(new Error('Meeting is already scheduled!'));
    }
});


const addToCalender = meetingDetail => {
    const calender = `${meetingDetail.name} is scheduled at ${meetingDetail.time} on ${meetingDetail.location}`;
    return Promise.resolve(calender);
}


/*
meeting
.then(addToCalender)
.then(data => {
        //  resolved data
        console.log(data);
    })
    .catch(err => {
        //  reject data
        console.log(err);
    });
*/


//  async - await

async function myMeeting() {
    try {   //  error handling!
        const meetingDetail = await meeting;
        const message = await addToCalender(meetingDetail);
        console.log(message);
    }
    catch (err) {
        console.log(err.message);
    }
}

myMeeting();