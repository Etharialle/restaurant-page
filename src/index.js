import './style.css';
import * as home from './home.js';
import * as menu from './menu.js';
import * as location from './location.js';

const headerArray = [
    ['header'],
    ['nav'],
    ['div', 'nav-button', 'Home', 'home-button'],
    ['div', 'nav-button', 'Menu', 'menu-button'],
    ['div', 'nav-button', 'Location', 'location-button']
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
    tagArray[1].appendChild(tagArray[2]);
    tagArray[1].appendChild(tagArray[3]);
    tagArray[1].appendChild(tagArray[4]);
    tagArray[0].appendChild(tagArray[1]);
    return tagArray[0];
}
function createFooter(footerArray) {

}

const header = createHeader(headerArray);
const lotrDiv = document.querySelector(".lotr-bg-color");
lotrDiv.appendChild(header);
lotrDiv.appendChild(home.home);


const buttons = document.querySelectorAll(".nav-button");

for (const iterator of buttons) {
    const container = document.querySelector("#content");
    iterator.addEventListener("click", () => {
        if (iterator.id === "menu-button") {
            lotrDiv.replaceChildren();
            lotrDiv.appendChild(header);
            lotrDiv.appendChild(menu.menu);
        } else if (iterator.id === "location-button") {
            lotrDiv.replaceChildren();
            lotrDiv.appendChild(header);
            lotrDiv.appendChild(location.location);
        } else {
            lotrDiv.replaceChildren();
            lotrDiv.appendChild(header);
            lotrDiv.appendChild(home.home);
        }
        
        /*
        if (iterator.id === "menu-button") {
            lotrDiv.replaceChild(menu.menu, container);
            console.log(iterator.id);
        } else if (iterator.id === "location-button") {
            lotrDiv.replaceChild(location.location, container);
            console.log(iterator.id);
        } else {
            lotrDiv.replaceChild(home.home, container);
            console.log(iterator.id);
        }
        */
    });
}

export {newElement};