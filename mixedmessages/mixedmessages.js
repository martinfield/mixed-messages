const mixedMessages = {
    characters: ['Gandalf', 'Spiderman', 'Catwoman', 'Arya Stark', 'Voldemort', 'Iron Man', 'Mario'],
    actionVerbs: ['looked across at their rival','pointed their weapon','struck a heroic pose', 'leaped into the air', 'floated over hauntingly', 'suited up'],
    spokenVerbs: ['shouted', 'whispered', 'cried', 'moaned', 'mumbled'],
    quotes: ["You shall not pass!", "I missed the part where that is my problem.", "Little birds should stay away from big bad kittycats.", "I know Death..He's got many faces. I look forward to seeing this one.", "Avada Kedavra!!!", "Its a-me!"],
    randomIndex(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    finalMessage() {
        return `${this.randomIndex(mixedMessages.characters)} ${this.randomIndex(mixedMessages.actionVerbs)} and ${this.randomIndex(mixedMessages.spokenVerbs)} "${this.randomIndex(mixedMessages.quotes)}"`;
    }
}
console.log(mixedMessages.finalMessage());