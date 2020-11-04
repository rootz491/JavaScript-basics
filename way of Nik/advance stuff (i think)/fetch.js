
//  fetch image from internet.
/*
fetch('https://unsplash.it/600/400')
    .then(res => res.blob())
    .then(data => {
        console.log(data);
        showImg(data);
    })
    .catch(err => console.log(err));

function showImg(data) {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(data);
    document.querySelector('body').appendChild(img);
}
*/



//  fetching some posts from a service called JSON-placeholder

let postSection = document.querySelector('#posts');
let postTemplate = document.querySelector('#postTemplate');

async function getData() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await postStream.json();
    let i=0
    posts.forEach(post => {
        i++;
        if (i<10) {
            // console.log(post);
            // createPost(post);
            try {
                fetch('https://unsplash.it/300/200')    //  fetch new img every time.
                    .then(res => res.blob())
                    .then(data => {
                        createPostByTemplate(data, post);   //  send img and postData to function.
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}

//  write post to DOM using TEMPLATE.
function createPostByTemplate(url, post) {
    let newPost = document.importNode(postTemplate.content, true);
    let postTitle = newPost.querySelector('.postTitle');
    let postBody = newPost.querySelector('.postBody');
    let postImg = newPost.querySelector('.postImg');
    postTitle.innerText = post.title;
    postBody.innerText = post.body
    postImg.src = URL.createObjectURL(url);
    postSection.appendChild(newPost);
}

//  write post to DOM via usual method
function createPost(data) {
    let post = document.createElement('div');
    post.classList.add('post');
    let postTitle = document.createElement('h4');
    postTitle.classList.add('postTitle');
    postTitle.innerText = data.title;
    let postBody = document.createElement('p');
    postBody.classList.add('postBody');
    postBody.innerText = data.body;
    //  add to dom
    post.appendChild(postTitle);
    post.appendChild(postBody);
    console.log(post);
    postSection.appendChild(post);
}

getData()
    .catch(err => console.log(err));













/*

//  POST data using fetch API

const newPost = {
    userId: 2,
    title: 'new post',
    body: 'awesome post here'
}

const createNewPost = post => {
    const options = {
        method: 'POST',
        headers: new Headers({
            "content-type": "application/json"
        }),
        body: JSON.stringify(post),

    }

    return fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(res => res.json())
        .then(posts => console.log(posts))
        .catch(err => console.log(err));
}

createNewPost(newPost);


*/