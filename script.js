const greetings = ['Hi', 'Greetings', 'Hola', 'Hello', 'What\'s up', 'Ciao']

const intro = [
    'Did you know that',
    'Facts you should know about Pewdiepie:',
    'You are STUPID to NOT know that',
    'It is important to know that',
    'I find it interesting that',
    'You have small PP if you don\'t know that',
    'You will not have a BROFIST if you don\'t know that',
]

const generateMessage = (facts) =>
{
    let greetIndex = Math.floor(Math.random() * greetings.length);
    let introIndex = Math.floor(Math.random() * intro.length);
    let factsIndex= Math.floor(Math.random() * facts.length);

    return greetings[greetIndex] + ', ' + intro[introIndex] + ' ' + facts[factsIndex];
}

const fs = require('fs');

fs.readFile('facts.txt', (err, data) => {
    if (err) throw err;

    let facts = data.toString().split('\n');
    
    console.log(generateMessage(facts));
})






