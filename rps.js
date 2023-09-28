const container = document.querySelector('#container')

// Buttons 
const btn1 = document.querySelector('.rock')
const btn2 = document.querySelector('paper')
const btn3 = document.querySelector('scissors')

// Selectors for Other Elements
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const roundScore = document.querySelector('.round-score');
const finalScore = document.querySelector('.final-score');
const newGame = document.querySelector('.new-game');

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

// Set Variables 
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
const scoreToReach = 5;

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();
  const newLi = document.createElement('li')
  newLi.classList.add('newLi')
  if (
    (ps == "paper" && cs == "rock") ||
    (ps == "scissors" && cs == "paper") ||
    (ps == "rock" && cs == "scissors")
  ) {
    newLi.textContent = `You played ${ps} and Computer played ${cs}. You win!`;
    roundScore.appendChild(newLi);
    playerScore++
    player.textContent = playerScore;
  } else if (
    (cs == "paper" && ps == "rock") ||
    (cs == "scissors" && ps == "paper") ||
    (cs == "rock" && ps == "scissors")
  ) {
    newLi.textContent = `You played ${ps} and Computer played ${cs}. You lose!`;
    roundScore.appendChild(newLi);
    computerScore++;
    computer.textContent = computerScore;
  } else {
    newLi.textContent = `You played ${ps} and Computer played ${cs}. That's a tie!`;
    roundScore.appendChild(newLi);
  }
}


const btns = document.querySelectorAll('button')
btns.forEach((button) => {
  let choice = button.textContent;
  button.addEventListener("click", () => {
    if (!isGameOver) {
      playRound(choice, getComputerChoice());
      endGame();
    }
  });
});

newGame.addEventListener('click', () => {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  roundScore.textContent = '';
  player.textContent = '0';
  computer.textContent = '0';
  finalScore.textContent = '';
})

function endGame() {
  if (playerScore === scoreToReach || computerScore === scoreToReach) {
    isGameOver = true;
    
    if (playerScore === scoreToReach) {
      finalScore.textContent = 'You won! Yippeeee!';
    } else if (computerScore === scoreToReach) {
      finalScore.textContent = 'You lost! Bummer 😞'
    }
  }
}



/*
function game() {
    let rounds = 5;
    let winner = 0;
    for (i = 1; i <= rounds; i++) {
        let playerInput = prompt("Rock, Paper, Scissors?");
        let result = playRound(playerInput, getComputerChoice());
        console.log(`Round ${i}: ${result}`);

        if (result == 'You win!') {
            winner += 1
        }
    }
    
    if (winner > 3) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!')
    }
}

game();
*/
