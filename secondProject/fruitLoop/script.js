let fruits = ["🍎", "🍎", "🍊", "🍎", "🍎", "🍊", "🍊", "🍎", "🍊"] 
const apple = document.querySelector(".appleEl");
const orange = document.querySelector(".orangeEl");

function fruitContainer(){ 
    for(i = 0; i < fruits.length; i++){
        if(fruits[i] === "🍎"){
            apple.textContent += fruits[i]  + " ";
        } else if(fruits[i] === "🍊"){
            orange.textContent += fruits[i]  + " ";
        }
    }
    console.log("avise si esta mierda funciona")
}

fruitContainer(); 