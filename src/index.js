import './style.css';
import * as home from './home.js';

const headerArray = [
    ['header'],
    ['nav'],
    ['div', 'nav-button test', 'Home'],
    ['div', 'nav-button', 'Menu'],
    ['div', 'nav-button', 'Location']
];
const footerArray = [
    ['footer']
];

// function definitions
function newElement(tag, addClass, content, id) {
    const element = document.createElement(tag);
    if (addClass) element.className = addClass;
    if (id) element.id = id;
    if (content) element.textContent = content;
    return element;
}

function createHeader(headerArray){
    let tagArray = [];
    for (const iterator of headerArray) {
        const newTag = newElement(...iterator);
        tagArray.push(newTag);
    }
    //const headerTag = newElement(...headerArray[0]);
    //const navTag = newElement(...headerArray[1]);
    //const homeTag = newElement(...headerArray[2]);
    //const menuTag = newElement(...headerArray[3]);
    //const aboutTag = newElement(...headerArray[4]);
    tagArray[1].appendChild(tagArray[2]);
    tagArray[1].appendChild(tagArray[3]);
    tagArray[1].appendChild(tagArray[4]);
    tagArray[0].appendChild(tagArray[1]);
    //navTag.appendChild(homeTag);
    //navTag.appendChild(menuTag);
    //navTag.appendChild(aboutTag);
    //headerTag.appendChild(navTag);
    return tagArray[0];
}
function createFooter(footerArray) {

}

const header = createHeader(headerArray);
const lotrDiv = document.querySelector(".lotr-bg-color");
lotrDiv.appendChild(header);
lotrDiv.appendChild(home.home);
export {newElement};