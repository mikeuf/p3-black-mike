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

fortuneTeller.activePanel = this;
fortuneTeller.colorLength = fortuneTeller.getWordLength(fortuneTeller.activePanel);


// let timer = setInterval(fortuneTeller.fadeLoop(this), 300);



for (let i = 1; i <= fortuneTeller.colorLength; ++i ) {

console.log('i: ' + i);
  //  setTimeout(function() {SetOpacity(eID, opacity);}, timer * 30);

fortuneTeller.fadeLoop(i);
 

/*
setTimeout(function () {
    console.log('about to fade out');
    activePanel.classList.add('fade');
}, i * 250);

    setTimeout(function () {
        console.log('about to fade in');
     activePanel.classList.remove('fade');
    }, i * 500);
*/
}

}

fadeLoop(i){ 
    console.log('inside: ' +  i);
    console.log('fadeout time = ' + (i * 500));
        setTimeout(function() {  fortuneTeller.activePanel.classList.add('fade');}, i * 1000);
        console.log('fadein time = ' + (500 + (i * 500)));
        setTimeout(function() {  fortuneTeller.activePanel.classList.remove('fade');}, 500 + (i * 1000));
    }
    


/*
fadeLoop(e) {
    e.classList.add('fade');
    e.classList.remove('fade');
}
*/

getWordLength(element) {
    if (element.classList.contains('red')) { return 3;}
    else if (element.classList.contains('yellow')) { return 6;}
    else if (element.classList.contains('green')) { return 5;}
    else if (element.classList.contains('blue')) { return 4;}
    }



// loop through some actions the amount of times as the number
doNumberLoop () {
    console.log('numer: ' + this)
    let panels = document.querySelectorAll('.panel');
    for (let i = 0, len = panels.length; i < len; ++i) {
    
        panels[i].removeEventListener('click', fortuneTeller.doNumberLoop)
        panels[i].addEventListener('click', fortuneTeller.doFinalChoice)
    
    }
}

// pick one more number
doFinalChoice () {

    console.log(fortuneTeller.getFortune());

    let panels = document.querySelectorAll('.panel');
    for (let i = 0, len = panels.length; i < len; ++i) {
    
        panels[i].removeEventListener('click', fortuneTeller.doFinalChoice)
        panels[i].addEventListener('click', fortuneTeller.doColorLoop)
    
    }

}

// Display random fortune
getFortune () {
return FORTUNES[Math.floor(Math.random() * 10)]; 
}

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

