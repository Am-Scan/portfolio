let heart = document.getElementById("heart");

let body = document.querySelector("body");

function leftPosition() {
  random = Math.floor(Math.random() * 100 + 1);
  heart.style.left = random + "%";
}

function createHeart() {
  let newHeart = document.createElement("p");
  newHeart.innerHTML= "♥";
  newHeart.className = "heart";
  newHeart.style.left = Math.random() * 100 + "%";
  newHeart.style.animationDuration = Math.random() * 2 + 2 + "s";
  body.appendChild(newHeart);
}

function removeHeart() {
    let heartNumber = document.getElementsByClassName("heart").length;
    let elementToRemove = document.getElementsByClassName("heart")[heartNumber-1];
    elementToRemove.remove();
    console.log("removed "+ elementToRemove);
}

setInterval(createHeart,500);

setInterval(removeHeart,750);