import './style.css';
import * as index from './index.js';

const menuArray = [
    ['div',,,'content'],
    ['h1',, "Sam's Potato Diner"],
    ['hr'],
    ['div', 'main-text'],
    ['h2',,'Menu'],
    ['div', 'item'],
    ['div', 'item-top'],
    ['div', 'item-name', 'Potato Cakes and Poached Egg'],
    ['div', 'item-price', '5 dollarbucks'],
    ['div', 'item-description', "These golden-crusted pancakes are made from a fluffy mix of mashed potatoes, scallions, and a touch of cheese. Pan-fried to crispy perfection, they are crowned with perfectly poached eggs, a dollop of creamy hollandaise sauce, and a sprinkle of fresh chives. A delightful and protein-packed way to start your day."],
    ['div', 'item'],
    ['div', 'item-top'],
    ['div', 'item-name', 'Second Breakfast Platter'],
    ['div', 'item-price', '10 dollarbucks'],
    ['div', 'item-description', "A hobbit's heart (and stomach) will rejoice! This hearty platter features a base of crispy potato hash seasoned with onions, peppers, and herbs. Two sunny-side up eggs rest on top, alongside plump sausages and a slice of toasted sourdough bread. A perfect way to refuel for any adventure, big or small."]
];


function createMenu(menuArray) {
    let tagArray = [];
    for (const iterator of menuArray) {
        const newTag = index.newElement(...iterator);
        tagArray.push(newTag);
    }

    // appends for each item
    tagArray[6].appendChild(tagArray[7]);
    tagArray[6].appendChild(tagArray[8]);
    tagArray[5].appendChild(tagArray[6]);
    tagArray[5].appendChild(tagArray[9]);

    tagArray[11].appendChild(tagArray[12]);
    tagArray[11].appendChild(tagArray[13]);
    tagArray[10].appendChild(tagArray[11]);
    tagArray[10].appendChild(tagArray[14]);
    
    tagArray[0].appendChild(tagArray[1]);
    tagArray[0].appendChild(tagArray[2]);
    tagArray[0].appendChild(tagArray[3]);
    tagArray[0].appendChild(tagArray[4]);
    tagArray[0].appendChild(tagArray[5]);
    tagArray[0].appendChild(tagArray[10]);

    return tagArray[0];
}

const menu = createMenu(menuArray);

export {menu};