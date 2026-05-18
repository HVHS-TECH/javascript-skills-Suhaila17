
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
const NAME_FIELD = document.getElementById("NameField");
const AGE_FIELD = document.getElementById("AgeField");
const MONEY_FIELD = document.getElementById("MoneyField");


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
/****************************
Functions
****************************/

function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p> Your name is " + userName + "</p>";
    let userAge = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userMoney = MONEY_FIELD.value;
    OUTPUT.innerHTML += "<p> You have $" + userMoney + "</p>";
}