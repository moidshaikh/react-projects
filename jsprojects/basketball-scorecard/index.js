 
// selectors

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");


let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");

let resetHomeScore = document.getElementById("reset-home-score");


let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

let resetguestScore = document.getElementById("reset-guest-score");

// adding button functionality
function increaseScore(htmlEl, increasor){
    htmlEl.textContent = Number(htmlEl.textContent) + increasor;
};

function resetScore(htmlEl){
    htmlEl.textContent = 0;
};

// Home - Button 1
homeScoreBtnOne.addEventListener("click", function(){
    increaseScore(homeScoreEl, 1);
});

// Home - Button 2
homeScoreBtnTwo.addEventListener("click", function(){
    increaseScore(homeScoreEl, 2);
    // Number(homeScoreEl.textContent) += 2;
});

// Home - Button 3
homeScoreBtnThree.addEventListener("click", function(){
    increaseScore(homeScoreEl, 3);
    // homeScoreEl.textContent += 3;
});
// reset home score
resetHomeScore.addEventListener("click", function(){
    resetScore(homeScoreEl);
});



// guest - Button 1
guestScoreBtnOne.addEventListener("click", function(){
    increaseScore(guestScoreEl, 1);
});

// guest - Button 2
guestScoreBtnTwo.addEventListener("click", function(){
    increaseScore(guestScoreEl, 2);
    // Number(guestScoreEl.textContent) += 2;
});

// guest - Button 3
guestScoreBtnThree.addEventListener("click", function(){
    increaseScore(guestScoreEl, 3);
    // guestScoreEl.textContent += 3;
});
// reset guest score
resetguestScore.addEventListener("click", function(){
    resetScore(guestScoreEl);
});

