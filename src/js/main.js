const display = document.getElementById('screen');
const buttons = document.querySelectorAll('.number');


function appendToScreen(value) {

    // gets the last input by the user
    let lastUserInput = display.value.slice(-1);

    // console.log(lastUserInput);

    // prevent operators at the beginning
    if ((value == "%" || value == "/" || value == "*" || value == "+" || value == "-" || value == ".") && display.value === "") return

    // prevent multiple operators in a row
    if ((lastUserInput == "%" || lastUserInput == "/" || lastUserInput == "*" || lastUserInput == "+" || lastUserInput == "-" || lastUserInput == ".") && display.value.includes(value) && (value == "%" || value == "/" || value == "*" || value == "+" || value == "-" || value == ".")) return

    // replace the last operator with the new one if two operators are entered consecutively
    if ((lastUserInput == "%" || lastUserInput == "/" || lastUserInput == "*" || lastUserInput == "+" || lastUserInput == "-" || lastUserInput == ".") && (value == "%" || value == "/" || value == "*" || value == "+" || value == "-" || value == ".")) {
        display.value = display.value.slice(0, -1);
    }

    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function calculateResult() {
    display.value = eval(display.value);

}

function calcSqrt() {
    display.value = Math.sqrt(display.value);
}
