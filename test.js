var prompt = require("prompt-sync")();

/*
//Skapa ett program som skriver texten Hello World in i konsolen.
console.log("Hello world")

//övning 2
console.log("Once upon a time")
console.log("I was falling in love")
console.log("Now Im only falling apart")

//övning 3 
console.log("Once upon a time, I was falling in love,Now I'm only falling apart")

//övning 4
var text = "Live and Sleep!";
console.log(text);

var name = "Ada Lovelace";
console.log("Hej " + name + "!")

//övning 5
var prompt = require("prompt-sync")();
//var prompt = ps();

let name1 = prompt("Enter your name: ");
console.log(name1);
//övning 7
let input = prompt("Give me an input, so can i 3x it!: ");
console.log(input);
console.log(input);
console.log(input);
//övning 8
let name2 = prompt("What's your name?: ");
console.log("Hello " + name2);
//övning 9 
console.log("Hello, how are you?");
prompt();
console.log("That's interesting, tell me more");
prompt();
console.log("Thank you for sharing!");
//övning 10
console.log("I will tell you a story, but first I need some information");
console.log("Give me a name");
let character = prompt();
let job = prompt("Give me a job the person will have: ");
//Övning 26, Skapa ett program som ber om ett heltal som representerar ett år. Om heltal är mindre än 1900 skriv "Du är gammal".
let age = prompt("Hur gammal är du?: ");
if(25 < age){
    console.log("Du är gammal");
}
else{
    console.log("Du är ganska ung");
}
// Övning 27 
let number = prompt("Ge mig ett nummer så får jag se om det är positivt: ");
if(number > 0 ){
    console.log("Ja det ör positivt");
} 
else{
    console.log("nej det är negativt");
}
//Övning 28
let age1 = prompt("Hur gammal är du?");
if(age1 > 18){
    console.log("You're an adult!");
}
else{
    console.log("You're under age");
}
//Problem 1
 console.log("Give me an array!");
 var num1 = prompt();
 var num2 = prompt();
 var num3 = prompt();
 var num4 = prompt();
 

 const numbers = ["num1", "num2", "num2", "num4"];
 numbers.sort(function(a, b){return a - b});
console.log(number);

// Miniprojekt
var anwser = 50;

console.log("Welcome to Guess The Number! Try to guess the number which is between 0 and 100. You have 10 tries. Good luck!");
var guess = prompt("What's your guess?: ");
 for(i=0; i < 10 ; i++){
    if( guess == 50){
        console.log("you guessed correctly");
        break;
    }
    else{
        guess = prompt("Du har försökt " + i + " gånger ,please try again: ");
    }
 } 
*/


 //Miniräknar spelet 
 //Frågor om vilka tal
const nummer1 = parseFloat(prompt("Skriv in första talet här: "));
const nummer2 = parseFloat(prompt("Skriv in andra talet här: "));
let resultat = 0;
//operator 
const operator = prompt("Slå in operatör(+,-,*,/)");

if(isNaN(nummer1) || isNaN(nummer2)){
    console.log("opps, skriv in ett tal tack");
}
else{
    if(operator == '+'){
        resultat = nummer1 + nummer2;
    }else if(operator == '-'){
        resultat = nummer1 - nummer2;
    }else if(operator == '/'){
        resultat = nummer1 / nummer2;
    }else if(operator == '*'){
        resultat = nummer1 * nummer2;
    }
    console.log(nummer1 + operator + nummer2 + " = " + resultat);
}