import Icon from './restaurant-location.png';

function loadContact(){
    let box = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.textContent = '📞 123 456 789';
    p2.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
    p3.textContent = '📧 madammacaroon@gmail.com';


    const map = new Image();
    map.src = Icon;
    map.setAttribute('id','map')

    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(p3);
    box.appendChild(map);

    box.setAttribute('class','content-box')

    return box;
}

export default loadContact;