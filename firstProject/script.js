let count = 0;
const counter = document.getElementById("counter"); 
const saveEl = document.getElementById("entriesValue");

function increment(){
    count = count + 1; 
    counter.textContent = count; 
}


function save(){
    saveEl.textContent += count + " - ";
    console.log(count);
}

function reset(){
    count = 0;
    counter.textContent = count; 
}
