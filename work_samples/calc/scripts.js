
//mathematical functions

let add = (a,b) => (a + b).toPrecision(10);

let subtract = (a,b) => (a - b).toPrecision(10);

let multiply = (a,b) => (a * b).toPrecision(10);

let divide = (a,b) => (a / b).toPrecision(10);

//operate functions

let operate = (operator, a, b) => {
  if (operator==="add") {
    let result = add(a,b);
    return result;
  } else if (operator==="subtract") {
    let result = subtract(a,b);
      return result;
  } else if (operator==="multiply") {
    let result = multiply(a,b);
    return result;
  } else if (operator==="divide") {
    let result = divide(a,b);
    return result;
  } else {
    let result = "Sorry, something went wrong!";
    return result;
  }
};

let display = document.querySelector("#screen > h2");
let numButtons = document.querySelectorAll('.num-buttons');
let opButtons = document.querySelectorAll('.op-buttons');
let currentValue ="";
let currentFunction ="";
let clearButton = document.getElementById('clear');
let firstValue= "";
let secondValue= "";
let equalsButton = document.getElementById('equals');

// Add equals event listener, stores current value as second value and calls relevant function, updates screen with result
function calculate(firstValue,secondValue,currentFunction) {
  if (currentFunction==="multiply") {
    let result = multiply(firstValue,secondValue);
    display.textContent=result.toString();
  }
  if (currentFunction==="add") {
    let result = add(firstValue,secondValue);
    display.textContent=result.toString();
  }
  if (currentFunction==="subtract") {
    let result = subtract(firstValue,secondValue);
    display.textContent=result.toString();
  }
  if (currentFunction==="divide") {
    let result = divide(firstValue,secondValue);
    display.textContent=result.toString();
  }
}

equalsButton.addEventListener('click',(e) => {
  secondValue=currentValue;
  let result = calculate(firstValue,secondValue,currentFunction);
  currentValue=display.textContent;
});

clearButton.addEventListener('click',(e) => {
  display.textContent="0";
  currentValue="0";
});

opButtons.forEach((opButtons) => {
  opButtons.addEventListener('click',(e) => {
      if (currentFunction==="") {
        firstValue = currentValue;
        currentFunction = opButtons.id;
        display.textContent="0";
        currentValue="0";
      } else {
        secondValue= currentValue;
        calculate(firstValue,secondValue,currentFunction);
        firstValue=display.textContent;
        currentFunction=opButtons.id;
        display.textContent="0";
      }
  });
});

numButtons.forEach((numButtons) => {
  numButtons.addEventListener('click',(e) => {
    if (display.textContent === '0') {
      currentValue+=numButtons.id;
      display.textContent=numButtons.id;
    }
    else {
      currentValue+=numButtons.id;
      display.textContent+=numButtons.id;
    }
  });
});
