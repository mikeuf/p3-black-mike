// Stage 1 - User clicks a color and the game does an action the number of times the name of the color is long • 
// Stage 2 - User clicks a number and the game does an action that many times • 
// Stage 3 - User clicks a number and a random fortune appears


// Choose a color
// four bl
// four colors
// eight numbers 
// (2 sets of 4)
// ten fortunes


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

document.querySelectorAll('.panel').forEach(e => {
    e.addEventListener('click', (e) => {
        this.onClickColorPanel();
});
});

}

// Pick a color. For each letter in color, do some animation
onClickColorPanel () { 

    console.log(this.getFortune());

    document.querySelectorAll('.panel').forEach(e => {
        e.addEventListener('click', (e) => {
            this.onClickFirstNumberPanel();
    });
    });
}

// loop through some actions the amount of times as the number
onClickFirstNumberPanel () {}

// pick one more number
onClickSecondNumberPanel () {}

// Display random fortune
getFortune () {
return this.fortunes[Math.floor(Math.random() * 10)];  
}
}

window.addEventListener('load', function() {
   
let fortuneTeller = new FortuneTeller(COLORS, FORTUNES);


}, true);

