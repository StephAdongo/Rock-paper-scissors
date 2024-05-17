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
 
 
    function playRound (playerSelection){
    const humanChoice = humanChoice.toLowerCase();
     const results = playRound(playerSelection);
    const computerChoice = getComputerChoice();
    const humanSelection = "rock";
    const resultDiv = document.getElementById("results");

     if (humanChoice === computerChoice) {
        resultDiv.textContent = ("Tie");
     }  
     else if (
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
     ) 
    {
    resultDiv.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
    }
    else {
        resultDiv.textContent = (`You lose! ${computerChoice} beats  ${humanChoice}`);
        computerScore++;
    }
    updateScoreboard();
    checkWinner();
    }
    let humanScore = 0;
    let computerScore = 0;
    function updateScoreboard () {
      document.getElementById("humanScore").textContent = humanScore;
      document.getElementById("computerScore").textContent = computerScore;
    }
     
      function checkWinner () {
        
    if (humanScore === 5) {
      alert("You Win the Game!");
      resetGame();
    } else if (computerScore === 5) {
      alert("You Lose the Game!");
      resetGame();
    } else {
      alert("It's a Tie!");
    }
  }
    function resetGame () {
      humanScore = 0;
      computerScore = 0;
      updateScoreboard();
      document.getElementById("results").textContent = "";
    }
    
<<<<<<< HEAD
    

    const rockButton= document.getElementById("rockButton");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rockButton.addEventListener("click", () => playRound("rock"));
    paper.addEventListener("click", () => playRound("paper"));
    scissors.addEventListener("click", () => playRound("scissors"));

=======
    function getComputerChoice() {
    }
    playGame();
>>>>>>> 18f8d68439700a508eb37010f3289a326ed2ae2c
   
