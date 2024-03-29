// Stage 1 - User clicks a color and the game does an action the number of times the name of the color is long • 
// Stage 2 - User clicks a number and the game does an action that many times • 
// Stage 3 - User clicks a number and a random fortune appears


window.addEventListener('load', function() {
    
  
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
      'If you look back, you\'ll soon be going that way.'
    ];
  
  
    class FortuneTeller {
      constructor(colors, fortunes) {
        this.colors = colors;
        this.fortunes = fortunes;
      }
  
      // Pick a color. For each letter in color, do some animation
      doColorLoop() {
  
  
        let panels = document.querySelectorAll('.panel');
  
  
        fortuneTeller.activePanel = this;
        fortuneTeller.colorLength = fortuneTeller.getWordLength(
          fortuneTeller.activePanel);
    
  
  // This sequence is synced with the rotate animation so the fade and add a new event listener
        let currentPanel = 1;
        panels.forEach((panel) => {
          setTimeout(function() {
              panel.classList.add('fade');
            },
            (fortuneTeller.colorLength * 1000));
          setTimeout(function() {
            panel.removeChild(panel.childNodes[1]);
            let newNumber = document.createElement('h3');
            let text = document.createTextNode(currentPanel);
            newNumber.appendChild(text);
            panel.appendChild(newNumber);
            panel.setAttribute('id', 'panel-' + currentPanel)
  
            panel.removeEventListener('click', fortuneTeller
              .doColorLoop)
            panel.addEventListener('click', fortuneTeller
              .doNumberLoop)
            currentPanel++;
          }, (fortuneTeller.colorLength * 1000 + 500));
          setTimeout(function() {
              panel.classList.remove('fade');
            },
            (fortuneTeller.colorLength * 1000 + 1000));
  
  
        });
        for (let i = 0; i < fortuneTeller.colorLength; ++i) {
  
  
          fortuneTeller.rotateLoop(i);
        }
  
  
        document.querySelector('#status-messages p').innerText =
          'Now, click a number!';
  
      }
  
      fadeLoop(numberSize) {
  
        for (let i = 0; i < numberSize; ++i) {
  
          setTimeout(function() {
            fortuneTeller.activePanel.classList.add('fade');
          }, i * 1000);
          setTimeout(function() {
            fortuneTeller.activePanel.classList.remove('fade');
          }, 500 + i * 1000);
        }
      }
  
      rotateLoop(i) {
        let panels = document.querySelectorAll('.panel');
        panels.forEach((panel) => {
  
          switch (panel.id) {
            case 'upper-left':
              setTimeout(function() {
                panel.classList.add('rotate-upper-left');
              }, (i * 1000));
              setTimeout(function() {
                panel.classList.remove('rotate-upper-left');
              }, 500 + ((i * 1000)));
  
  
  
              break;
            case 'upper-right':
              setTimeout(function() {
                panel.classList.add('rotate-upper-right');
              }, (i * 1000));
              setTimeout(function() {
                panel.classList.remove('rotate-upper-right');
              }, 500 + ((i * 1000)));
  
  
              break;
            case 'lower-left':
              setTimeout(function() {
                panel.classList.add('rotate-lower-right');
              }, (i * 1000));
              setTimeout(function() {
                panel.classList.remove('rotate-lower-right');
              }, 500 + ((i * 1000)));
  
  
              break;
            case 'lower-right':
              setTimeout(function() {
                panel.classList.add('rotate-lower-left');
              }, (i * 1000));
              setTimeout(function() {
                panel.classList.remove('rotate-lower-left');
              }, 500 + ((i * 1000)));
  
  
              break;
          }
  
  
  
        });
  
      }
  
      // fire panels away after getting fortune -- just for fun
  
      flingPanels() {
        let panels = document.querySelectorAll('.panel');
        panels.forEach((panel) => {
  
          switch (panel.id) {
            case 'panel-1':
              panel.classList.add('slide-upper-left');
  
            case 'panel-2':
              panel.classList.add('slide-upper-right');
            case 'panel-3':
              panel.classList.add('slide-lower-left');
            case 'panel-4':
              panel.classList.add('slide-lower-right');
  
  
  
  
          }
  
  
  
        });
  
      }
  
  

  
      getWordLength(element) {
        if (element.classList.contains('red')) {
          return 3;
        } else if (element.classList.contains('yellow')) {
          return 6;
        } else if (element.classList.contains('green')) {
          return 5;
        } else if (element.classList.contains('blue')) {
          return 4;
        }
      }
  
  
  
      // loop through some actions the amount of times as the number
      doNumberLoop() {
        fortuneTeller.activePanel = this;
  
        const NUMBER_PATTERN = /^(?:.*)(\d)$/;
        let panelNumber = this.id.match(NUMBER_PATTERN);
  
        fortuneTeller.fadeLoop(panelNumber[1]);
  
        document.querySelector('#status-messages p').innerText =
          'Click another number!';
  
        let panels = document.querySelectorAll('.panel');
        for (let i = 0, len = panels.length; i < len; ++i) {
  
          panels[i].removeEventListener('click', fortuneTeller.doNumberLoop)
          panels[i].addEventListener('click', fortuneTeller.doFinalChoice)
  
        }
  
  
  
  
      }
  
      // pick one more number
      doFinalChoice() {
        document.querySelector('#status-messages p').innerText = '"' +
          fortuneTeller.getFortune() + '"';
  
  
        fortuneTeller.flingPanels();
        let panels = document.querySelectorAll('.panel');
        for (let i = 0, len = panels.length; i < len; ++i) {
  
          panels[i].removeEventListener('click', fortuneTeller
            .doFinalChoice)
          panels[i].addEventListener('click', fortuneTeller.doColorLoop)
  
        }
  
      }
  
      // Display random fortune
      getFortune() {
        return FORTUNES[Math.floor(Math.random() * 10)];
      }
  
  
    }
  
  
  
    let fortuneTeller = new FortuneTeller(COLORS, FORTUNES);
  
  
    let panels = document.querySelectorAll('.panel');
  
    for (let i = 0, len = panels.length; i < len; ++i) {
  
      panels[i].addEventListener('click', fortuneTeller.doColorLoop)
    }
  
  
  
  
  }, true);