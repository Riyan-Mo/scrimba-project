let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0;
let gScore = 0;
function guestIncrease1(){
    gScore += 1;
    guestScore.textContent = gScore;
}
function guestIncrease2(){
    gScore += 2;
    guestScore.textContent = gScore;
}
function guestIncrease3(){
    gScore += 3;
    guestScore.textContent = gScore;
}
function homeIncrease1(){
    hScore += 1;
    homeScore.textContent = hScore;
}
function homeIncrease2(){
    hScore += 2;
    homeScore.textContent = hScore;
}
function homeIncrease3(){
    hScore += 3;
    homeScore.textContent = hScore;
}
function resetScore(){
    hScore = 0;
    gScore = 0;
    homeScore.textContent = hScore;
    guestScore.textContent = gScore;
}