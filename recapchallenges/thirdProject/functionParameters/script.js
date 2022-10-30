const welcomeEl = "Juan"; 

function greet(a, b){
    console.log(`${a} ${b}`); //this also wok in console.log("i did not expected that, i only thought it will only work in HTML")
};

// greet("Welcome to this space", ", My good friend"); 

function add(a, b){ 
    return a + b;
};

// console.log(add(12, 41))
// console.log(add(68, 43))
// console.log(add(8, -1))

let arr1 = [1, 2, 3]
function sum(arr){ 
    let value = 0;
    for(i = 0; i < arr.length; i++){
        value += arr[i];
    }
    //both works
    return value;
    // console.log(value)
}
console.log(sum(arr1));