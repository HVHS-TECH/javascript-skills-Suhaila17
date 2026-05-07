/****************************
Name of task
****************************/

console.log("Running t02_variables.js")

// Variables
var userName= "Suhaila";
var userAge= 15;
var currentYear= 2026; 
var pocketMoney= 150;
var newMoney;
var birthYear= 2010;



/****************************
Main code
****************************/
console.log("Hi my name is " + userName);
console.log("As of  " + currentYear + " you are ", + userAge + " years old");
console.log("you were born in " + birthYear);
newAge= userAge+10
console.log("In 10 years you will be " + newAge + " years old ");
console.log("you have " + pocketMoney +" dollars");
newMoney= pocketMoney/2
console.log("You spend half of yor money now you have " + newMoney + " dollars ");
newMoney= pocketMoney/2+3
console.log("Then you get $3, now you have " + newMoney);

const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML +="<h2>Added by javascript</h2>";
OUTPUT.innerHTML +="<p>Hello " + userName + "</p>";
OUTPUT.innerHTML +="<p>Second graph line.</p>";
OUTPUT.innerHTML +="<p>Third graph line</p>";

/****************************
Functions
****************************/
function writeline(){
    // Add a line to html
}