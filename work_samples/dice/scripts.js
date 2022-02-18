
let playerOneDice = document.getElementsByClassName("img1");

let playerTwoDice = document.getElementsByClassName("img2");

function randomNo() {
    let random1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return random1;
}

function chooseDice() {
    let resultOne = randomNo();
    playerOneDice[0].setAttribute("src", `images/dice${resultOne}.png`);
    let resultTwo = randomNo();
    playerTwoDice[0].setAttribute("src", `images/dice${resultTwo}.png`);

    return {resultOne, resultTwo}
}


let result = chooseDice();

let text;


if (result.resultOne < result.resultTwo) {
    text = "Player 1 loses, Player 2 loses!";
} else if (result.resultOne > result.resultTwo) {
    text = "Player 1 wins, Player 2 loses!";
} else {
    text = "Draw!";
}

let resultsText = document.getElementById("results");

resultsText.innerHTML=text;