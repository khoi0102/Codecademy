console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput==='paper'||userInput==='scissors'){
return userInput;
}else{
console.log('Error');
  }
}

const getComputerChoice =() =>{
var num = Math.floor(Math.random()*3);
if (num===0)
{
return 'rock';
}
else if (num===1)
{
  return 'paper';
}
else if (num===2){
  return 'scissors';
}
}

const determineWinner  = (userChoice,computerChoice) =>{
if (userChoice===computerChoice)
{
  return 'It was a tie';
}
if (userChoice === 'rock')
{
  if(computerChoice==='paper')
  {
    return 'Computer win';
  }
  else 
  {
    return 'User Win'
  }
}
if (userChoice === 'paper')
{
  if(computerChoice==='rock')
  {
    return 'User win';
  }
  else
  {
    return 'Computer Win'
  }
}
if (userChoice === 'scissors')
{
  if(computerChoice==='paper')
  {
    return 'User win';
  }
  else
  {
    return 'Computer Win'
  }
}
}

function playGame()
{
  const userChoice=getUserChoice('rock')
  const computerChoice=getComputerChoice();

  console.log(`User choice ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`)

  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
