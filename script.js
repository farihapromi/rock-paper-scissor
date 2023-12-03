

const score= JSON.parse(localStorage.getItem('score'))|| {
    win:0,
    losses:0,
    tie:0,
  };
// if(!score){
//   score={
//     win:0,
//     losses:0,
//     tie:0,
//   }
// }
updateScore()



function playGame(playerMove){
  const computerMove=pickComputerMove();
let result='';
if(playerMove==='scissor'){
  if(computerMove==='rock'){
result='you lose'
}else if(computerMove==='paper'){
result='you win'
}
else if(computerMove==='scissor'){
result='tie'
}

}
else if (playerMove==='paper'){
  if(computerMove==='rock'){
result='you win'
}else if(computerMove==='paper'){
result='tie'
}
else if(computerMove==='scissor'){
result='you lose'
}

}
else if(playerMove=='rock'){
  if(computerMove==='rock'){
result='tie'
}else if(computerMove==='paper'){
result='you win'
}
else if(computerMove==='scissor'){
result='you lose'
}
}
if(result==='you win'){
  score.win+=1;
}
else if(result==='you lose'){
  score.losses+=1;
}
else if(result==='tie'){
  score.tie+=1;
}
localStorage.setItem('score',JSON.stringify(score))
updateScore()
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=` you 
<img src="${playerMove}-emoji.png" alt="" class="move-icon">
<img src="${computerMove}-emoji.png" alt="" class="move-icon">
computer`


alert(`You have picked ${playerMove} .Computer picked ${computerMove}. the result is ${result}
wins:${score.win}, losses:${score.losses},tie:${score.tie}
`)

}

//update on console
function updateScore(){
    document.querySelector('.js-score')
.innerHTML=`wins:${score.win}, losses:${score.losses},tie:${score.tie}`


}
let computerMove='';
  function pickComputerMove(){


    const randomNumber=Math.random();

if(randomNumber>=0 && randomNumber<1/3){
computerMove='rock';
}else if(randomNumber>=1/3 && randomNumber<2/3){
computerMove='paper';
}else if(randomNumber>=2/3 && randomNumber<1)
{
 computerMove='scissor'
}
console.log(computerMove);
return computerMove;

  }


