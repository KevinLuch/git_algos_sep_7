// Write a function that takes the base and height of a triangle and return its area

function triangleArea(base, height) {
    return base * height / 2
}

console.log(triangleArea(3, 2))
console.log(triangleArea(7, 4))
console.log(triangleArea(10, 10))

// ***************************************************************************

// Create a function that takes voltage and current and returns the calculated power
// Requires basic calculation of electrical circuits

function circuitPower(voltage, current) {
    return voltage * current 
}

console.log(circuitPower(230, 10))
console.log(circuitPower(110, 3))
console.log(circuitPower(480, 20))

// ***************************************************************************

// Create a function that takes two numbers as arguments and return their sum

const addition = (a, b) => a + b;

console.log(addition(3, 5))
console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))

// ***************************************************************************

// Create a function that takes two numbers as arguments and return their sum

function addition2(number1, number2) {
    return number1 + number2
}

console.log(addition(3, 5))
console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))

// ***************************************************************************

// Write a function that takes an integer minutes and converts it to seconds

function convert(minutes) {
    return minutes * 60
}

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))

// ***************************************************************************

// Write a function that takes an integer minutes and converts it to seconds

const convert2 = (minutes) => minutes * 60

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))


