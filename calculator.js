// Initializing variables needed in the operations.
var a = 0, b = 0; 
// a->result of calculator, b->value passed into calculator each time.
var firstClick = new Boolean(true); 
// firstClick variable remains false after the first value is entered.
var operation = null;
// operations is a variable that stores the next operation function to be called, i.e,. if '+' is clicked after entering a value the operation() will be called and after it returns, operation will be assigned function Add.
var numRegex = /^[0-9.]*$/;
var num = '';
// num variable aggregates the individual button values into the input and sets the value, for instance, if button 1 and 2 is clicked ... the num variable for the first click will be 1, num = 1 and for second click num = 2 (2 gets concatenated to 1) and num is converted into number to get the exact integer value the user inputs.
var from_equalTo = 0;
// checks if the operator clicked is preceeded by '=' sign. if from_equalTo is 0 it means the operator clicked is not preceeded by '=' and vice-versa.


// Initializing the buttons by their id.
const input = document.getElementById('input');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equalto = document.getElementById('equalto');
const clear = document.getElementById('clear');
const allClear = document.getElementById('all-clear');
const oneTwoThree = document.querySelector("#one-two-three"); // oneTwoThree references the buttons "1", "2" and "3" all three covered in a single event listener.
const fourFiveSix = document.querySelector("#four-five-six");
const sevenEightNine = document.querySelector("#seven-eight-nine");
const zero = document.getElementById('zero');
// fourFiveSix -> buttons 4, 5, 6 and sevenEightNine -> buttons 7,8,9 and zero -> button 0.
const decimalPoint = document.getElementById('point');

// EVENT HANDLER FOR EACH OPERATION ON CALCULATOR
add.addEventListener('click', clickEvent)
function Add() {
    a = a + b;
}

subtract.addEventListener('click', clickEvent);
function Subtract(){
    a = a - b;
}

multiply.addEventListener('click', clickEvent);
function Multiply(){
    a = a * b;
}

divide.addEventListener('click', clickEvent);
function Divide(){
    a = a / b;
}

// CLICK EVENT FUNCTION FOR OPERATOR BUTTONS (+, -, x, ÷)
function clickEvent(e) {
    e.preventDefault();
    if(numRegex.test(input.value)) {
        if(firstClick) {
            firstClick = false;
            a = parseFloat(input.value);
            input.value = null;
            num = '';
            operation = (e.target.id == "multiply"? operation = Multiply: e.target.id == "add"? operation = Add: e.target.id == "subtract"? operation = Subtract: e.target.id == "divide"? operation = Divide: opeartion = operation);
            input.focus();
        }
        else {
            if(from_equalTo){
                input.value = null;
                num = '';
                from_equalTo = 0;
            }
            else {
                b = parseFloat(input.value);
                num =''
                input.value = null;
                operation();
            }
        operation = e.target.id == "multiply"? operation = Multiply: e.target.id == "add"? operation = Add: e.target.id == "subtract"? operation = Subtract: e.target.id == "divide"? operation = Divide: operation = operation;
        input.focus();
        }
    }
    else {
        alert("Enter a value before clicking any operator")
    }
}

// EVENT HANDLER FOR EQUAL TO BUTTON.
equalto.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(numRegex.test(input.value)){
        from_equalTo = 1;
        b = parseInt(num)
        operation();
        input.value = a;
        operation = null;
    }
    else {
        alert("Enter a value before clicking any operator")
    }
}) 

// EVENT HANDLER FOR CLEAR BUTTON (C).
clear.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = null;
    num = ''
    input.focus();
})

// EVENT HANDLER FOR ALL-CLEAR BUTTON (AC).
allClear.addEventListener('click', (e) => {
    e.preventDefault();
    a = 0; b = 0; num = ''
    input.value = null;
    firstClick = true;
    from_equalTo = 0;
    input.focus();
})

// EVENT HANDLERS FOR oneTwoThree, fourFiveSix, sevenEightNine and zero
oneTwoThree.addEventListener("click", numberInput);
fourFiveSix.addEventListener("click", numberInput);
sevenEightNine.addEventListener("click", numberInput);
zero.addEventListener("click", numberInput);

// EVENT HANDLER FOR DECIMAL POINT
decimalPoint.addEventListener('click', decPointInput)
var pointAdded = 0;
function numberInput(e){
    e.preventDefault();
    num += e.target.value;
    input.value = num;
}

function decPointInput(e){
    
    e.preventDefault();
    if(pointAdded === 0){
        num += e.target.value;
        pointAdded = 1;
        input.value = num;
    }
}