const characters = ['Gandalf', 'Spiderman', 'Catwoman', 'Arya Stark', 'Voldemort']
const actionVerbs = ['looked across at their rival','pointed their weapon','struck a heroic pose', 'leaped into the air', 'floated over hauntingly']
const spokenVerbs = ['shouted', 'whispered', 'cried', 'moaned', 'mumbled']
const quotes = ["You shall not pass!", "I missed the part where that is my problem.", "Little birds should stay away from big bad kittycats.", "I know Death..He's got many faces. I look forward to seeing this one.", "Avada Kedavra!!!"]

const randomIndex = array => {
    return array[Math.floor(Math.random() * array.length)];
}

let character = randomIndex(characters);
let actionVerb = randomIndex(actionVerbs);
let spokenVerb = randomIndex(spokenVerbs);
let quote = randomIndex(quotes)

const mixedMessage = `${character} ${actionVerb} and ${spokenVerb} "${quote}"`;

console.log(mixedMessage);