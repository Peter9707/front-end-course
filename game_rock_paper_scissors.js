function play() {
    const choices = ["rock", "paper", "scissors"];
    
    
    let computerChoiceIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[computerChoiceIndex];
    
    
    let userChoiceIndex = Math.floor(Math.random() * choices.length);
    let userChoice = choices[userChoiceIndex];
    
    
    if (computerChoice === userChoice) {
      console.log("Computer choice: " + computerChoice);
      console.log("User choice: " + userChoice);
      console.log("It's a tie!");
    } else if (
      (computerChoice === "rock" && userChoice === "scissors") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "scissors" && userChoice === "paper")
    ) {
      console.log("Computer choice: " + computerChoice);
      console.log("User choice: " + userChoice);
      console.log("Computer wins!");
    } else {
      console.log("Computer choice: " + computerChoice);
      console.log("User choice: " + userChoice);
      console.log("User wins!");
    }
  }
  
  
  play();