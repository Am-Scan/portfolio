let display = document.querySelector("#screen > h2");
let numButtons = document.querySelectorAll('.num-buttons');
let opButtons = document.querySelectorAll('.op-buttons');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');
let log= document.getElementById('log');

let currentValue = 0;
let currentOp = "";
let numOne = 0;
let numTwo = 0;

printVariables();

function calculate(a,b,op) {
  if (op==="add") {
    let result = (a*1) + (b*1);
    return result;
  } else if (op==="subtract") {
    let result = (a*1) - (b*1);
    return result;
  } else if (op==="multiply") {
    let result = (a*1) * (b*1);
    return result;
  } else if (op==="divide") {
    let result = (a*1) / (b*1);
    return result;
  }
};

function printVariables() {
  console.log(`Current Value: ${currentValue}`);
  console.log(`Number 1: ${numOne}`);
  console.log(`Current Op: ${currentOp}`);
  console.log(`Number 2: ${numTwo}`)
  console.log("-------------------------");
}

numButtons.forEach((numButtons) => {
  numButtons.addEventListener('click',(e) => {
    if (currentValue === 0) {
      currentValue=numButtons.id;
    }
    else {
      currentValue+=numButtons.id;
    }
  display.textContent=currentValue;
  printVariables();
  });
});

document.onkeypress = function (e) {
  let numKey = (e.key)*1;
  if(!isNaN(numKey)) {
    if (currentValue === 0) {
      currentValue=numKey;
    }
    else {
      currentValue+=numKey;
    }
    display.textContent=currentValue;
  } else if (e.key === "+" || e.key === "/" || e.key === "*" || e.key === "-") {
    if (currentOp === "") {
      numOne = currentValue;
      currentValue = 0;
      display.textContent=currentValue;
      currentOp = e.key;
    } else {
      numTwo=currentValue;
      let result = calculate(numOne,numTwo,currentOp);
      display.textContent=result;
      numOne=result;
      currentOp=e.key;
      currentValue=0;
      numTwo=0;
    }
  } else if (e.key ==="=") {
    numTwo=currentValue;
    let result = calculate(numOne,numTwo,currentOp);
    display.textContent=result;
    numOne=result;
    currentOp="";
    currentValue=0;
    numTwo=0;
  }
  printVariables();
};

opButtons.forEach((opButtons) => {
  opButtons.addEventListener('click',(e) => {
    console.log("Before op")
    printVariables();
    let result = calculate(numOne,currentValue,currentOp);
    console.log(`result of calculation = ${result}`);
    if (result === undefined) {
      numOne = currentValue;
      currentValue = 0;
      display.textContent=currentValue;
      currentOp = opButtons.id;
    } else {
      numOne=result;
      display.textContent=result;
      currentValue = 0;
      currentOp=opButtons.id;
      numTwo=0;
    }
    console.log("After op")
    printVariables();
  });
});

clearButton.addEventListener('click',(e) => {
  currentValue=0;
  numOne=0;
  numTwo=0;
  currentOp="";
  display.textContent=currentValue;
  printVariables();
});

equalsButton.addEventListener('click',(e) => {

  numTwo=currentValue;
  console.log("Before equals");
  printVariables();

  let result = calculate(numOne,numTwo,currentOp);
  console.log(`Result ${result}`);
  if (result === undefined) {
    display.textContent=currentValue;
    numOne=0;
    currentOp="";
    numTwo=0;
    console.log("result was undefined")
  } else {
    currentValue = result;
    display.textContent=currentValue;
    numOne=0;
    currentOp="";
    numTwo=0;
  }
  console.log("After equals");
  printVariables();
});

/*
    if (currentOp === "") {
      numOne = currentValue;
      currentValue = 0;
      display.textContent=currentValue;
      currentOp = opButtons.id;
    } else {
      numTwo=currentValue;
      let result = calculate(numOne,numTwo,currentOp);
      display.textContent=result;
      numOne=result;
      currentOp=opButtons.id;
      currentValue=0;
      numTwo=0;
    }
*/
