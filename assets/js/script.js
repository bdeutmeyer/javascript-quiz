/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score */

//To link to scoreboard html file: window.location.href

// Pseudocode from Sam 9/22:
// Welcome page has button, starts quiz on click, timer starts
// When an answer is selected, right or wrong is recorded and display
    //IF an answer is wrong, the timer decrements by 10 (or whatever?) seconds, display that user choice was incorrect, then move to next question
    //IF an answer is correct, display that user choice was correct, then move to next question
// When the timer reaches 0 or all questions have been answered correctly, clear the interval, go to score page, the score page displays the score. Score = number of seconds remaining. User has option to put in initials (prevent default so it stays), Save data to local storage
//textcontent of things changes
// targeting item in object in array could look like questions[1].choices[3]
//make outside function that runs whatever inside your event listener to check it easily

var welcomePage = document.getElementById("welcome");
var questionPage = document.getElementById("questions");
var resultPage = document.getElementById("yourScore");
var highScores = document.querySelector("p");
var timerDiv = document.getElementById("countdown-timer");
var startBtn = document.getElementById("start");
var takeAgainBtn = document.getElementById("takeAgain");
var cards = document.getElementsByClassName("card");
var choice = document.querySelectorAll("input[type='radio'");
var timeLeft;
var score;
var h2El = document.createElement("h2");
var btnEl1 = document.createElement("button");
var btnEl2 = document.createElement("button");
var btnEl3 = document.createElement("button");
var btnEl4 = document.createElement("button");
var h3El = document.createElement("h3");

h2El.setAttribute("style", "padding-bottom: 40px; margin-left: 50px");
btnEl1.setAttribute("style", "background-color: #235659; color: white; font-size: 125%; font-family: inherit; padding: 20px auto; border-width: 3px; width: 40%; margin-left: 50px; margin-bottom: 40px; line-height: 2");
btnEl2.setAttribute("style", "background-color: #235659; color: white; font-size: 125%; font-family: inherit; padding: 20px auto; border-width: 3px; width: 40%; margin-left: 50px; margin-bottom: 40px; line-height: 2");
btnEl3.setAttribute("style", "background-color: #235659; color: white; font-size: 125%; font-family: inherit; padding: 20px auto; border-width: 3px; width: 40%; margin-left: 50px; margin-bottom: 40px; line-height: 2");
btnEl4.setAttribute("style", "background-color: #235659; color: white; font-size: 125%; font-family: inherit; padding: 20px auto; border-width: 3px; width: 40%; margin-left: 50px; margin-bottom: 40px; line-height: 2");
h3El.setAttribute("style", "color: gray; font-size: 125%; font-style: italic")

var i = 1;
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
    }}, 1000);

var questions = [
    {
        question: "Question 1 content",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        question: "Question 2 content",
        choices: ["2option 1", "2option 2", "2option 3", "2option 4"],
        answer: "2option 1",
    },
    {
        question: "Question 3 content",
        choices: ["3option 1", "3option 2", "3option 3", "3option 4"],
        answer: "3option 1",
    },
    {
        question: "Question 4 content",
        choices: ["4option 1", "4option 2", "4option 3", "4option 4"],
        answer: "4option 1",
    },
    {
        question: "Question 5 content",
        choices: ["5option 1", "5option 2", "5option 3", "5option 4"],
        answer: "5option 1",
    },
];

// var questions = [
//     {
//         question: "What is another name for an 'if' statement?",
//         choices: ["Maybe", "Might", "Conditional", "Could"],
//         answer: "Conditional",
//     },
//     {
//         question: "What does the modulus ( % ) operator return?",
//         choices: ["The percentage", "The metric conversion", "The binary", "The remainder"],
//         answer: "The remainder",
//     },
//     {
//         question: "You should end each line of code with this symbol:",
//         choices: ["A semicolon ( ; )", "An exclamation point ( ! )", "A comma ( , )", "A dollar sign ( $ )"],
//         answer: "A semicolon ( ; )",
//     },
//     {
//         question: "What do you call a piece of code that looks like 'nameOfSomething()'?",
//         choices: ["A variable", "A function", "An array", "An object"],
//         answer: "A function",
//     },
//     {
//         question: "What gives a dynamic website its functionality?",
//         choices: ["HTML", "CSS", "Python", "The tears of frustrated developers"],
//         answer: "The tears of frustrated developers",
//     },
// ];

// Sets start time at 75 seconds, calls displayQuestions function.
function startQuiz() {
    welcomePage.setAttribute("style", "visibility: hidden");
    displayQuestions();
    timeLeft = 75;
}

//Appends question elements to page, gives them initial text content
function displayQuestions() {
    document.body.children[1].appendChild(h2El);
    document.body.children[1].appendChild(btnEl1);
    document.body.children[1].appendChild(btnEl2);
    document.body.children[1].appendChild(btnEl3);
    document.body.children[1].appendChild(btnEl4);

    h2El.textContent = questions[0].question;
    btnEl1.textContent = questions[0].choices[0];
    btnEl2.textContent = questions[0].choices[1];
    btnEl3.textContent = questions[0].choices[2];
    btnEl4.textContent = questions[0].choices[3];
}

function displayScore() {
    clearInterval(timer);
    // score = timerDiv.textContent;
    //in API: window-->timerDiv-->childNodes-->0: text-->data OR nodevalue OR textContent OR wholeText (all have same value)
    // // // document.querySelectorAll("button").setAttribute("style", "visibility: none");
    // // // h2El.textContent = "You scored " + score + " points! Would you like to add your initials and score to the high scores page?";
    // console.log(score);
}

//Starts the countdown timer on click
startBtn.addEventListener("click", function() {
    startQuiz();
});

//Answer buttons. Tests to see if choice was correct or not, displays message accordingly. Increments to next question on click.
btnEl1.addEventListener("click", function() {
    if (i < 4) {
    h2El.textContent = questions[i].question;
    btnEl1.textContent = questions[i].choices[0];
    btnEl2.textContent = questions[i].choices[1];
    btnEl3.textContent = questions[i].choices[2];
    btnEl4.textContent = questions[i].choices[3];
    i++;
    document.body.children[1].appendChild(h3El);
    }  else if (i = 4) {
        h2El.textContent = questions[i].question;
        btnEl1.textContent = questions[i].choices[0];
        btnEl2.textContent = questions[i].choices[1];
        btnEl3.textContent = questions[i].choices[2];
        btnEl4.textContent = questions[i].choices[3];
        clearInterval(timer);
    }
    
    if (questions[i].choices[0] === questions[i].answer) {
        h3El.textContent = "Correct!"
    } else {
        h3El.textContent = "Sorry, that was incorrect."
        timeLeft -= 15;
    }
});

btnEl2.addEventListener("click", function() {
    if (i < 5) {
    h2El.textContent = questions[i].question;
    btnEl1.textContent = questions[i].choices[0];
    btnEl2.textContent = questions[i].choices[1];
    btnEl3.textContent = questions[i].choices[2];
    btnEl4.textContent = questions[i].choices[3];
    i++;
    document.body.children[1].appendChild(h3El);
    } else {
        clearInterval();
        displayScore();
    }
    
    if (questions[i].choices[1] === questions[i].answer) {
        h3El.textContent = "Correct!"
    } else {
        h3El.textContent = "Sorry, that was incorrect."
        timeLeft -= 15;
    }
});

btnEl3.addEventListener("click", function() {
    if (i < 5) {
    h2El.textContent = questions[i].question;
    btnEl1.textContent = questions[i].choices[0];
    btnEl2.textContent = questions[i].choices[1];
    btnEl3.textContent = questions[i].choices[2];
    btnEl4.textContent = questions[i].choices[3];
    i++;
    document.body.children[1].appendChild(h3El);
    } else {
        clearInterval();
        displayScore();
    }
    
    if (questions[i].choices[2] === questions[i].answer) {
        h3El.textContent = "Correct!"
    } else {
        h3El.textContent = "Sorry, that was incorrect."
        timeLeft -= 15;
    }
});

btnEl4.addEventListener("click", function() {
    if (i < 5) {
    h2El.textContent = questions[i].question;
    btnEl1.textContent = questions[i].choices[0];
    btnEl2.textContent = questions[i].choices[1];
    btnEl3.textContent = questions[i].choices[2];
    btnEl4.textContent = questions[i].choices[3];
    i++;
    document.body.children[1].appendChild(h3El);
    } else {
        clearInterval();
        displayScore();
    }
    
    if (questions[i].choices[3] === questions[i].answer) {
        h3El.textContent = "Correct!"
    } else {
        h3El.textContent = "Sorry, that was incorrect."
        timeLeft -= 15;
    }
});

// takeAgainBtn.addEventListener("click", function() {
//     window.location.href = 
//     startQuiz();
// });
