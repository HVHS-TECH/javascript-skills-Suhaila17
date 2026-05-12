console.log("Running t10_input_from_HTML.js")

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

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
function start() {
OUTPUT.innerHTML = "";
OUTPUT.innerHTML +="<h2>Added by javascript</h2>";
OUTPUT.innerHTML +="<p>Hello " + userName + "</p>";
OUTPUT.innerHTML +="<p>Second graph line.</p>";
OUTPUT.innerHTML +="<p>Third graph line</p>";
welcome();
displayProduct("chocolate", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.50);
}

const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;

/****************************
Functions
****************************/
function welcome(){
    // Add a line to the html page
    OUTPUT.innerHTML += "<p>Welcome to the shop<p>";
}

function displayProduct(_name, _price){
    // Add a line to the html page
    OUTPUT.innerHTML += "<p> " + _name + " costs:  $ " + _price + "<p>";
}