// Slideshow 1 //
let rosterPix1 = ["brock.jpg", "channing.jpg", "darnell.jpg", "george.jpg", "jalen.jpg", "james.jpg", "jordan.jpg"]; 
let rosterNames1 = ["Brock Bowers", "Channing Tindall", "Darnell Washington", "George Pickens", "Jalen Carter", "James Cook", "Jordan Davis"]; 

let slideshow1 = document.querySelector('#slideshow1');
let currentIndex1 = 0;

function showPlayer1() {
    slideshow1.innerHTML = rosterNames1[currentIndex1] + "<br><img src='img/" + rosterPix1[currentIndex1] + "'>";
}

function changeSlide1(step) {
    currentIndex1 += step;
    if (currentIndex1 < 0) currentIndex1 = rosterNames1.length - 1;
    if (currentIndex1 >= rosterNames1.length) currentIndex1 = 0;
    showPlayer1();
}

document.querySelector('#next1').onclick = () => changeSlide1(1);
document.querySelector('#prev1').onclick = () => changeSlide1(-1);
showPlayer1();

// Slideshow 2 //
let rosterPix2 = ["kelee.jpg", "kendall.jpg", "kenny.jpg", "ladd.jpg", "lewis.jpg", "nakobe.jpg", "nolan.jpg"];
let rosterNames2 = ["Kelee Ringo", "Kendall Milton", "Kenny McIntosh", "Ladd McConkey", "Lewis Cine", "Nakobe Dean", "Nolan Smith"];

let slideshow2 = document.querySelector('#slideshow2');
let currentIndex2 = 0;

function showPlayer2() {
    slideshow2.innerHTML = rosterNames2[currentIndex2] + "<br><img src='img/" + rosterPix2[currentIndex2] + "'>";
}

function changeSlide2(step) {
    currentIndex2 += step;
    if (currentIndex2 < 0) currentIndex2 = rosterNames2.length - 1;
    if (currentIndex2 >= rosterNames2.length) currentIndex2 = 0;
    showPlayer2();
}

document.querySelector('#next2').onclick = () => changeSlide2(1);
document.querySelector('#prev2').onclick = () => changeSlide2(-1);
showPlayer2();

// Slideshow 3 //
let rosterPix3 = ["sedrick.jpg", "stetson.jpg", "tate.jpg", "travon.jpg", "warren.jpg"];
let rosterNames3 = ["Sedrick Van Pran", "Stetson Bennett", "Tate Ratledge", "Travon Walker", "Warren Brinson"];

let slideshow3 = document.querySelector('#slideshow3');
let currentIndex3 = 0;

function showPlayer3() {
    slideshow3.innerHTML = rosterNames3[currentIndex3] + "<br><img src='img/" + rosterPix3[currentIndex3] + "'>";
}

function changeSlide3(step) {
    currentIndex3 += step;
    if (currentIndex3 < 0) currentIndex3 = rosterNames3.length - 1;
    if (currentIndex3 >= rosterNames3.length) currentIndex3 = 0;
    showPlayer3();
}

document.querySelector('#next3').onclick = () => changeSlide3(1);
document.querySelector('#prev3').onclick = () => changeSlide3(-1);
showPlayer3();