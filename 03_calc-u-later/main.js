const calcNums = document.querySelectorAll('.numbtn div');
calcNums.forEach(numBtn => {
    numBtn.addEventListener("click", (event) => {
        pushToOutput(event.currentTarget.innerText);
    });
});

const calcOps = document.querySelectorAll('.opsbtns div');
calcOps.forEach(opsBtn => {
    opsBtn.addEventListener("click", (event) => {
        pushToOutput(event.currentTarget.title);
    });
});

document.getElementById('equals').addEventListener("click", calculate);
document.getElementById('reset').addEventListener("click", reset);

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}

function calculate() {
    const output = document.getElementById("output");
    output.innerText = evaluate(output.innerText);
}

function reset() {
    document.getElementById("output").innerText = "";
}

function evaluate(expr) {
    const regex = /^[0-9+\-\*\./]*$/;
    if (!regex.test(expr)) {
        return "INVALID";
    }
    try {
        const calc = Function(`"use strict"; return (${expr});`);
        return calc();
    } catch {
        return "ERROR";
    }
}