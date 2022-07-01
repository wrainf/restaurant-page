import Icon from './macaroon.jpg';

function loadMenu(){
    let box = document.createElement('div');

    

    for(let i = 0; i < 6; i++){
        let card = document.createElement('div');
        const macaroon = new Image();
        macaroon.src = Icon;
        let desc = document.createElement('h2');
        desc.textContent = 'Blueberry';
        card.appendChild(macaroon);
        card.appendChild(desc);
        card.setAttribute('class','card');
        box.appendChild(card);
    }
    
    box.setAttribute('class','menu');
    return box;
}

export default loadMenu;