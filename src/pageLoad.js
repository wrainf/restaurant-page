import Icon from './bg.jpg';


function pageLoad(){
    let element = document.createElement('div');
    let welcome = document.createElement('h1');
    welcome.textContent = "Madam Macaroon";
    const myImage= new Image();
    myImage.src = Icon;
    element.appendChild(welcome);
    element.appendChild(myImage);
    

    return element;
}

export default pageLoad;