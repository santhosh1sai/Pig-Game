'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// rolling the dice
btnRoll.addEventListener('click', function () {
  // creating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Dispaly dice roll
  diceEl.classList.remove('hidden');
  //   diceEl.src = `dice-${dice}.png`;
  diceEl.src = `https://github.com/santhosh1sai/Pig-Game/blob/main/dice-${dice}.png`;

  // check for rolled 1 switch player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    // switch to next player
  }
});
