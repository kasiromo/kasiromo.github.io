let rosterPix = ["brock.jpg", "channing.jpg", "darnell.jpg", "george.jpg", "jalen.jpg", "james.jpg", "jordan.jpg", "kelee.jpg", "kendall.jpg", "kenny.jpg", "ladd.jpg", "lewis.jpg", "nakobe.jpg", "nolan.jpg", "sedrick.jpg", "stetson.jpg", "tate.jpg", "travon.jpg", "warren.jpg"]
let rosterNames = ["Brock Bowers", "Channing Tindall", "Darnell Washington", "George Pickens", "Jalen Carter", "James Cook", "Jordan Davis", "Kelee Ringo", "Kendall Milton", "Kenny McIntosh", "Ladd McConkey", "Lewis Cine", "Nakobe Dean", "Nolan Smith", "Sedrick Van Pran", "Stetson Bennett", "Tate Ratledge", "Travon Walker", "Warren Brinson"]

let slideshow = document.querySelector('#slideshow');
let currentIndex = 0; 

function showCurrentPlayer() {
    slideshow.innerHTML = rosterNames[currentIndex] + "<br><img src='roster/" + rosterPix[currentIndex] + "'>";
}

function canShow(plusMinus) {
    currentIndex = currentIndex + plusMinus;

    if (currentIndex < 0) {
        currentIndex = rosterNames.length - 1;
    }
    if (currentIndex >= rosterNames.length) {
        currentIndex = 0;
    }

    showCurrentPlayer();
}

showCurrentPlayer(); 

document.querySelector('#next').onclick = function () {
    canShow(1);
}

document.querySelector('#previous').onclick = function () {
    canShow(-1);
}