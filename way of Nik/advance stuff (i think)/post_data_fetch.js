let getData = () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
}

getData();



let newUserData = {
    3: {
        name: 'sudi',
        course: 'BCA'
    }
}

let sendData = data => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            'content-type': 'application/json',
            'Accept': 'application/json'
        })
    }

    return fetch('data.json', options)
        .then(res => {return res.json()})
        .then(val => console.log(val))
        .catch(err => console.log(err));
}

sendData(newUserData);

// -----------------------------------------------------------------------
//  codeStacKr code!
// const createNewPost = post => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }
//   return fetch('data.json', options)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(err => console.error(err));
// }


// createNewPost(newUserData);