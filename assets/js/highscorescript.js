var highScoreUl = document.getElementById("leaderboard");
var clearScores = document.getElementById("clear");
var comboList = [];
var scoreBoard = JSON.parse(localStorage.getItem("initials")) || [];
var initials;
var score;


//Starts when high score page loads, renders score(s) onto page
function renderScores() {
    highScoreUl.innerHTML = "";
    for (var i = 0; i < scoreBoard.length; i++) {
        var li = document.createElement("li");
        li.textContent = scoreBoard[i].initials + ": " + scoreBoard[i].score;
        highScoreUl.appendChild(li);
        scoreBoard.sort(function (a, b) {
            return b.score - a.score;
        });
    }  
}

//Clears scoreboard
clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

renderScores();