"use strict";

const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
const userNameInput = document.getElementById("UserName");

const gameForm = document.getElementById("gameForm");
const userInput = document.getElementById("userGuess");




let game;

class RockPaperScissorsGame {
    constructor() {
        this.arr = ["rock", "paper", "scissors"];
        this.randArr = this.arr[Math.floor(Math.random() * this.arr.length)];
        
    }

    guess (userInput) {
       return userInput;
        }
       
    }

userNameInput.focus();

startButton.addEventListener("click", function(startButtonClickEvent){
    startButtonClickEvent.preventDefault();

    welcomeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    game = new RockPaperScissorsGame();
});

gameForm.addEventListener("submit", function(gameFormSubmitEvent) {
    gameFormSubmitEvent.preventDefault();
    
    // const guess = userInput.value.toLowercase();
    const guess = userInput.value;
    // const didWin = game.guess(guess);
    console.log(this.randArr);
    var arr = ["rock", "paper", "scissors"];
    var randArr = arr[Math.floor(Math.random() * arr.length)];



    if((guess === "rock" || guess === "Rock") && randArr === "scissors") {
        var addSelections = document.createElement("p");
        var selectionsMessage = document.createTextNode(`You Won. You picked Rock. The Computer chose scissors.`);         // Create a text node
        addSelections.appendChild(selectionsMessage);                             
         // Append the text to <p>
        document.getElementById("history").appendChild(addSelections);
        setTimeout(function(){
            game = new RockPaperScissorsGame();
            
        }, 3000);
    } 
        if((guess === "scissors" || guess === "Scissors")  && randArr === "paper") {
            var addSelections = document.createElement("p");
            var selectionsMessage = document.createTextNode(`You Won. You picked Scissors. The Computer chose Paper`);         // Create a text node
            addSelections.appendChild(selectionsMessage);                             
            // Append the text to <p>
            document.getElementById("history").appendChild(addSelections);
            setTimeout(function(){
                game = new RockPaperScissorsGame();
                
            }, 3000);        
        }
        if((guess === "paper" || guess === "Paper")  && randArr === "rock") {
            var addSelections = document.createElement("p");
            var selectionsMessage = document.createTextNode(`You Won. You picked Paper. The Computer chose Rock`);         // Create a text node
            addSelections.appendChild(selectionsMessage);                            
              // Append the text to <p>
            document.getElementById("history").appendChild(addSelections);
            setTimeout(function(){
                game = new RockPaperScissorsGame();
                
            }, 3000);}
            if((guess === "rock" || guess === "Rock")  && randArr === "paper") {
                var addSelections = document.createElement("p");
                var selectionsMessage = document.createTextNode(`You Lost. You picked Rock. The Computer chose Paper`);         // Create a text node
                addSelections.appendChild(selectionsMessage);                              
                // Append the text to <p>
                document.getElementById("history").appendChild(addSelections);
                setTimeout(function(){
                    game = new RockPaperScissorsGame();
                    
                }, 3000);}
            if((guess === "scissors" || guess === "Scissors")  && randArr === "rock") {
                   var addSelections = document.createElement("p");
                    var selectionsMessage = document.createTextNode(`You Lost. You picked Scissors. The Computer chose Rock`);         // Create a text node
                    addSelections.appendChild(selectionsMessage);                             
                      // Append the text to <p>
                    document.getElementById("history").appendChild(addSelections);
                    setTimeout(function(){
                        game = new RockPaperScissorsGame();
                        
                  }, 3000);}
            if((guess === "paper" || guess === "Paper")  && randArr === "scissors") {
                        var addSelections = document.createElement("p");
                        var selectionsMessage = document.createTextNode(`You Lost. You picked Paper. The Computer chose Scissors`);         // Create a text node
                        addSelections.appendChild(selectionsMessage);                             
                         // Append the text to <p>
                        document.getElementById("history").appendChild(addSelections);
                        setTimeout(function(){
                            game = new RockPaperScissorsGame();
                            
               }, 3000);}
            if((guess === "rock" || guess === "Rock")  && randArr === "rock") {
                        var addSelections = document.createElement("p");
                        var selectionsMessage = document.createTextNode(`You Tied. You picked Rock. The Computer chose Rock`);         // Create a text node
                        addSelections.appendChild(selectionsMessage);                          
                         // Append the text to <p>
                        document.getElementById("history").appendChild(addSelections);
                        setTimeout(function(){
                            game = new RockPaperScissorsGame();
                            
                  }, 3000);}
            if((guess === "paper" || guess === "Paper")  && randArr === "paper") {
                        var addSelections = document.createElement("p");
                        var selectionsMessage = document.createTextNode(`You Tied. You picked Paper. The Computer chose Paper`);         // Create a text node
                        addSelections.appendChild(selectionsMessage);                              // Append the text to <li>
                        document.getElementById("history").appendChild(addSelections);
                        setTimeout(function(){
                            game = new RockPaperScissorsGame();
                            
                }, 3000);}
            if((guess === "scissors" || guess === "Scissors")  && randArr === "scissors") {
                         var addSelections = document.createElement("p");    
                        var selectionsMessage = document.createTextNode(`You Tied. You picked Scissors. The Computer chose Scissors`);         // Create a text node
                        addSelections.appendChild(selectionsMessage);                           
                         // Append the text to <p>
                        document.getElementById("history").appendChild(addSelections);
                        setTimeout(function(){
                            game = new RockPaperScissorsGame();
                            
                }, 3000);}
            else {
                        var addSelections = document.createElement("p");
                        var selectionsMessage = document.createTextNode(`Please Enter Rock, Paper, or Scissors.`);         // Create a text node
                        addSelections.appendChild(selectionsMessage);                              // Append the text to <li>
                        document.getElementById("history").appendChild(addSelections);

                 }
//     } else {
//         var numberOfLosses = 0;
//         numberOfLosses++;
//         console.log(numberOfLosses);
        
//         console.log(userInput.value);
//         const addSelections = document.createElement("p");                 // Create a <li> node
// const selectionsMessage = document.createTextNode(`You lost. You picked ${userInput}.The Computer chose ${this.randArr}.`);         // Create a text node
// addSelections.appendChild(selectionsMessage);                              // Append the text to <li>
// document.getElementById("history").appendChild(addSelections);
//         // wrongGuessAlert.classList.remove("hidden");
//         // wrongGuessAlert.innerText= `You picked ${userInput}. The Computer chose ${this.randArr}. You lost ${numberOfLosses} times`;
//         setTimeout(function(){
//             game = new RockPaperScissorsGame();
//         wrongGuessAlert.classList.add("hidden");           
//         }, 3000);
        
//     }
    
    // userInput.value = "";
    // userInput.focus();
})





