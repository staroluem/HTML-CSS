let currentInput = ''; 
let operator = ''; 
let previousInput = '';

function appendNumber(number) {
    currentInput += number; 
    updateDisplay(); 
}

function setOperator(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculateResult();
    }

    operator = op; 
    previousInput = currentInput; 
    currentInput = ''; 
    updateDisplay(); 
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return; 

    const prev = parseFloat(previousInput); 
    const current = parseFloat(currentInput); 
    let result = 0; 

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                alert("Cannot divide by zero!!");
                clearDisplay(); 
                return;
            }
            break;
        default:
            alert("Invalid operator");
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = ''; 
    updateDisplay(); 
}

// Function to clear the display
function clearDisplay() {
    currentInput = ''; 
    previousInput = ''; 
    operator = ''; 
    updateDisplay(); 
}

function updateDisplay() {
    if (previousInput !== '' && operator !== '') {
        document.getElementById('display').value = previousInput + ' ' + operator + ' ' + currentInput;
    } else {
        document.getElementById('display').value = currentInput; 
    }
}

// Function to calculate the square of the number
function calculateSquare() {
    if (currentInput === '') {
        alert('Please enter a number first.');
        return;
    }

    const num = parseFloat(currentInput);
    if (isNaN(num)) {
        alert('Please enter a valid number.');
        return;
    }

    const square = num * num;
    currentInput = square.toString(); 
    updateDisplay(); 
}
