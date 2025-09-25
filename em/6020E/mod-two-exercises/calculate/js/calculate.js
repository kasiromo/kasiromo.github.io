let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2'); 
let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#subtractButton');
let multiplicationButton = document.querySelector('#multiplyButton'); 
let divisionButton = document.querySelector('#divideButton');
let outputField = document.querySelector('#output');

additionButton.onclick = () => add();
subtractionButton.onclick = () => subtract(); 
multiplicationButton.onclick = () => multiply(); 
divisionButton.onclick = () => divide();  

function add() {
    let addition1 = Number(input1.value); 
    let addition2 = Number(input2.value); 
    let sum = addition1 + addition2; 
    outputField.value = "$"+sum; 
}

function subtract() {
    let subtraction1 = Number(input1.value); 
    let subtraction2 = Number(input2.value); 
    let sum = subtraction1 - subtraction2; 
    outputField.value = "$"+sum; 
}

function multiply() {
    let multiplication1 = Number(input1.value); 
    let multiplication2 = Number(input2.value);
    let sum = multiplication1 * multiplication2;
    outputField.value = "$"+sum; 
}

function divide() {
    let division1 = Number(input1.value); 
    let division2 = Number(input2.value);
    let sum = division1 / division2;
    outputField.value = "$"+sum; 
}