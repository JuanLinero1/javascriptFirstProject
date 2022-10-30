let btnEl = document.querySelector(".btn");
let content = "hello my name is juan linero";

btnEl.addEventListener("click", function(){
    btnEl.innerHTML = "<button>" + content + "</button>";
    console.log("funciona");
})