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

/****************************
Functions
****************************/


function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value; 
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
}

function getFormInput(){
    const AGE_FEILD = document.getElementById("ageField");
    let userAge = AGE_FEILD.value;
    OUTPUT.innerHTML = "<p> Your age is" + userAge + "</p>";
}

function getFormInput(){
    const MONEY_FEILD = document.getElementById("moneyField");
    let userMoney = MONEY_FEILD.value;
    OUTPUT.innerHTML = "<p> you have $" + userMoney + "</p>";
}



