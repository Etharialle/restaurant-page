import './style.css';
import * as home from './home.js';

const headerArray = [
    ['header'],
    ['nav'],
    ['div', 'nav-button test', 'Home'],
    ['div', 'nav-button', 'Menu'],
    ['div', 'nav-button', 'Location']
];

// function definitions
function newElement(tag, addClass, content, id) {
    const element = document.createElement(tag);
    if (addClass) element.className = addClass;
    //if (addClass) { 
    //    if (typeof(addClass) == Object) {
    //        element.classList.add(...addClass);
    //    } else {
    //        element.classList.add(addClass);
    //    }
    //}
    if (id) element.id = id;
    if (content) element.textContent = content;
    return element;
}

function createHeader(headerArray){
    const headerTag = newElement(...headerArray[0]);
    const navTag = newElement(...headerArray[1]);
    const homeTag = newElement(...headerArray[2]);
    const menuTag = newElement(...headerArray[3]);
    const aboutTag = newElement(...headerArray[4]);
    console.log(headerTag);
    navTag.appendChild(homeTag);
    navTag.appendChild(menuTag);
    navTag.appendChild(aboutTag);
    headerTag.appendChild(navTag);
    return headerTag;
}

const headerTest = createHeader(headerArray);
const lotrDiv = document.querySelector(".lotr-bg-color");
lotrDiv.appendChild(headerTest);
lotrDiv.appendChild(home.home);

export {newElement};