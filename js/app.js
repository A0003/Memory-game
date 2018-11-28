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
// Create cards

for (var i = 0; i < shuffledDeck.length; i++) {
  let card = document.createElement("li");
  card.classList.add('card')

  let icon = document.createElement("i");
  icon.classList.add('fa');
  icon.classList.add(shuffledDeck[i]);
  card.append(icon);

  domDeck.append(card);

// Card click event
card.addEventListener('click', function() {

    card.classList.add("open", "show")
    openCard.push(this);

    });

  };

// function checkForMatch() {
//if (openCard.length >= 2) {
  //do this

//} else {
  // do fail

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

let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
var interval;
function startTimer(){
  interval = setInterval(function(){
      timer.innerHTML = minute+"mins "+second+"secs";
      second++;
      if(second == 60){
          minute++;
          second=0;
      }
      if(minute == 60){
          hour++;
          minute = 0;
      }
  },1000);
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
