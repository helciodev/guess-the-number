'use strict';
const guessNumber = document.querySelector('.number');
const score = document.querySelector('.score');
const inputNumber = document.querySelector('.guess');
const numToGuess = Math.floor(Math.random() * 20);
guessNumber.textContent = '34';
score.textContent = '150'
const btnCheck = document.querySelector('.btn.check')
btnCheck.addEventListener('click', () => {
  console.log(inputNumber.value)
});

document.addEventListener('keypress',(e) => {
  if (e.key === 'Enter'){
     console.log(inputNumber.value);
  console.log(numToGuess)
  }
}) 