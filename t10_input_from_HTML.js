
/****************************
Name of task: Input from HTML
****************************/
console.log("Running t10_input_from_HTML.js")
//Variables
var userName= "Suhaila";
var userAge= 15;
var currentYear= 2026; 
var pocketMoney= 150;
var newMoney;
var birthYear= 2010;

/****************************
Main
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("NameField");
const AGE_FIELD = document.getElementById("AgeField");
const PRODUCT_PRICE_FIELD = document.getElementById("MoneyField");
function start(){
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

    
    OUTPUT.innerHTML= "<h2>Added by JavaScript</h2>";
    OUTPUT.innerHTML += "<h2>Hello " + myName + "!</h2>";
    OUTPUT.innerHTML += "<h2>Second Paragraph line</h2>";
    OUTPUT.innerHTML += "<h2>Third Paragraph Line</h2>";
    welcome();
    displayProduct("Chocolate", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", 2.50);
    getFormInput();
}
/****************************
Functions
****************************/
function welcome(){
    OUTPUT.innerHTML += "<p>Welcome to My shop</p>";  
}

function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + " costs $" + _price + "</p>";
}

function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p> Your name is " + userName + "</p>";
    let userAge = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userMoney = MONEY_FIELD.value;
    OUTPUT.innerHTML += "<p> You have $" + userMoney + "</p>";
}