let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#User-score");
const compScorePara=document.querySelector("#Comp-score");

const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    //console.log("Game was draw.");
    msg.innerText="Game was a draw.Play Again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
       // console.log("You win !");
        msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("You lose.");
        msg.innerText=`You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }  

}

const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice=genCompChoice();
    //console.log("computer choice =",compChoice);
    

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper"?false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors"?false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock"? false : true;
        
        }
         showWinner(userWin,userChoice,compChoice);
        }
    }; 


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});



    