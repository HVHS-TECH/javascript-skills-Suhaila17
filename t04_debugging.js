console.log("to4_debugging.js");

//variables
var lenght = 8;
var width = 10;
var area = 80;
var perimeter = 36; 


// Display the results
console.log("A area of a piece of paper with a length of " + lenght + " and a width of " + width + " is "+ area);
console.log("The same piece of paper has a perimeter of "+perimeter);

// Check, does this result look sensible
if (perimeter < area){
    console.log("Yay, your area is larger, this is right for this example");
}

else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}
