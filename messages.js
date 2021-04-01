//create a random number
function createRandomNumber(num){
    return Math.floor(Math.random()*num)
};
// Stores messages that will randomly generate in the program by peoples
const messageData = {
    verb: ['kick', 'sleep', 'fart', 'whistle', 'wash', 'drink'],
    noun: ['bear', 'mirror', 'toe', 'tea cup', 'flower', 'hat'],
    ingVerb: ['running', 'spitting', 'clucking', 'burping', 'spooning', 'cooking'],
    number: ['1', '54,377', '12', 'three million', '0.55', '36'],
    secondNoun: ['tooth', 'cat', 'shirt', 'chair', 'stick', 'tomato'],
    insperationMessages:['Inspire','Freedom','dream','fly','motivate','believe','happy'],
};
// Stores final message result to be printed in array.
let storeMessages = [];

// Iterate over the object.or create a condition which take words from above and store value in new array.
//create randomIndex for select randomally words from above.
for(let word in messageData) {
let randomIndex = createRandomNumber(messageData[word].length);

// Take the object's properties to create a message and add it to the storeMessages array.
switch(word){
    case 'verb':
        storeMessages.push(`They say that to properly ${messageData[word][randomIndex]}`)
        break;
    case 'noun':
        storeMessages.push(`They say that to properly ${messageData[word][randomIndex]} you must first`)
        break;
    case 'ingVerb':
        storeMessages.push(`They say that to properly ${messageData[word][randomIndex]} it`)
        break;
    case 'number':
        storeMessages.push(`They say that to properly ${messageData[word][randomIndex]} times`)
        break;
    case 'secondNoun':
        storeMessages.push(`They say that to properly ${messageData[word][randomIndex]}`)
        break;
    case 'insperationMessages':
        mstoreMessages.push(`They say that to properly ${messageData[word][randomIndex]} inspere you`)
        break;
        default:
            storeMessages.push('Please provide more words to complete the MadLib.')
}

};
// Format the storeMsg message
function formatStoreMsg(storeMsg) {
    const compiled = storeMessages.join('');
    console.log(compiled);
};

// Print final result
formatStoreMsg(storeMessages);