let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let sumEl = document.querySelector(".sum-el");

let hasBlackjack = false;
let isAlive = true;
let cardsEl = document.querySelector(".cards-el");

let message = "";
let messageEl = document.querySelector(".message-el");

function gameState() {
  if (isAlive === true) {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = `Cards: ${cards}`;

    if (sum < 21) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackjack = true;
      restartGame();
    } else {
      message = "You're out of the game";
      isAlive = false;
    }

    messageEl.textContent = message;
  } else {
    return;
  }
}

function newCard() {
  if (isAlive === true) {
    let thirdCard = Math.floor(Math.random() * 10) + 2;
    sum = sum + thirdCard;

    cards.push(thirdCard);

    gameState();
  } else {
    return;
  }
}

function restartGame() {
  isAlive = true;
  hasBlackjack = false;

  cards = [
    (firstCard = Math.floor(Math.random() * 10) + 2),
    (secondCard = Math.floor(Math.random() * 10) + 2),
  ];
  sum = firstCard + secondCard;

  gameState();
}
