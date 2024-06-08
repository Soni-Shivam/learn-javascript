'use strict';
let correctNumber;
let score;
let highscore = [0];

function reformat(backgroundColor, width, fontSize, textContent) {
  document.querySelector('body').style.backgroundColor =
    String(backgroundColor);
  document.querySelector('.number').textContent = textContent;
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').style.fontSize = fontSize;
}

function reset() {
  correctNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(`WOAH YOU FOUND THE HACK! The number is ${correctNumber}`);
  score = 20;
  reformat('#222', '15rem', '6rem', '?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').addEventListener('click', gameEngine);
  document.querySelector('.check').removeEventListener('click', reset);
  document.querySelector('.check').textContent = 'Check';
  document.querySelector('.message').textContent = 'Start guessing...';
}

reset();

function replay() {
  document.querySelector('.check').textContent = 'Replay? 😀';
  document.querySelector('.check').addEventListener('click', reset);
  highscore.push(score);
  highscore.sort();
  document.querySelector('.highscore').textContent =
    highscore[highscore.length - 1];
}

function gameEngine() {
  let newMessage;
  let inputNumber = Number(document.querySelector('.guess').value);
  if (score >= 1) {
    if (inputNumber == correctNumber) {
      newMessage = 'Yay, You guessed it right 🥳💃🎈';
      reformat('#60b347', '30rem', '6rem', correctNumber);
      replay();
    } else if (inputNumber > correctNumber) {
      newMessage = 'No! Guess Lower';
      score--;
    } else if (inputNumber < correctNumber) {
      newMessage = 'No! Guess Higher';
      score--;
    }
    document.querySelector('.message').textContent = newMessage;
    document.querySelector('.score').textContent = score;
  } else if (score == 0) {
    reformat(
      '#ff3300',
      '80rem',
      '2rem',
      'YOU LOSE😭 The correct number was ' + correctNumber
    );
    replay();
  } else {
    console.log('arey bas kar!');
  }
}

document.querySelector('.again').addEventListener('click', reset);
