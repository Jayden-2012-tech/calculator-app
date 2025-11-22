<<<<<<< HEAD
// picks the display elements from html
const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

// funtion to add user input(numbers or operators) to the display
function appendToDisplay(input) {
    //adds the pressed value to the expression
    expressionDisplay.textContent += input;
}

// funtion clear both expression and result from the display
function clearDisplay() {
    expressionDisplay.textContent = "";
    resultDisplay.textContent = "";
}

// funtion to evaluate the expression and display the result
function calculate() {
    try {
        // evaluate the calculation safely
        const result = eval(expressionDisplay.textContent);
        // show the calculated result
        resultDisplay.textContent = result;
    } catch (error) {
        // show error message if expression is invalid
        resultDisplay.textContent = "Error";
    }
=======
const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
function appendToDisplay(input) {
    expressionDisplay.textContent += input;
}
function clearDisplay() {
    expressionDisplay.textContent = "";
    resultDisplay.textContent = "";
}
function calculate() {
    try {
        const result = eval(expressionDisplay.textContent);
        resultDisplay.textContent = result;
    } catch (error) {
        resultDisplay.textContent = "Error";
    }
>>>>>>> 3f0d115f28b02ea11ad2d7381049b5ece001cd01
}