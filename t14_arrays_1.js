
/****************************
Name of task: Input from HTML
****************************/
console.log("Running t12_conditionals.js")
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
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const PRODUCT_FIELD= document.getElementById("productField");
const PRODUCT_PRICE = document.getElementById("productPrice");
const MONEY_FIELD = document.getElementById("moneyField");
const CHOOSE_FIELD = document.getElementById("chooseField");
const RATE_FIELD = document.getElementById("rateField");



console.log("Your name is " + userName);
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
    let userName = (NAME_FIELD.value);
    OUTPUT.innerHTML = "<p> Your name is " + userName + "</p>";
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userProduct = (PRODUCT_FIELD.value);
    OUTPUT.innerHTML += "<p> Your product is " + userProduct + "</p>" ;
    let userProductPrice = Number(PRODUCT_PRICE.value);
    OUTPUT.innerHTML += "<p> Your product price is " + userProductPrice + "</p>" ;
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p> You have $" + userMoney + "</p>";




if (18 > userAge){
    console.log("Definitely too young");
}
else if (18== userAge){ 
    console.log("You became an adult");
}
else{
    console.log("You are an adult.");
}

}

function calculateChange(_userProductPrice, _userMoney){
    let userProductPrice = Number(PRODUCT_PRICE.value);
    OUTPUT.innerHTML += "<p> Your product price is $" + userProductPrice + "</p>" ;
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p> You have $" + userMoney + "</p>";
    let productCost = Number(PRODUCT_PRICE.value);
    OUTPUT.innerHTML += "<p> your product costs $" + productCost + " and you have $" + userMoney + "</p>";
    let change= Number(userMoney - userProductPrice);
    OUTPUT.innerHTML += "<p> Your change is $" + change + "</p>";
if (change < 0){
    OUTPUT.innerHTML += "<p> You don't have enough money </p>";
}
else if (change == 0){
    OUTPUT.innerHTML += "<p> You don't have a change </p>";
}
else if (change > 0){
     OUTPUT.innerHTML += "<p> You have lots of change</p>";
    
}
    let choice = CHOOSE_FIELD.value;
    OUTPUT.innerHTML = "You chose: " + chocolateArray[choice] + "<br>";

    let choices = RATE_FIELD.value;
    OUTPUT.innerHTML = "You rated chocolate: " + chocolateArray[choices] +"/3" +"<br>";

}



