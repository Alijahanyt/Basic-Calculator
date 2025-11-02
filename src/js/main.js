const display = document.getElementById('screen');
const buttons = document.querySelectorAll('button');


function appendToScreen(value) {
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