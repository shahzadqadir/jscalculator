import { calculator } from "./calculator.js";

let calc = calculator();

const numbers = document.getElementsByClassName("numbers");
const resultsDisplay = document.getElementById("results-display");
const numbersOperators = document.getElementsByClassName("numbers-operators");
const equalsButton = document.getElementById("equals");
const allclear = document.getElementById("ac");

function allCear(){
    calc.setInput1("");
    calc.setInput2("");
    calc.setOperation("");
    calc.setResult("");
    calc.setFirstInputTrue();    
}


Array.prototype.forEach.call(numbers, (number) => {    
        number.onclick = () => {
            if (calc.getFirstInput()) {
                calc.buildInput1(number.innerText);
                resultsDisplay.innerText = calc.getInput1();
            } else {
                calc.buildInput2(number.innerText);
                resultsDisplay.innerText = calc.getInput2();
            }
        }
    
});

Array.prototype.forEach.call(numbersOperators, operator => {
    operator.onclick = () => {
        calc.setFirstInputFalse();
        resultsDisplay.innerText = "";
        calc.setOperation(operator.innerText);
    }
})


equalsButton.addEventListener("click", () => {
    const number1 = parseFloat(calc.getInput1());
    const number2 = parseFloat(calc.getInput2());
    const operator = calc.getOperation();
    if (operator === "+" ){
        calc.setResult(number1 + number2);
        resultsDisplay.innerText = calc.getResult();
    }
    else if (operator === "-"){
        calc.setResult(number1-number2);
        resultsDisplay.innerText = calc.getResult();
    }
    else if(operator === "x"){
        calc.setResult(number1*number2);
        resultsDisplay.innerText = calc.getResult();
    }
    else if(operator === "÷"){
        if (number2 === 0){
            resultsDisplay.innerText = "∞";
            allCear();
        }
        else {
            calc.setResult(number1/number2);
            resultsDisplay.innerText = calc.getResult();
        }
    }

})

allclear.addEventListener("click", () => {
    allCear();
    resultsDisplay.innerText = "";
})