let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
 return Math.floor(Math.random()*9);
}

const compareGuesses = (userGuess,computerGuess,secrectTargetNumber) => {
    const diff1 = Math.abs(userGuess-secrectTargetNumber);
    const diff2 = Math.abs(computerGuess-secrectTargetNumber);
    if (diff1<diff2 || diff1===diff2)
    {
        return true;
    }
    else if (diff1>diff2)
    {
        return false;
    }
    
}
const updateScore = (winner) => {
    if (winner === 'human')
    {
        humanScore++;
    }
    else
    {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
