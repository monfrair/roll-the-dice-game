'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// diceEl.classList.add('hidden');

// rolling the dice functionality
btnRoll.addEventListener('click', function () {
  // 1 generate random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // 2 show the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3 check if 1 was rolled, if yes switch user

  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // CHANGE LATER - need to display for current player.
  } else {
    // switch to next player
    switchPlayer();
  }
});

// hold button press to preserver score function
btnHold.addEventListener('click', function () {
  // 1 add current score to active players score
  scores[activePlayer] += currentScore;
  // 2 check to see if score is already 100 - if so finish game
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 3 switch to other player
  switchPlayer();
});
