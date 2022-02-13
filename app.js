let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let operator = document.getElementById("operand");
let result = document.getElementById("result");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset")


calculate.addEventListener("click", myCalculater);
reset.addEventListener("click", resetFunction);

function myCalculater() {
    let a = firstNumber.value;
    let b = secondNumber.value;
    let c = operator.value;

    switch (c) {
        case "+":
            result.innerHTML = (+a) + (+b);
            break;
        case "-": 
            result.innerHTML = a - b;
            break;
        case "*": 
            result.innerHTML = a * b;
            break;
        case "/": 
            result.innerHTML = a / b;
            break;
        default:
            result.innerHTML = "invalid operation"
    }

};

function resetFunction() {
    firstNumber.value = ""
    secondNumber.value =""
    operator.value = ""
    result.innerHTML = "the result will be displayed here"

}








