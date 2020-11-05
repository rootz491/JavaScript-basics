let start = 1, end = 5;
let cardTemplate = document.querySelector('template');
let cardWrapper = document.querySelector('#cards');
const more = document.getElementById('more');

document.body.onload = getData();


function updateCharId(start, end) {
    let i=start;
    charId = []
    while(i <= end) {
        charId.push(i);
        i++;
    }
    start = i;
    end += 5;
    return [charId, start, end];
}

async function getData() {
    let charId = [];
    let updates = updateCharId(start, end);
    charId = updates[0];
    start = updates[1];
    end = updates[2];
    const result = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
    const data = await result.json();
    data.forEach(character => {
        makeCard(character);
    })
}

function makeCard(char) {
    let url = char.image;
    // console.log(char, url);
    let newCard = document.importNode(cardTemplate.content, true);
    const name = newCard.querySelector('#name');
    const img = newCard.querySelector('#image');
    const gender = newCard.querySelector('#gender');
    const status = newCard.querySelector('#status');
    const species = newCard.querySelector('#species');
    const origin = newCard.querySelector('#origin');
    name.innerText = char.name
    gender.innerText = char.gender;
    status.innerText = char.status;
    species.innerText = char.species;
    // origin.innerText = char.origin.name;

    img.src = `${url}`;
    cardWrapper.appendChild(newCard);
}


//  add more cards

more.onclick = e => {
    e.preventDefault();
    getData();
}


