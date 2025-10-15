var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var category = document.querySelector("#category");
var theAnswer = "";

function qa() {
    $.getJSON('https://the-trivia-api.com/v2/questions/', function(data) {
        question.innerHTML = data[0].question.text;
        category.innerHTML = "Category: " + data[0].category.replaceAll("_", " ");
        theAnswer = data[0].correctAnswer;
        answer.innerHTML = "";
    });
}

function showAnswer() {
    answer.innerHTML = "Answer: " + theAnswer;
}