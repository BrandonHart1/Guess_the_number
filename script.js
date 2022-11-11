'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// ----- showing the number instead of the question mark -----
// ----- Math.trunc returns the integer part of a number by removing any fractional digits. -----

// ---- Check the number entered upon click ----
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // ---- subtract a point from the score for incorrect guesses ----

  // ---- if no guess is made ----
  if (!guess) {
    displayMessage('No number!');

    // -------- Correct number guessed --------
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    // -------- Display the number after correct number is given --------
    document.querySelector('.number').textContent = secretNumber;

    // -------- Change the background color to green with correct number --------
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // -------- Show the new high score -------
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // -------- Number is entered is too high --------
    // -------- When guess is wrong --------
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose.  Please try again!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'You lose.  Please try again!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   // -------- Number guessed is too low -------
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     // -------- Exceeded number of guesses --------
    //     document.querySelector('.message').textContent =
    //       'You lose.  Please try again!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

// -------- Reset after "Again" is clicked --------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
