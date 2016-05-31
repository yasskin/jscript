
//Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. Pass these as arguments to a function that returns a sentence combining all of this information. Then display the returned string with an alert.//

var age = prompt("What is your age?");
var name = prompt("What is your name?");
var food = prompt("What is your favorite food?");

var saySomething = function(whatToSay) {
	alert(whatToSay);
};

var outputText = "You are " + age + " and your name is " + name + " and your favorite food is " + food + " .";
saySomething(outputText);






var saySomething = function(whatToSay) {
	alert(whatToSay);
};

var multiply = function(number1, number2, number3) {
	return number1 * number2 * number3;
};

var result = multiply(10, 5, 10);
var outputText = "The sum is " + result + ".";
saySomething(outputText);



var saySomething = function(remainder) {
	alert(remainder);
};

var inputDivisors = function(number1, number2) {
	return number1 / number2;
};

var result = inputDivisors(10, 3)
var outputText = "The remainder is " + result + ".";
saySomething(outputText);
