const choiceBtn=document.querySelectorAll('.choice');
const yourChoice=document.querySelector('#user-choice');
const comChoice=document.querySelector('#computer-choice');
const winner=document.querySelector('#winner');




const computerGenerate=()=>{
    const optionList=['rock','paper','scissors'];
    const randomIndex=Math.floor(Math.random()*3);
    return optionList[randomIndex];
}



const showWinner=(userWin)=>{
    if (userWin) {
        winner.innerText=`Winner: You`;
        winner.style.color="green";
    }else{
        winner.innerText=`Winner: Computer`;
        winner.style.color="deepskyblue";
    }
}

const drawGame=()=>{
 console.log("Game is Draw!");
 winner.innerText=`Game was Draw!`;
 winner.style.color="chocolate";
}



const playGame=(userChoice)=>{
    let computerChoice=computerGenerate();
    let userWin=true;
    yourChoice.innerText=`You chose: ${capitalize(userChoice)}`;
    comChoice.innerText=`Computer chose: ${capitalize(computerChoice)}`;
        
    if (userChoice===computerChoice) {
        drawGame();
    }else{
        if (userChoice==="rock") {
            userWin = computerChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = computerChoice==="scissors" ? false : true;
        }else{
            userWin = computerChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }

}



choiceBtn.forEach((val)=>{  
    val.addEventListener('click',()=>{
        const userChoice=val.getAttribute('id');
        playGame(userChoice);
    });
});

const capitalize=(str)=>{
    return str.toUpperCase();
}


