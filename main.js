let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let cards = [firstCard, secondCard];
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCardEl = document.querySelector("#new-btn");

let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards:" + " " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum:" + " " + sum;

  if (sum <= 20) {
    message = "Do you want to draw new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 6;
  sum += card;
  renderGame();
}
