// Stage 1 - User clicks a color and the game does an action the number of times the name of the color is long • 
// Stage 2 - User clicks a number and the game does an action that many times • 
// Stage 3 - User clicks a number and a random fortune appears


// Choose a color
// four bl
// four colors
// eight numbers 
// (2 sets of 4)
// ten fortunes

window.addEventListener('load', function() {
    console.log('begin');



const COLORS = ['red', 'yellow', 'green', 'blue'];

const FORTUNES = [
    'You are worth a fortune.', 
    'Hard work pays off in the future. Procrastination pays off now.',
    'A soft voice may be awfully persuasive.',
    'Not all those who wander are lost.',
    'Never forget a friend. Especially a friend who owes you money.',
    'He who laughs at himself never runs out of things to laugh at.',
    'All fortunes are wrong except this one.',
    'Advice, when most needed, is least heeded.',
    'Failure is the chance to do better next time.',
    'If you look back, you\'ll soon be going that way.'];


class FortuneTeller {
    constructor (colors, fortunes) {
this.colors = colors;
this.fortunes = fortunes;
    }

    // Pick a color. For each letter in color, do some animation
doColorLoop () { 
    console.log(this)


    let panels = document.querySelectorAll('.panel');
for (let i = 0, len = panels.length; i < len; ++i) {

    panels[i].removeEventListener('click', fortuneTeller.doColorLoop)
    panels[i].addEventListener('click', fortuneTeller.doNumberLoop)

}

};

// loop through some actions the amount of times as the number
doNumberLoop () {
    console.log('numer: ' + this)
    let panels = document.querySelectorAll('.panel');
    for (let i = 0, len = panels.length; i < len; ++i) {
    
        panels[i].removeEventListener('click', fortuneTeller.doNumberLoop)
        panels[i].addEventListener('click', fortuneTeller.doFinalChoice)
    
    }
};

// pick one more number
doFinalChoice () {

    console.log(fortuneTeller.getFortune());

    let panels = document.querySelectorAll('.panel');
    for (let i = 0, len = panels.length; i < len; ++i) {
    
        panels[i].removeEventListener('click', fortuneTeller.doFinalChoice)
        panels[i].addEventListener('click', fortuneTeller.doColorLoop)
    
    }

};

// Display random fortune
getFortune () {
return FORTUNES[Math.floor(Math.random() * 10)]; 
};

addClickEvents(e) {

}


addEventNumberLoop () {};

addEventFinalChoice() {};

}



let fortuneTeller = new FortuneTeller(COLORS, FORTUNES);


let panels = document.querySelectorAll('.panel');

for (let i = 0, len = panels.length; i < len; ++i) {

    panels[i].addEventListener('click', fortuneTeller.doColorLoop)
}








}, true);

