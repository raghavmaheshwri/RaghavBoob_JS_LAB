const questions = [
    {
        que: "JavaScript supports",
        ans: [
            { option: "Functions" },
            { option: "XHTML" },
            { option: "CSS" },
            { option: "HTML" },
        ],
        correctAns: "Functions",
    },
    {
        que: "Which language is used for styling web pages?",
        ans: [
            { option: "HTML" },
            { option: "JQuery" },
            { option: "CSS" },
            { option: "XML" },
        ],
        correctAns: "CSS",
    },
    {
        que: "Which is not a JavaScript Framework?",
        ans: [
            { option: "Python Script" },
            { option: "JQuery" },
            { option: "Django" },
            { option: "NodeJS" },
        ],
        correctAns: "Django",
    },
    {
        que: "Which is used for Connect To Database?",
        ans: [
            { option: "PHP" },
            { option: "HTML" },
            { option: "JS" },
            { option: "All" },
        ],
        correctAns: "PHP",
    },
    {
        que: "JavaScript is a ",
        ans: [
            { option: "Language" },
            { option: "Programming Language" },
            { option: "Development" },
            { option: "All" },
        ],
        correctAns: "Programming Language",
    },
];

var questionNumber = 0;
var score = 0;
var totalNumberOfQue = questions.length;

// Show Question
function showQuestion(queNumber) {
    var quedata = questions[queNumber];

    var que = document.getElementById("question");
    que.innerHTML = quedata.que;

    var choices = quedata.ans;
    for (var i = 0; i < choices.length; i++) {
        var ele = document.getElementById("choice" + i);
        ele.innerHTML = choices[i].option;
        handleOptionButton("btn" + i, choices[i]);
    }
}

//Quiz Ending
function quizEnded() {
    return totalNumberOfQue === questionNumber;
}

//show progress bar
function showProgress(QueP) {
    var currentQueNumber = QueP + 1;
    var element = document.getElementById("progress");
    element.innerHTML =
        "Question " + currentQueNumber + " of " + totalNumberOfQue;
}

// Check Answers
function checkAnswer(id) {
    var button = document.getElementById(id);
    return button.firstChild.innerHTML === questions[questionNumber].correctAns;
}

// Show Result
function showResult() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML +=
        "<h2 id='score'> Your scores: " +score +". And mark percentage is: " +(score / totalNumberOfQue) * 100 +"%" +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

//handle Event and load next question
function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function () {
        if (checkAnswer(id)) {
            ++score;
        }
        ++questionNumber;
        if (!quizEnded()) {
            showProgress(questionNumber);
            showQuestion(questionNumber);
        } else {
            showResult();
        }
    };
}

// Show Data On page Load
showQuestion(questionNumber);
showProgress(questionNumber);
