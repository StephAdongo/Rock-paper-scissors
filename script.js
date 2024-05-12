 function  getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return "rock";
            case 1:
                return "paper";
                case 2:
                    return "scissors";
    }
 }
 const computerChoice = getComputerChoice();
 console.log(computerChoice);
 let humanScore = 0;
 let computerScore = 0;
 
    function playRound (humanChoice, computerChoice){
     humanChoice = humanChoice.toLowerCase();
     if (humanChoice === computerChoice) {
        console.log("Tie");
     }  
     else if (
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
     ) 
    {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats  ${humanChoice}`);
        computerScore++;
    }
    }

    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    const results = playRound(humanSelection, computerSelection);

   function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = prompt("Rock, Paper, or Scissors");
    
        playRound(humanChoice.toLowerCase(), computerChoice);
      }
    
      if (humanScore > computerScore) {
        console.log("You Win the Game!");
      } else if (computerScore > humanScore) {
        console.log("You Lose the Game!");
      } else {
        console.log("It's a Tie!");
      }
    }
    
    function getComputerChoice() {
    }
    playGame();
   
