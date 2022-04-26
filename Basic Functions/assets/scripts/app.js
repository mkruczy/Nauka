const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult += +userInput.value;
    outputResult(currentResult, '');
}

function subtract() {
    currentResult -= userInput.value;
    outputResult(currentResult, '');
}

function multiply() {
    currentResult *=userInput.value;
    outputResult(currentResult,'');
}

function divide() {
    currentResult /= userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide);