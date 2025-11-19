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
}