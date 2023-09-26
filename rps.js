const container = document.querySelector('#container')

const btn1 = document.createElement("button");
btn1.textContent = "Rock";
container.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.textContent = "Paper";
container.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.textContent = "Scissors";
container.appendChild(btn3);

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
    return "You win!";
  } else if (
    (cs == "paper" && ps == "rock") ||
    (cs == "scissors" && ps == "paper") ||
    (cs == "rock" && ps == "scissors")
  ) {
    return "You lose!";
  } else {
    return "It's a tie";
  }
}


const btns = document.querySelectorAll('button')
btns.forEach((button) => {
  let choice = button.textContent;
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
