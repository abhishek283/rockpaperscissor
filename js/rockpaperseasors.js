var compare=function(choice1,choice2){
     if(choice1 === choice2){
         return"The result is a tie!";
     }
     else if(choice1 === "rock"){
         if(choice2 === "scissors"){
             return "rock wins";
         }
         else{
             return "paper win";
         }
     }
     else if(choice1 === "paper"){
         if(choice2 === "scissors"){
             return "scissors wins";
         }
         else{
             return "paper wins";
         }
     }
     else{
         if(choice2 === "paper"){
             return "scissors wins";
         }
         else{
             return "rock wins";
         }
     }
}
var selection=function(){
var userChoice = document.getElementById('choice').value;
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
window.document.getElementById("result").innerHTML = "Your Choice: " +  userChoice+ "</br>" +"Computer Choice: "+ computerChoice + "</br>" + compare(userChoice,computerChoice);
}