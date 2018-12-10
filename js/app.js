/*
 * Create a list that holds all of your cards
 */
 let deck = ['fa-bolt', 'fa-bolt', 'fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor','fa-anchor', 'fa-cube','fa-cube', 'fa-leaf','fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb'];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


  let shuffledDeck = shuffle(deck);
  const domDeck = document.querySelector('.deck');
  domDeck.innerHTML = "";

  let openCard = [];

  let winningNumber = 0;

  let second = 0, minute = 0; hour = 0;
  let timer = document.querySelector(".timer");
  var interval;

  let num = 0;

function startGame () {
// Create cards
  for (var i = 0; i < shuffledDeck.length; i++) {
    let card = document.createElement("li");
    card.classList.add('card')
    card.setAttribute("data-card", shuffledDeck[i]);

  let icon = document.createElement("i");
  icon.classList.add('fa');
  icon.classList.add(shuffledDeck[i]);
  card.append(icon);

  domDeck.append(card);


// Card click event
  card.addEventListener('click', function() {

    card.classList.add("open", "show");
    openCard.push(this);

      checkForMatch();
      increaseMoves();
      setTimeout();


    });

  };

};
startGame();

// Check for a match
function checkForMatch() {
 if (openCard.length == 2) {
   //do this
   if (openCard[0].dataset.card == openCard[1].dataset.card) {
     for (var i = 0; i < openCard.length; i++) {
       openCard[i].classList.add('match', 'open', 'show');
     }
     openCard = [];
     winningNumber++;
      win();
      console.log(winningNumber);
   } else {
     // do fail
     setTimeout(function () {
       for (var i = 0; i < openCard.length; i++) {
         openCard[i].classList.remove('open', 'show');
       }
       openCard = [];
      }, 1000);
    }
  }

// Winner
function gameWinner() {
 if (winningNumber === 8) {

     console.log("Win!");
    }
  };
 };
gameWinner();
startTimer();


//Win message
function win() {
  //document.getElementByClassName("winner");
};

 // console.log(card.querySelector('i').classList.value)

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

  }

// Set timer
function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}
restartGame();

// Moves counter
function increaseMoves() {
    num++;
      document.querySelector('.moves').innerHTML = num;

}

//Restart game
let restart = document.querySelector('.fa fa-repeat');

restart.addEventListener('click', function() {

        startGame();
});
