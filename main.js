let qs = prompt("Shall we play Rock Paper Scissors?");

while (qs && qs.toLowerCase() === "yes") {
    let opt = Number(prompt("Choose your option \n 1.Rock \n 2.Paper \n 3.Scissors"));
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);

    if (opt >= 1 && opt <= 3) {
        let userChoice = choices[opt - 1];
        let computerChoice = choices[choice];
        alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);
        
        if (userChoice === computerChoice) {
            alert("It's a tie!");
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            alert("Yayyy! You won.");
        } else {
            alert("Ooops, better luck next time.");
        }

        qs = prompt("Do you want to play again? (yes/no)");
    } else {
        alert("Invalid choice. Thanks for playing!");
        qs = prompt("Do you want to play again? (yes/no)");
    }
}

alert("Thanks for playing!");
