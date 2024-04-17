// Блок "Норма"
function task1() {
    const userName = prompt("What is your name?");
    // alert(`Hello, ` + userName);
    
    alert(`Hello, ${userName}!`);
}

function task2() {
    const birthYear = parseInt(prompt("Enter your birth year:"));
    // const currentYear = 2023;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    alert(`You are ${age} years old`);
}

function task3() {
    const lengthOfASquare = parseInt(prompt("Enter length of the square in centimeters:"));
    const perimeterOfASquare = lengthOfASquare * 4;
    alert(`Perimeter of a square is ${perimeterOfASquare} centimeters`);
}

function task4() {
    const circleRadius = parseInt(prompt("Enter a circle radius in centimeters:"));
    const circleArea = Math.PI * circleRadius^2;
    alert(`The circle area is ${circleArea} centimeters`);
}

function task5() {
    const distanceBetweenCities = parseInt(prompt("Enter a distance between two cities in km:"));
    const hoursForDistance = parseInt(prompt("Enter how many hours do you need for this distance"));
    const speedForRoad = distanceBetweenCities / hoursForDistance;
    alert(`The speed of movementis is ${speedForRoad} km/h`);
}

function task6() {
    const dollarsForConvertation = parseInt(prompt("Enter how many dollars do you want to convert:"));
    const euroExchangeRateToDollars = 0.89;
    const dollarsInEuro = dollarsForConvertation * euroExchangeRateToDollars;
    alert(`You will have ${dollarsInEuro} euros if you exchange ${dollarsForConvertation} dollars`);
}
