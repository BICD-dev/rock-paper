//refactoring using jquery
//user's choice
let userChoice;
//selecting neccesaery elements
$(".item").click(function() { 
    userChoice = $(this).attr("id");
    play();
});

//output section
// let output = document.querySelector(".display");
let user = document.querySelector(".user");
let computer = document.querySelector(".comp")
//computer array
let aiArray = ["scissors", "paper", "rock"];

const info = {
    scissors: {
        killer: "rock",
        win: " You have cut through the paper barrier!! You win",
        lost: "You have been smashed!! You lost"
    },
    rock: {
        killer: "paper",
        win: "Rock splits open the blades of scissors!! You win",
        lost: "Your hard rock was wrapped in soft folds!! You lost"
    },
    paper: {
        killer: "scissors",
        win: "Your soft folds have covered a hard rock!! You win",
        lost: "The scissors cut through the paper!! You lost"
    }
}
//score tally
let userScore = 0;
let compScore = 0;
let wins = 0;
let losses = 0;
let message;
//function to play
function play(){
    //choosing a random element in aiArray
    if (compScore > 4) {
        losses += 1;
        compScore = 0;
    }
    if (userScore > 4) {
        wins += 1;
        userScore = 0;
    }
    let randomChoice =aiArray[Math.trunc(Math.random()*3)];
    const {killer, win, lost} = info[userChoice];
    if (userChoice === randomChoice) {
        message = "It's a tie"
    }
    else if (randomChoice === killer) {
        message = lost;
        compScore += 1;
    }
    else {
        message = win;
        userScore += 1;
    }
    $(".display").html(`<p>You chose ${userChoice}. The computer chose ${randomChoice}.<br/>  ${message}</p>`);
    $(".user").html(`Your Score : ${userScore}`);
    $(".comp").html(`Computer Score  : ${compScore}`);
    $(".wins").html(`Your Score : ${wins}`);
    $(".losses").html(`Computer Score  : ${losses}`);
   
}
