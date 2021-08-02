const maxNumberInput = document.querySelector("#maxNumber-form input");
const guess = document.querySelector('#Guess');
const playBtn = document.querySelector('button')
const showResult = document.getElementById('show-result');
const report = document.querySelector('#report_chose');
const result = document.querySelector('#result');

function printResult(){
  showResult.classList.remove('hidden')
}

function handlePlayBtn(event){
  event.preventDefault()
  const maxNumber = maxNumberInput.value;
  const myGuess = guess.value;
  const intGuess = parseInt(myGuess);
  printResult()
  const randomNumber = Math.floor(Math.random() * maxNumber);
  report.innerText = `You chose ${myGuess}, the machine chose: ${randomNumber}`;
  if (intGuess === randomNumber){
    result.innerText = 'You Won!'
  } else {
    result.innerText = 'You Rose!'
  }
}

playBtn.addEventListener('click',handlePlayBtn);


