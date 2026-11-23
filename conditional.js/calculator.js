//1: Simple Calculator using switch-case

let num1 = 10;
let num2 = 3;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Addition =", num1 + num2);
        break;

    case "-":
        console.log("Subtraction =", num1 - num2);
        break;

    case "*":
        console.log("Multiplication =", num1 * num2);
        break;

    case "/":
        console.log("Division =", num1 / num2);
        break;

    case "%":
        console.log("Remainder =", num1 % num2);
        break;

    default:
        console.log("Invalid operator");
}















