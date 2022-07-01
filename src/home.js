import Icon from './chef.jpg';

function loadHome(){
    let box = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.textContent = 'Best macaroons in town';
    p2.textContent = 'Baked with love since 1957';
    p3.textContent = 'Order online or visit us in store!';

    const chef = new Image();
    chef.src = Icon;
    chef.setAttribute('id','chef')

    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(chef);
    box.appendChild(p3);

    box.setAttribute('class','content-box')

    return box;
}

export default loadHome;