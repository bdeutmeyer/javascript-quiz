var highScoreUl = document.getElementById("leaderboard");
var clearScores = document.getElementById("clear");
var initials = [];
var score = [];

//Starts when high score page loads
function initializeHSPage() {
        
        var storedInitials = JSON.parse(localStorage.getItem("initials"));
        var storedScore = JSON.parse(localStorage.getItem("score"));
        // If initials and scores existed in the local storage, update arrays to stored lists
        if (storedInitials !== null) {
          initials = storedInitials;
        }
        if (storedScore !== null) {
            score = storedScore;
        }
        renderScores();
}

//Renders initials and scores onto the page
function renderScores() {
    highScoreUl.innerHTML = "";
    //Renders a new li for each score added
    for (var i = 0; i < initials.length; i++) {
        var scoreboardInfo = initials[i] + ": " + score[i];
        var li = document.createElement("li");
        li.textContent = scoreboardInfo;
        li.setAttribute("data-index", i);
        highScoreUl.appendChild(li);
        console.log(li.textContent);
      }    
}

clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

initializeHSPage();