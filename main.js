import { calculator } from "./calculator.js";

let calc = calculator();

const numbers = document.getElementsByClassName("numbers");
const resultsDisplay = document.getElementById("results-display");
const numbersOperators = document.getElementsByClassName("numbers-operators");
const equalsButton = document.getElementById("equals");
// console.log(numbersOperators);


Array.prototype.forEach.call(numbers, (number) => {
    console.log(calc.getFirstInput());
    if (calc.getFirstInput() == true){
        number.onclick = () => {
            calc.buildInput1(number.innerText);
            resultsDisplay.innerText = calc.getInput1();
        }
    } else {
        console.log("recording second input now.")
        number.onclick = () => {
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
    console.log(calc.getInput1());
    // console.log(calc.getInput2());
})