'use strict';
'use strict';
const guessNumber = document.querySelector('.number');
const score = document.querySelector('.score');
const inputNumber = document.querySelector('.guess');
const numToGuess = Math.floor(Math.random() * 20);
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
let initialScore = 20;

console.log(numToGuess)
btnCheck.addEventListener('click', () => {
  if(Number(inputNumber.value) === 0) {
    message.textContent = 'No, Number!';
  }else if(Number(inputNumber.value) === numToGuess){
    message.textContent = 'Correct 🙌🏽🎉🍾🎊';
  }else if(Number(inputNumber.value) < numToGuess){
    initialScore -= 1;
   lose('Too low 👇🏽')
  }else if(Number(inputNumber.value) > numToGuess){
    initialScore -= 1;
   lose('Too high 👆🏽')
  }
  console.log(Number(inputNumber.value))
});


function lose(write) {
  if(initialScore > 1) {
    score.textContent = initialScore;
    message.textContent = write;
  }else {
    message.textContent = 'You lose the game 💩'
    score.textContent = 0
  }
}
