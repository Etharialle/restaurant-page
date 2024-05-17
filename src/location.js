import './style.css';
import * as index from './index.js';

const locationArray = [
    ['div',,,'content'],
    ['h1',, "Sam's Potato Diner"],
    ['hr'],
    ['div', 'main-text'],
    ['h2',,'Locations'],
    ['div','content main-text'],
    ['p',, 'Join us at one of our two locations, Hobbiton and Ithilien'],
    ['img',,,'map']
    
];


function createLocation(locationArray) {
    let tagArray = [];
    for (const iterator of locationArray) {
        const newTag = index.newElement(...iterator);
        tagArray.push(newTag);
    }
    tagArray[5].appendChild(tagArray[6]);
    tagArray[5].appendChild(tagArray[7]);
    tagArray[0].appendChild(tagArray[1]);
    tagArray[0].appendChild(tagArray[2]);
    tagArray[0].appendChild(tagArray[3]);
    tagArray[0].appendChild(tagArray[4]);
    tagArray[0].appendChild(tagArray[5]);
    

    return tagArray[0];
}

const location = createLocation(locationArray);

export {location};