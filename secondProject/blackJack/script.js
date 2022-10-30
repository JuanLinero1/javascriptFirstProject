const drawCardMessage = "Do you want to draw another card?"; 
const winnerMessage = "Good luck. You've got a blackjack!!!";
const looserMessage = "Sadly you lost. Better luck next time"; 
const card1 = document.querySelector("#card1"); //query = question, selector = HTML selector (asking for what selector is being used)
const card2 = document.querySelector("#card2"); //query = question, selector = HTML selector (asking for what selector is being used)
const addition = document.querySelector("#sum");
const messageMutation = document.querySelector("#message"); 
const playerEl = document.querySelector(".playerEl");


let player = {
    name: "Juan Linero", 
    credits: 500,  
}

let cards = [];
let sumEl = 0;
let hashBlackjack = false; 
let isAlive = false; 
let message = "";
document.querySelector("#card3").hidden = true;
document.querySelector("#card4").hidden = true;
playerEl.textContent = player.name + ": $" + player.credits;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 11 + 1)
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber > 10){
        return 10
    }
    else
        return randomNumber;
}

function startGame(){
    if(player.credits > 100){
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard);
        cards.push(secondCard);
        sumEl = cards[0] + cards[1];
        playGame(); 
    } else
    {alert("your credits are too low")}
}

function playGame(){    
    card1.textContent = "Card 1: " + cards[0];
    card2.textContent = "Card 2: " + cards[1]; 
    addition.textContent = "Sum: " + sumEl; 

    if(sumEl < 21){
        message = drawCardMessage;
    }
    else if(sumEl === 21){
        message = winnerMessage;
        hashBlackjack = true;
    } 
    else{
        message = looserMessage;
        isAlive = false;
    }
    messageMutation.textContent = message;
}


function newCard(){
    if(isAlive === true && hashBlackjack === false){
        document.querySelector("#card3").hidden = false;
        let card3 = document.querySelector("#card3");
        let thirdCard = getRandomCard(); 
        cards.push(thirdCard);
        sumEl = cards[0] + cards[1] + cards[2];
        card3.textContent = "Card 3: " + cards[2]; 
    }
    if(hashBlackjack === false){
        document.querySelector("#card4").hidden = false; 
        let card4 = document.querySelector("#card4");
        let fourthCard = getRandomCard(); 
        cards.push(fourthCard);
        sumEl = cards[0] + cards[1] + cards[2] + cards[3];
        card4.textContent = "card 4: " + cards[3]
    }
    playGame(); 
}