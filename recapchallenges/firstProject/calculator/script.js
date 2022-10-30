let num1 = 10; 
let num2 = 20; 
const res = document.getElementById("result"); 

let result; 
function add(){ 
    result = num1 + num2;
    res.textContent = result;
}
function substract(){ 
    result = num1 - num2;
    res.textContent = result;
}
function multiply(){ 
    result = num1 * num2;
    res.textContent = result;
}
function divide(){ 
    result = num1 / num2;
    res.textContent = result;
}


document.getElementById("firstNum").textContent = num1;
document.getElementById("secondNum").textContent = num2;