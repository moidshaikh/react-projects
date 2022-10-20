let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");

let player = {
    name : "Bulla",
    chips: 250
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + " : S$" + player.chips; 




function getRandomCard(){
    let randomNo = Math.floor(Math.random()*13) + 1;
    if (randomNo === 1){
        return 11;
    }
    else if (randomNo >10){
        return 10;
    }
    else{
        return randomNo;
    }
};

function startGame(){
    isAlive = true;
    cards = [];
    firstNumber = getRandomCard();
    secondNumber = getRandomCard();
    cards.push(firstNumber);
    cards.push(secondNumber);
    sum = firstNumber + secondNumber;
    renderGame();
};

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += (cards[i] + " ");
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
    };

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive===true && hasBlackJack===false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
};