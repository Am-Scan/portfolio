let bg = document.body;

let btn = document.querySelector("button");


function randomNo() {
    let rand = Math.round(Math.random()* (256 - -1) + -1);
    return rand;
}

function newColor() {
    bg.style.backgroundColor = `rgb(${randomNo()},${randomNo()},${randomNo()})`;
}

btn.addEventListener("click", newColor);