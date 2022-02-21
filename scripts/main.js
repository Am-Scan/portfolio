const blossomImages = {
    0: "../images/0.png",
    1: "../images/1.png",
    2: "../images/2.png",
    3: "../images/3.png",
    4: "../images/4.png",
    5: "../images/5.png",
    6: "../images/6.png",
    7: "../images/7.png",
    8: "../images/8.png",
    9: "../images/9.png",
    10: "../images/10.png",
    11: "../images/11.png",
    12: "../images/12.png",
    13: "../images/13.png",
    14: "../images/14.png",
    15: "../images/15.png",
    16: "../images/16.png",
    17: "../images/17.png",
    18: "../images/18.png",
    19: "../images/19.png",
    20: "../images/20.png",
    21: "../images/21.png",
};

let bgImage = document.getElementById("bgimage");

const step = 200;

function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/step) + 1, 20);
    const imageToUse = blossomImages[label];
    bgImage.style.backgroundImage = `url('${imageToUse}')`;
}

trackScrollPosition();

document.addEventListener("scroll", (event) => {
    trackScrollPosition();
});


