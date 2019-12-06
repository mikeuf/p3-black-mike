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


fortuneTeller.activePanel = this;
fortuneTeller.colorLength = fortuneTeller.getWordLength(fortuneTeller.activePanel);


// let timer = setInterval(fortuneTeller.fadeLoop(this), 300);



let currentPanel = 1;
  panels.forEach((panel) => {
  setTimeout(function() {panel.classList.add('fade');}, 
  (fortuneTeller.colorLength * 1000));
  setTimeout(function() {
      console.log(panel.childNodes[1]);
      panel.removeChild(panel.childNodes[1]);
      let newNumber = document.createElement('h3');
      let text =  document.createTextNode(currentPanel);
      newNumber.appendChild(text);
      panel.appendChild(newNumber);
      panel.setAttribute('id', 'panel-' + currentPanel)

      console.log('attaching to ' + panel.id);
    panel.removeEventListener('click', fortuneTeller.doColorLoop)
    panel.addEventListener('click', fortuneTeller.doNumberLoop)
    currentPanel++;
  }, (fortuneTeller.colorLength * 1000 + 500));
  setTimeout(function() {panel.classList.remove('fade');}, 
  (fortuneTeller.colorLength * 1000 + 1000));


  });
  for (let i = 0; i < fortuneTeller.colorLength; ++i ) {


fortuneTeller.rotateLoop(i); 
}




}

fadeLoop(i){ 
    console.log('inside: ' +  i);
    console.log('fadeout time = ' + (i * 500));
        setTimeout(function() {  fortuneTeller.activePanel.classList.add('fade');}, (i * 500));
        console.log('fadein time = ' + (500 + (i * 500)));
        setTimeout(function() {  fortuneTeller.activePanel.classList.remove('fade');}, 500 + (i * 500));
    }

    rotateLoop(i){ 
        let panels = document.querySelectorAll('.panel');
        panels.forEach((panel) => {
        
        switch (panel.id) {
            case 'upper-left':
                    setTimeout(function() {  panel.classList.add('rotate-upper-left');}, (i * 1000));
                    setTimeout(function() {  panel.classList.remove('rotate-upper-left');}, 500 + ((i * 1000)));
         
                

                    break;
            case 'upper-right':
                    setTimeout(function() {  panel.classList.add('rotate-upper-right');}, (i * 1000));
                    setTimeout(function() {  panel.classList.remove('rotate-upper-right');}, 500 + ((i * 1000)));


                    break;
            case 'lower-left':
                    setTimeout(function() {  panel.classList.add('rotate-lower-right');}, (i * 1000));
                    setTimeout(function() {  panel.classList.remove('rotate-lower-right');}, 500 + ((i * 1000)));
               

                    break;
            case 'lower-right':
                    setTimeout(function() {  panel.classList.add('rotate-lower-left');}, (i * 1000));
                    setTimeout(function() {  panel.classList.remove('rotate-lower-left');}, 500 + ((i * 1000)));
          

                    break;
        }
       

   
        });
        
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
    console.log('numer: ' + this.id)

    let panels = document.querySelectorAll('.panel');
    for (let i = 0, len = panels.length; i < len; ++i) {
    
        panels[i].removeEventListener('click', fortuneTeller.doNumberLoop)
        panels[i].addEventListener('click', fortuneTeller.doFinalChoice)
    
    }
    fortuneTeller.activePanel = this;

    const NUMBER_PATTERN = /^(?:.*)(\d)$/;
let panelNumber = this.id.match(NUMBER_PATTERN);

fortuneTeller.fadeLoop(panelNumber[1]);
   
   
 
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

