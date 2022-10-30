let playerTime1 = 20; 
let playerTime2 = 10;

function getFastestTiming(){ 
    if(playerTime1 < playerTime2){
        return "playerTime2";
    }
    else if(playerTime2 < playerTime1){
        return "playerTime1";
    }
    else
        return "both arrived at the same time"
}

function sum(){ 
    return playerTime1 + playerTime2;

}

let valor = sum(); 

console.log(valor)