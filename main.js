let likeDislikeLogic = () => {
    let totalLikes = 0;
    let changeLike = i => {
        totalLikes += i;
    };

    return {
        like: () => changeLike(1),
        dislike: () => changeLike(-1),
        show: () => totalLikes
    };
}

let firstImageLikes = likeDislikeLogic();


let firstImageLikeButton = document.getElementById('like');

firstImageLikeButton.addEventListener('click', () => {
    firstImageLikes.like();
    document.getElementById('likesNumber').innerText = firstImageLikes.show();
   
    //   call to create popup
    createPopup("liked!", 'likePopup');

    //  remove popup
    setTimeout( () => {
        document.getElementById('likePopup').remove();
    }, 3000);
});



let firstImageDislikeButton = document.getElementById('dislike');

firstImageDislikeButton.addEventListener('click', () => {
    firstImageLikes.dislike();
    document.getElementById('likesNumber').innerText = firstImageLikes.show();
    
    //   call to create popup
    createPopup("disliked!", 'dislikePopup');
    
    //  remove popup
    setTimeout( () => {
        document.getElementById('dislikePopup').remove();
    }, 3000);
});








let createPopup = (text, id) => {
    let popup = document.createElement('p');
    popup.id = id
    let popupText = document.createTextNode(text);
    popup.appendChild(popupText);

    
    let container = document.getElementById('likePopupContainer');
    container.appendChild(popup);

    //console.log('popup created');
}

/*

let likePopup = createPopup("liked!", 'likePopup');
let dislikePopup = createPopup('disliked!', 'dislikePopup');
createPopup("liked!", 'likePopup');

*/