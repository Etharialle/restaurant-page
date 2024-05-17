import './style.css';
import * as index from './index.js';

const contentArray = [
    ['div',,,'content'],
    ['h1',, "Sam's Potato Diner"],
    ['hr'],
    ['div', 'main-text'],
    ['p',,"Welcome to Sam's Potato Diner! Here, we celebrate the humble spud, taking inspiration from the legendary hobbit, Samwise Gamgee. Just like Sam kept Frodo going on their long journey with his hearty potato creations, we bring you delicious and comforting potato dishes that will satisfy every craving."],
    ['img',,, 'diner-inside'],
    ['p',, "Sam understood the magic of a good potato. Simple yet versatile, it can be roasted, mashed, fried, boiled, and transformed into countless satisfying meals. Our menu reflects this variety, offering breakfast favorites like Potato Cakes with Poached Eggs and Smoked Salmon, to lunch classics like Sam's Famous Shepherd's Pie."],
    ['p',, "We also pay homage to the Shire with some menu items straight out of Tolkien's world. Craving something Bilbo would have enjoyed? Try our Second Breakfast Platter, a medley of potato hash, fried eggs, sausages, and toast. Feeling peckish for an elevenses snack? Grab a piping hot Potato and Leek Soup or a plate of our savory Potato Skins."],
    ['p',, "At Sam's Potato Diner, we believe in good, honest food made with fresh ingredients. Just like Sam nurtured Frodo with his culinary skills, we aim to nourish your body and soul with every delicious potato dish we serve. So come on in, grab a seat, and let us take you on a delightful potato adventure!"],
    ['p',, "P.S. We haven't forgotten about dessert! We offer a selection of potato-inspired sweets, because who says potatoes can't be part of a happy ending?"]
];


function createHome(contentArray) {
    let tagArray = [];
    //for (let i = 0; i < 10; i++) {
    //    const newTag = index.newElement(...contentArray[i]);
    //    tagArray.push(newTag);
    //}
    for (const iterator of contentArray) {
        const newTag = index.newElement(...iterator);
        tagArray.push(newTag);
    }
    //contentArray.forEach((element) => {
    //    const newTag = index.newElement(...element);
    //    tagArray.push(newTag);
    //});
    tagArray[3].appendChild(tagArray[4]);
    tagArray[3].appendChild(tagArray[5]);
    tagArray[3].appendChild(tagArray[6]);
    tagArray[3].appendChild(tagArray[7]);
    tagArray[3].appendChild(tagArray[8]);
    tagArray[3].appendChild(tagArray[9]);
    tagArray[0].appendChild(tagArray[1]);
    tagArray[0].appendChild(tagArray[2]);
    tagArray[0].appendChild(tagArray[3]);
    return tagArray[0];
}

const home = createHome(contentArray);

export {home};