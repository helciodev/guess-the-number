'use strict';
const guessNumber = document.querySelector('.number');
const score = document.querySelector('.score');
let inputNumber = Number(document.querySelector('.guess').value);
const numToGuess = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
score.textContent = '150'
const btnCheck = document.querySelector('.check');

btnCheck.addEventListener('click', () => {
  
  if(!inputNumber) {
     message.textContent = 'there is no number 😴😛';
     document.querySelector('.guess').value = '';
  }else if ( inputNumber === numToGuess) {
    message.textContent = 'Correct number 👌🏽'
    document.querySelector('.guess').value = '';
  }else if (inputNumber > numToGuess) {
    message.textContent = 'number is higher than number to guess ☝🏽'
    document.querySelector('.guess').value = '';
  }else if (inputNumber < numToGuess) {
    message.textContent = 'number is lower than number to guess 👇🏽'
    document.querySelector('.guess').value = '';
  }
});

