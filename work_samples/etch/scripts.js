//Getting various elements and declaring variables
let container = document.getElementById('container');
let squares = document.getElementsByClassName('grid-item');
let clearButton = document.getElementById('clear');
let colorfulButton = document.getElementById('colorful');
let paintbrushButton = document.getElementById('paintbrush');
let etch = document.getElementById('etch');

//Function which takes the container, sets the grid template rows and columns based on the input and then populates it with little divs
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  container.style.gridTemplateRows = `repeat(${size}, auto)`;
  let sizeSquared = size * size;
  for (i=0;i<(sizeSquared);i++) {
    let square = document.createElement('div');
    square.setAttribute("class","grid-item");
    square.setAttribute("id",`div${i}`);
    container.appendChild(square);
  }
}

function makeDrawable() {
  for (let i=0;i<squares.length;i++) {
    squares[i].addEventListener('mouseover', (e) => {
      let target = e.target;
      target.classList.add("hover");
    });
  }
}

function clearGrid(currentSize) {
  let endofLoop = currentSize*currentSize;
  for(let i=0;i<endofLoop;i++) {
    container.removeChild(container.lastElementChild);
  }
}

function makeColorful() {
  for (let i=0;i<squares.length;i++) {
    squares[i].addEventListener('mouseover', (e) => {
      let target = e.target;
      let colourChoice= createHexColor();
      target.style.backgroundColor = colourChoice;
    });
  }
}

function createHexColor() {
  let firstValue = Math.random() * (255 - 0) + 0;
  let secondValue = Math.random() * (255 - 0) + 0;
  let thirdValue = Math.random() * (255 - 0) + 0;
  let fullHexValue = `rgb(${firstValue},${secondValue},${thirdValue})`;
  return fullHexValue;
}

function makePaintbrush() {
  for (let i=0;i<squares.length;i++) {
    squares[i].style.backgroundColor= "black";
    squares[i].style.opacity=0;
    squares[i].addEventListener('mouseover', (e) => {
      e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
    });
  }
}

//Create initial grid
let gridSize = 16;
createGrid(gridSize);
makeDrawable();

//Regular Etch
clearButton.addEventListener ('click', () => {
clearGrid(gridSize);
gridSize = prompt('New grid size between 1-50?');
if (gridSize<=50&&gridSize>=1) {
  createGrid(gridSize);
  makeDrawable();
}
else if (gridSize<1) {
  alert('That number is too small, created size 10 instead');
  gridSize = 10;
  createGrid(gridSize);
  makeDrawable();
}
else if (gridSize>50) {
  alert('That number is too big, created size 50 instead');
  gridSize = 50;
  createGrid(gridSize);
  makeDrawable();
}
else {
  alert('Error! Please try again! Reset grid');
  gridSize = 16;
  createGrid(gridSize);
  makeDrawable();
}
});

//Colorful Etch
colorfulButton.addEventListener ('click', () => {
clearGrid(gridSize);
gridSize = prompt('New grid size between 1-50?');
if (gridSize<=50&&gridSize>=1) {
  createGrid(gridSize);
  makeColorful();
}
else if (gridSize<1) {
  alert('That number is too small, created size 10 instead');
  gridSize = 10;
  createGrid(gridSize);
  makeColorful();
}
else if (gridSize>50) {
  alert('That number is too big, created size 50 instead');
  gridSize = 50;
  createGrid(gridSize);
  makeColorful();
}
else {
  alert('Error! Please try again! Reset grid');
  gridSize = 16;
  createGrid(gridSize);
  makeColorful();
}
});

//Paintbrush Etch
paintbrushButton.addEventListener ('click', () => {
clearGrid(gridSize);
gridSize = prompt('New grid size between 1-50?');
if (gridSize<=50&&gridSize>=1) {
  createGrid(gridSize);
  makePaintbrush();
}
else if (gridSize<1) {
  alert('That number is too small, created size 10 instead');
  gridSize = 10;
  createGrid(gridSize);
  makePaintbrush();
}
else if (gridSize>50) {
  alert('That number is too big, created size 50 instead');
  gridSize = 50;
  createGrid(gridSize);
  makePaintbrush();
}
else {
  alert('Error! Please try again! Reset grid');
  gridSize = 16;
  createGrid(gridSize);
  makePaintbrush();
}
});
