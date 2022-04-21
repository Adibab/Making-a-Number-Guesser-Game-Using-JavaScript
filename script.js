// Guess the num //
let min = 1;
let max = 10;
let randomNumber= randomNum(min, max);
let guessesLeft = 3;

//generate a random number between 1 to 10//
function randomNum(min, max){
    return Math.floor(Math.random()*(max -min +1));
}

//Getting the UI elements//
const game = document.querySelector('#game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessBtn = document.querySelector('#guess-btn'),
     guessInput = document.querySelector('#guess-input'),
     message = document.querySelector('.message'),
     loading = document.querySelector('#loading');
     
//Assign UI min & max
     minNum.textContent = min;
     maxNum.textContent = max;
   

// listen for guess 
guessBtn.addEventListener('click', function(e){
    let guess =  parseInt(guessInput.value);
    loading.style.display = 'block';
    

//set timeout after 2 Seconds
    setTimeout(function(){
        loading.style.display = 'none';
        
// validation
  if (isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}else{ 
// now if its valid number then go for the below steps
// if it's a GAME OVER(WIN)//
    if ( guess === randomNumber){ 
// if the guess is exactly equal to randomNumber that means win
    gameOver(true, `Your Guess is right! its a WIN`)

    }else{
// if it's a wrong guess that means// 
        guessesLeft -= 1; 
//if 3 times wrong guess that means GAME OVER (LOST)//   
        if (guessesLeft === 0){
        gameOver(false,`GAME OVER, You LOST. Correct number was ${randomNumber}`);
        }else{
//Try again
        setMessage(`WRONG GUESS,${guess} is not correct, ${guessesLeft} guesses left, Please Try again`, 'red');   
        }
    }
    }
    }   , 2000);
    e.preventDefault();
    });
//Message
function setMessage(text, color){
    message.textContent = text;
    message.style.color = color;
}
//Game Over
function gameOver( win, msg){
    let color;
    win === true? color ='green' : color = 'red';
//Disable input
guessInput.disabled = true;
// change Input field color
guessInput.style.borderColor = color;
// setmessage
setMessage(msg, color);

//Play Again
guessBtn.innerHTML ='Play Again';
guessBtn.className += ' play-again';

}

// Play again after finishing all attempts

game.addEventListener('mousedown', function(e){ //using mousedown instead of click becuse mousedown will wait to press the button n then it will refresh page
    if(e.target.classList.contains(`play-again`)){
        window.location.reload();
    }
})

















 