var divLoad = document.querySelector("#mainDiv");
var theAnswer = [];

function showAnswer(index) {
    let answerDiv = document.querySelector("#answers" + index);
    answerDiv.innerHTML = theAnswer[index];
}

function pt() {
    $.getJSON("https://the-trivia-api.com/v2/questions/?limit=10", function (data) {
        divLoad.innerHTML = "";
        theAnswer = [];

        for (let i = 0; i < 10; i++) {
            divLoad.innerHTML += "<h3>Category: " + data[i].category + "</h3>";
            divLoad.innerHTML += data[i].question.text + "<br><br>";
            divLoad.innerHTML +=
                "<button onclick='showAnswer(" + i + ")'>Show Answer</button><br>";
            divLoad.innerHTML += "<br><div id='answers" + i + "'></div><br>";
            theAnswer.push(data[i].correctAnswer);
        }
    });
}