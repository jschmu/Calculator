const title = document.getElementById('title')
    title.addEventListener('click', (e) => {
        e.target.style.color = 'blue';
    });

let num1;
let num2;
let operator;
let opArray = [];
let array1 = [];
let displayValue;

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
    let result;
    switch (op) {
        case '+':
            result = add(num1, num2);
            screenContent.textContent = result;
            opArray[0] = result;
            opArray.pop();
            array1 = [];
            console.log(opArray);
            break;
        case '-':
            result = subtract(num1, num2);
            screenContent.textContent = result;
            opArray[0] = result;
            opArray.pop();
            array1 = [];
            console.log(opArray);
            break;
        case '*':
            result = multiply(num1, num2);
            screenContent.textContent = result;
            opArray[0] = result;
            opArray.pop();
            array1 = [];
            console.log(opArray);
            break;
        case '/':
            result = divide(num1, num2);
            screenContent.textContent = result;
            opArray[0] = result;
            opArray.pop();
            array1 = [];
            console.log(opArray);
            break;
            default:
                console.log('try again');
    }
};

const screenContent = document.querySelector('.screen');

const numButtons = document.querySelectorAll('.num');

numButtons.forEach(numButton => numButton.addEventListener('click', () => {
    if(opArray.length == 2) {
        array1.push(numButton.innerHTML);
        displayValue = Number(array1.join('')) //
        screenContent.textContent = displayValue;
    } else { //is this right?
        array1.push(numButton.innerHTML);
        displayValue = Number(array1.join(''))
        screenContent.textContent = displayValue;
    }
}));

const opButtons = document.querySelectorAll('.op');

opButtons.forEach(opButton => opButton.addEventListener('click', () => {
    if (opArray.length == 0) {
        opArray[0] = displayValue 
        opArray[1] = opButton.innerHTML;
        console.log(opArray);
        array1 = [];
    } else if (opArray.length == 2) {
        opArray[2] = displayValue;
        operate(opArray[0], opArray[2], opArray[1]); //when this is called use it to create array values that can be accessed in the next lines
        opArray[1] = opButton.innerHTML;
    } else if (opArray.length == 1) {
      
    }
}));

const eqButton = document.querySelector('.equal');

eqButton.addEventListener('click', () => {
    if (opArray.length = 2) {
        opArray[2] = displayValue;
        operate(opArray[0], opArray[2], opArray[1]);
    }
})

let contents = title.innerHTML;