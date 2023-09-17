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

    if (ps == 'paper' && cs == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (ps == 'scissors' && cs == 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (ps == 'rock' && cs == 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (cs == 'paper' && ps == 'rock') {
        return 'You lose! Paper beats Rock'
    } else if (cs == 'scissors' && ps == 'paper') {
        return 'You lose! Scissors beat Paper'
    } else if (cs == 'rock' && ps == 'scissors') {
        return 'You lose! Rock beats Scissors'
    } else {
        return 'It\'s a tie'
    }
}

