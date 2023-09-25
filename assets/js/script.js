//TODO: figure out rendering problem

var welcomePage = document.getElementById("welcome");
var questionPage = document.getElementById("questions");
var resultPage = document.getElementById("yourScore");
var highScores = document.getElementById("highScoreLink");
var timerDiv = document.getElementById("countdown-timer");
var startBtn = document.getElementById("start");
var takeAgainBtn = document.getElementById("takeAgain");
var addScoreBtn = document.getElementById("addScore");
var initInpEl = document.getElementById("initials");
var quizCardSec = document.getElementsByClassName("quizCard");
var quizCardh2 = document.getElementById("quizh2");
var quizCardBtn = document.getElementsByClassName("quizBtn");
var btnEl1 = document.getElementById("answer1");
var btnEl2 = document.getElementById("answer2");
var btnEl3 = document.getElementById("answer3");
var btnEl4 = document.getElementById("answer4");
var h3El = document.createElement("h3");
var scorePageh2 = document.getElementById("scorePageHeading");
var addScoreBtn = document.getElementById("addScore");
var chosenAnswer;
var timeLeft;
var score = [];
var initials = [];
var scoreBoard = [];

questionPage.setAttribute("style", "visibility: hidden");
resultPage.setAttribute("style", "visibility: hidden");
h3El.setAttribute("style", "color: gray; font-size: 125%; font-style: italic")

//Interval timer
var i = 0;
var timer = setInterval(function() {  
    //Tests if time is still left
    if (timeLeft > 0) {
        timeLeft--;
        timerDiv.textContent = timeLeft;
    }
    // Tests if time has run out
    if (timeLeft === 0) {
    // Stops countdown
        alert("time's up");
        clearInterval(timer);
        displayScore();
    }}, 1000);

var questions = [
    {
        question: "What is another name for an 'if' statement?",
        choices: ["Maybe", "Might", "Conditional", "Could"],
        answer: "Conditional",
    },
    {
        question: "What does the modulus ( % ) operator return?",
        choices: ["The percentage", "The metric conversion", "The binary", "The remainder"],
        answer: "The remainder",
    },
    {
        question: "You should end each line of code with this symbol:",
        choices: ["A semicolon ( ; )", "An exclamation point ( ! )", "A comma ( , )", "A dollar sign ( $ )"],
        answer: "A semicolon ( ; )",
    },
    {
        question: "What do you call a piece of code that looks like 'nameOfSomething()'?",
        choices: ["A variable", "A function", "An array", "An object"],
        answer: "A function",
    },
    {
        question: "What gives a dynamic website its functionality?",
        choices: ["HTML", "CSS", "Adobe Acrobat", "The tears of frustrated developers"],
        answer: "The tears of frustrated developers",
    },
];

// Sets start time at 60 seconds, calls displayQuestions function.
function startQuiz() {
    welcomePage.setAttribute("style", "display: none");
    questionPage.setAttribute("style", "visibility: visible");
    // questionPage.dataset.state = "visible";
    displayQuestions();
    timeLeft = 60;
}

//Gives question header and buttons text content
function displayQuestions() {
    quizCardh2.textContent = questions[i].question;
    btnEl1.textContent = questions[i].choices[0];
    btnEl2.textContent = questions[i].choices[1];
    btnEl3.textContent = questions[i].choices[2];
    btnEl4.textContent = questions[i].choices[3];
}

//Checks to see if clicked button text = answer text
function checkAnswer() {
    document.body.children[1].appendChild(h3El);
    if (this.textContent === questions[i].answer) {
        h3El.textContent = "Correct!"
    } else {
        h3El.textContent = "Sorry, that was incorrect."
        timeLeft -= 15;
    }
    moveOn();
}

//Moves to next question or displayScore page
function moveOn() {
    i++;
    if (i < 4) {
        quizCardh2.textContent = questions[i].question;
        btnEl1.textContent = questions[i].choices[0];
        btnEl2.textContent = questions[i].choices[1];
        btnEl3.textContent = questions[i].choices[2];
        btnEl4.textContent = questions[i].choices[3];
        
    }  else if (i === 4) {
        quizCardh2.textContent = questions[i].question;
        btnEl1.textContent = questions[i].choices[0];
        btnEl2.textContent = questions[i].choices[1];
        btnEl3.textContent = questions[i].choices[2];
        btnEl4.textContent = questions[i].choices[3];
        for (var j = 0; j < quizCardBtn.length; j++) {
            quizCardBtn[j].addEventListener("click", function() {
                displayScore();
            });
        }    
    } 
}

//Displays score, asks if user wants to add initials and score to leaderboard
function displayScore() {
    clearInterval(timer);
    score = timeLeft;
    resultPage.setAttribute("style", "visibility: visible");
    questionPage.setAttribute("style", "display: none");
    scorePageh2.textContent = "You scored " + score + " points! Enter your initials below to put your score on the leaderboard!";
}

//Moves user to new page containing high score board
function seeHighScores() {
    window.location.href = "highscores.html";
}

//Starts the countdown timer on click
startBtn.addEventListener("click", function() {
    startQuiz();
});

//Answer buttons - makes sure that "this" refers specifically to the content in the button, calls checkAnswer()
btnEl1.addEventListener("click", function() {
    checkAnswer.call(this);
});
btnEl2.addEventListener("click", function() {
    checkAnswer.call(this);
});
btnEl3.addEventListener("click", function() {
    checkAnswer.call(this);
});
btnEl4.addEventListener("click", function() {
    checkAnswer.call(this);
});

// Calls seeHighScores function on click
addScoreBtn.addEventListener("click", function() {
    var initials = initInpEl.value;
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));
    seeHighScores();
    initInpEl
});