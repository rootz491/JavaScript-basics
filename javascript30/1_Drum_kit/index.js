//  functions

function playAudio(e) {
    //  console.log(e.keyCode);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(key == null) return;
    //console.log(key);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    sound.currentTime = 0;
    sound.load();
    sound.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    //console.log(e)
    e.target.classList.remove('playing');
}



//  listeners

window.addEventListener('keydown', playAudio);


let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

