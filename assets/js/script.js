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
var highScores = document.querySelector("h3");
var timer = document.getElementById("countdown-timer");
var startBtn = document.getElementById("start");
var cards = document.getElementsByClassName("card");
var timer;
var timeLeft;
var questions = [
    {
        question: "Question1 content",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        question: "Question2 content",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        question: "Question3 content",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        question: "Question4 content",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        question: "Question5 content",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
];

// The startCountdown function starts the countdown timer. It will start counting down seconds when the button click calls the function.
function startCountdown() {
  timer = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft > 0) {
        //Stops countdown
        clearInterval(timer);
    }
    // Tests if time has run out
    if (timeLeft === 0) {
      // Stops countdown
      clearInterval(timer);
    //   loseGame();
    }
  }, 1000);
}

function startQuiz() {

}

startBtn.addEventListener("click", function(event) {
    console.log(event);
    startCountdown();
    startQuiz();
});

