let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return (choices[(Math.floor(Math.random() * 3))])
}
function playRound(playerSelection, computerSelection) {
    /*
        takes playerSelection -- Case insensitive 
        takes computerSelection
        Compares them. ==? &&?
        Rock < Paper, Rock > Scissors, Scissors > Paper
            Would we do this for every instance 
                Like... if ps == rock && cs == paper return "You lose"
    */
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps == 'paper' && cs == 'rock' || ps == 'scissors' && cs == 'paper' || ps == 'rock' && cs == 'scissors') {
        return 'You win!';
    } else if (cs == 'paper' && ps == 'rock' || cs == 'scissors' && ps == 'paper' || cs == 'rock' && ps == 'scissors') {
        return 'You lose!';
    } else {
        return 'It\'s a tie'
    }
}

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