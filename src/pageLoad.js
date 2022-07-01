import Icon from './bg.jpg';


function pageLoad(){
    let container = document.createElement('div');
    container.setAttribute('id','container');
    let welcome = document.createElement('h1');
    welcome.textContent = "Madame Macaroon";
    
    const tabRow = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    homeTab.setAttribute('id','home');
    menuTab.setAttribute('id','menu');
    contactTab.setAttribute('id','contact');

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    contactTab.textContent = 'Contact';
    

    tabRow.appendChild(homeTab);
    tabRow.appendChild(menuTab);
    tabRow.appendChild(contactTab);

    container.appendChild(welcome);
    container.appendChild(tabRow);
    
    

    return container;
}

export default pageLoad;