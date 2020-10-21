const grid = document.getElementById('grid');
const doodle = document.createElement('div');
let startPoint = 150
let doodleBottomSpace = startPoint;
let doodleLeftSpace;
let isGameOver = false;
let platformCount = 3;
let platforms = [];
let upTimeId;
let downTimeId;
let isJumping = true;
let isGoingLeft = false;
let isGoingRight = false;
let leftTimeId, rightTimeId;

let createDoodle = () => {
    grid.appendChild(doodle);
    doodle.classList.add('doodle');

    doodleLeftSpace = platforms[0].left;
    console.log(doodleLeftSpace, doodleLeftSpace===platforms[0].left);
    doodle.style.left =  doodleLeftSpace + 'px';
    doodle.style.bottom =  doodleBottomSpace + 'px';
}

class platform {
    constructor(newPlatformBottom) {
        this.bottom = newPlatformBottom;
        this.left = Math.floor(Math.random() *  80);
        this.visual = document.createElement('div');

        const visual = this.visual;
        visual.classList.add('platform');
        visual.style.left = this.left + '%';
        visual.style.bottom = this.bottom + 'px';

        grid.appendChild(visual);
    }
}

let createPlatform = () => {
    for(let i=0; i < platformCount; i++) {
        let platformGap = 750 / platformCount;
        let newPlatformBottom = 50 + i * platformGap - 15;      //  -15 to put doodle in top of plaform
        let newPlatform = new platform(newPlatformBottom);
        platforms.push(newPlatform);
        console.log(platforms);
    }
}

let movePlatform = () => {
    
    if(doodleBottomSpace > 100) {
        platforms.forEach(plat => {
            plat.bottom -= 1;
            let visual = plat.visual;
            visual.style.bottom = plat.bottom + 'px';
        
        
            if (plat.bottom < 10) {
                let firstPlatform = platforms[0].visual;
                firstPlatform.classList.remove('platform');
                platforms.shift();
                console.log(platforms);
                //  add new platform
                let newPlatform = new platform(600);
                platforms.push(newPlatform);
            }
        })
    }
}

let jump = () => {
    clearInterval(downTimeId);
    isJumping = true;
    upTimeId = setInterval(() => {
        doodleBottomSpace += 8;
        doodle.style.bottom = doodleBottomSpace + 'px';
        if(doodleBottomSpace > startPoint + 200) {
            fall();
        }
        // platforms.forEach(platform => {
            
        // })
    }, 30)
}


let fall = () => {
    clearInterval(upTimeId);
    isJumping = false;
    downTimeId = setInterval(()=> {
        doodleBottomSpace -= 8;
        doodle.style.bottom = doodleBottomSpace + 'px';
        if(doodleBottomSpace <= 0) {
            gameOver();
        }
        platforms.forEach(platform => {
            if(
                (doodleBottomSpace >= platform.bottom) &&
                (doodleBottomSpace <= platform.bottom + 15) &&
                ((doodleLeftSpace + 60) >= platform.left) &&
                (doodleLeftSpace <= (platform.left + 85)) &&
                (!isJumping)
            ) {
                console.log('landed');
                startPoint = doodleBottomSpace;
                jump();
            }
        })
    }, 30);

}

function moveLeft() {
    isGoingLeft = true;
    leftTimeId = setInterval(function() {
        if (doodleLeftSpace >= 0) {
            doodleLeftSpace -= 1;
            doodle.style.left = doodleLeftSpace + 'px';
        }
    }, 5)
}

function moveRight() {
    isGoingRight = true;
    rightTimeId = setInterval(() => {
        if (doodleLeftSpace <= 600) {
            doodleLeftSpace += 1;
            doodle.style.left = doodleLeftSpace + 'px';
        }
    }, 5);
}

function moveStraight() {
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(rightTimeId);
    clearInterval(leftTimeId);
}

let control = e => {
    if (e.key === 'ArrowLeft') {
        moveLeft();
        isGoingRight = false;
        clearInterval(rightTimeId);
    }
    else if (e.key === 'ArrowRight') {
        moveRight();
        isGoingLeft = false;
        clearInterval(leftTimeId);
    }
    else if (e.key === 'ArrowUp') {
        //  move up
    }
    else {
        moveStraight();
    }
}


let gameOver = () => {
    console.log('game over');
    isGameOver = true;
    clearInterval(upTimeId);
    clearInterval(downTimeId);
}


let start = () => {
    if(!isGameOver) {
        createPlatform();
        createDoodle();
        setInterval(movePlatform, 30);
        jump();
        document.addEventListener('keyup', control);
    }
}

start();