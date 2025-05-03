let score=JSON.parse(localStorage.getItem('score')) ||{
    Wins:0,
    Loses:0,
    Ties:0
};

function UpdateScore(){
    document.querySelector('.score').innerHTML=`Total score Wins:${score.Wins} Ties: ${score.Ties} Loses: ${score.Loses}`
}
UpdateScore()
let reset=()=>{
    score.Wins=0;
    score.Loses=0;
    score.Ties=0;
    localStorage.removeItem('score')
    UpdateScore()
}

/*
if (score===null){
    socre={
        Wins:0,
        Loses:0,
        Ties:0
    };
}
*/   
function playGame(palyerMove){
    
    const computerMove =randNumber()
    let result=''
    if (palyerMove==='Scissors'){
        if (computerMove==='Rock'){
            result='You Lose'
            console.log(result);
        }
        else if (computerMove==='Papper'){
            result='You Win'
            console.log(result);
        }
        else if (computerMove==='Scissors'){
            result='Tie'
            console.log(result);
        }
        
    }
    else if(palyerMove==='Papper') {
      
            if (computerMove==='Rock'){
                result='You Win'
                console.log(result);
            }
            else if (computerMove==='Papper'){
                result='Tie'
                console.log(result);
            }
            else{
                result='You Lose'
                console.log(result);
            }

    }
    else if (palyerMove==='Rock'){
        if (computerMove==='Rock'){
            result='Tie'
            console.log(result);
        }
        else if (computerMove==='Papper'){
            result='You Lose'
            console.log(result);
        }
        else if(computerMove==='Scissors'){
            result='You Win'
            console.log(result);
        }
    }
    if(result==='Tie'){
        score.Ties +=1
    }
    else if( result==='You Lose'){
        score.Loses+=1
    }
    else if(result==='You Win'){
        score.Wins+=1
    }
   
    localStorage.setItem('score',JSON.stringify(score))
    UpdateScore()
    document.querySelector('.results').textContent= `Result: ${result}`
    document.querySelector('.moves').innerHTML=`You <img src="Images/${palyerMove}.png" class="move-icon"><img src="Images/${computerMove}.png" alt="" class="move-icon">Computer`
    

}
let randNumber=()=>{
    let num=Math.floor(Math.random()*3)
    let computerMove=''
    if (num===0){
            computerMove='Rock';
    }
    else if (num===1){
        computerMove='Papper';
    }
    else{
        computerMove='Scissors';
    }
    console.log(computerMove);
    console.log(num);
    return computerMove

    
}