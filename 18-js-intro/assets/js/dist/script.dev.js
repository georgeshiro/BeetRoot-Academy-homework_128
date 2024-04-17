"use strict";

// Блок "Норма"
function task1() {
  var userName = prompt("What is your name?"); // alert(`Hello, ` + userName);

  alert("Hello, ".concat(userName, "!"));
}

function task2() {
  var birthYear = parseInt(prompt("Enter your birth year:")); // const currentYear = 2023;

  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  alert("You are ".concat(age, " years old"));
}

function task3() {
  var lengthOfASquare = parseInt(prompt("Enter length of the square in centimeters:"));
  var perimeterOfASquare = lengthOfASquare * 4;
  alert("Perimeter of a square is ".concat(perimeterOfASquare, " centimeters"));
}

function task4() {
  var circleRadius = parseInt(prompt("Enter a circle radius in centimeters:"));
  var circleArea = Math.PI * circleRadius ^ 2;
  alert("The circle area is ".concat(circleArea, " centimeters"));
}

function task5() {
  var distanceBetweenCities = parseInt(prompt("Enter a distance between two cities in km:"));
  var hoursForDistance = parseInt(prompt("Enter how many hours do you need for this distance"));
  var speedForRoad = distanceBetweenCities / hoursForDistance;
  alert("The speed of movementis is ".concat(speedForRoad, " km/h"));
}

function task6() {
  var dollarsForConvertation = parseInt(prompt("Enter how many dollars do you want to convert:"));
  var euroExchangeRateToDollars = 0.89;
  var dollarsInEuro = dollarsForConvertation * euroExchangeRateToDollars;
  alert("You will have ".concat(dollarsInEuro, " euros if you exchange ").concat(dollarsForConvertation, " dollars"));
}