const display = document.getElementById('screen');



function appendToScreen(value) {
    display.value += value;
    
}

function clearScreen() {
    display.value = '';
}

function calculateResult() {
        display.value = eval(display.value);

}