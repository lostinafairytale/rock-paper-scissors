const container = document.querySelector('#container')

const btn1 = document.querySelector('.rock')

const btn2 = document.querySelector('paper')

const btn3 = document.querySelector('scissors')

const div = document.createElement("div");
container.appendChild(div);

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (
    (ps == "paper" && cs == "rock") ||
    (ps == "scissors" && cs == "paper") ||
    (ps == "rock" && cs == "scissors")
  ) {
    return "Player!";
  } else if (
    (cs == "paper" && ps == "rock") ||
    (cs == "scissors" && ps == "paper") ||
    (cs == "rock" && ps == "scissors")
  ) {
    return "Computer!";
  } else {
    return "Tie";
  }
}


const btns = document.querySelectorAll('button')
btns.forEach((button) => {
  let choice = button.textContent;
  let rounds = 5
  let winner = 0
  let loser = 0
  button.addEventListener("click", () => {
    div.textContent = playRound(choice, getComputerChoice());
  });
});




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
