const title = document.getElementById('title')
    title.addEventListener('click', (e) => {
        e.target.style.color = 'blue';
    });

let num1 = 8;
let num2 = 2;
let operator;
let opArray = [];

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function(num1, num2, op) { //should this be generic or num1 and num2?
    switch (op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
            default:
                console.log('try again');
    }
};

let array1 = [];

let displayValue;

const screenContent = document.querySelector('.screen');

const numButtons = document.querySelectorAll('.num');

numButtons.forEach(numButton => numButton.addEventListener('click', () => {
    array1.push(numButton.innerHTML);
    displayValue = Number(array1.join(''))
    screenContent.textContent = displayValue;
}));

const opButtons = document.querySelectorAll('.op');

opButtons.forEach(opButton => opButton.addEventListener('click', () => {
    opArray[0] = displayValue; 
    opArray[1] = opButton.innerHTML;
    opArray[2] = 4;
    console.log(opArray.length);
}));

let contents = title.innerHTML;

