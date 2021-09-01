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


//function hadling human input
function humanChoice() {
    //ask the user via invasive popup for their tool
    let humanInput = prompt("Please ener your tool. (rock/paper/scissor)").toLowerCase();
    //recurse the hell out of wrong inputs intill a proper tool is entered
    switch (humanInput) {
        case "rock":
        case "paper":
        case "scissor":
            console.log("you chose: " + humanInput);
            return mapChoices[humanInput];

        default:
            console.log("invalid input, please try again.");
            return humanChoice();
            
    }

}

//game logic determining win, loss, draw.
function logic(computerChoice, humanInput) {
    /*    c o m p u t e r
            ---------------
        h|  
        u|
        m|   matrix :)
        a|
        n|

    */
    const arrayMatrix = [[0, 2, 1],
                         [1, 0, 2],
                         [2, 1, 0]];
    let roundState = arrayMatrix[humanInput][computerChoice];
    return roundState;
    

}
//determine length of game
function roundsCount() {
    let rounds = prompt("how many rounds will you endure?");
    return rounds;
}

//my main function
function gameStart() {
    
    let winCounter = 0;
    let lossCounter = 0;
    let roundsPlayed = 0;

    //for loop looping each round.

    for (let gamelength = roundsCount(); gamelength > 0; gamelength--) {
        //get the players' selection
        let humanSelection = humanChoice();
        let computerSelection = randomizer();
        
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
gameStart();