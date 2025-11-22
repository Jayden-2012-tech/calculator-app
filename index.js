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
}