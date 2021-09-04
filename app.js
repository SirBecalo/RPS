//rock paper scissor game..
//helper dictionaries for functions
const mapState = {0:"draw", 1:"win", 2:"loss"};
const mapChoices = {"rock":0, "paper":1, "scissor":2}

//function responible for computer choice
function randomizer() {
    let choices = ["rock", "paper", "scissor"];
    //chooses a random decimal from 0(inclusive) to 1(exclusive)
    randomDecimal = Math.random();
    //changes the random to 0/1/2
    randomChoice = Math.floor(randomDecimal*3);
    //finds the tool associated with the number choosen, and prints it.
    let computerChoice = choices[randomChoice];
    console.log(computerChoice);
    //return the random number (0/1/2)
    return randomChoice;
}

//game logic determining win, loss, draw.
function logic(humanInput, computerChoice) {
    
    const arrayMatrix = [[0, 2, 1],
                         [1, 0, 2],
                         [2, 1, 0]];
            let result = arrayMatrix[humanInput][computerChoice];
            console.log("logic result: " + result);
            return result;
    
    

}
//hardcoded game length
function roundsCount() {
    return 5;
}

//the DOM variables:
let tools = document.querySelectorAll(".tool");
let rock = document.querySelector("#rock");     
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let divOutput = document.querySelector("#status");
let pcCounter = 0;
let youCounter = 0;
let containerSize = getComputedStyle(document.querySelector('#containerOfThree'));
let scoreBoard = document.querySelector("#scoreBoard");



function doRound(e){
    if(!e.target.closest('.tool')) return;
    let target = e.target.closest('.tool');
    let humanChoice = mapChoices[target.id]
    let randomChoice = randomizer();
    let result = logic(humanChoice, randomChoice);
    let roundResult = mapState[result];
    let you = document.querySelector("#scoreYou");
    let pc = document.querySelector("#scorePc");
    

    switch (roundResult) {
        case "win":
            divOutput.innerText = 'What a Glorious Smashing!';
            divOutput.style.backgroundColor="lightgreen";
            setTimeout(() => {
                divOutput.style.backgroundColor="#afc2cb";  
            }, 300);
            youCounter++;
            break;
        case "loss":
            divOutput.innerText = "booooo! lost round!";
            divOutput.style.backgroundColor="red";
            setTimeout(() => {
                divOutput.style.backgroundColor="#afc2cb";
            }, 300);
            pcCounter++;
            break;
        default:
            divOutput.innerText = "Draw?! :O";
            divOutput.style.backgroundColor="white";
            setTimeout(() => {
                divOutput.style.backgroundColor="#afc2cb";
            }, 300);
            break;
    }
    you.innerText=youCounter;
    pc.innerText=pcCounter;
    return result;

}

divOutput.innerText = "Choose Your Weapon!"

tools.forEach(tool => {
    tool.addEventListener('mouseover', event => {
      tool.classList.add("selected");
    });
    tool.addEventListener('mouseout', event => {
        tool.classList.remove("selected");
      });
  });


  document.addEventListener('click', doRound);







/*

//my main function
function gameStart() {
    
    let winCounter = 0;
    let lossCounter = 0;
    let roundsPlayed = 0;

    //for-looping each round.

    for (let gamelength = roundsCount(); gamelength > 0; gamelength--) {
        //get the players' selection
        let humanSelection = humanChoice();
        let computerSelection = randomizer();
        //print out the round quote
        roundResult = mapState[logic(computerSelection, humanSelection)];
        switch (roundResult) {
            case "win":
                winCounter += 1;
                console.log('What a Glorious Smashing!');
                break;
            case "loss":
                console.log("booooo! lost round!");
                lossCounter +=1;
                break;
            default:
                console.log("Draw?! :O");
                break;
        }
        roundsPlayed += 1;
    }
    
    //game status
    let state;
    if (lossCounter < winCounter){
        state = "Game Won! HORRAY!";

    } else if (lossCounter > winCounter) {
        state = "Game Lost! BOO!"
    } else{
        state = "What a BORING DRAW.."
    }
    console.log("Game Ended. You Won " + winCounter + " rounds." + "\n" + state );
}
*/