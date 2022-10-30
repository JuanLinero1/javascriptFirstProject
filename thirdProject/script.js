const inputBtn = document.querySelector(".btnEl");
const inputEl = document.querySelector("input");
const unEl = document.querySelector(".unEl");
const btnDelEl = document.querySelector(".btnDelEl")
const saveBtn = document.querySelector(".btnSaveEl");
const itemStr = JSON.parse(localStorage.getItem("myLead"));
// const perLinkd = {
//     name: "Per",
//     url: "https://www.linkedin.com/in/per-harald-borgen/"
// } 

let myLead = []

// myLead = JSON.parse(myLead); //parse means to convert into an array
// myLead.push("www.comicsans"); 
// myLead = JSON.stringify(myLead); //convert into an string
// console.log(myLead); 

// localStorage.setItem("myLeads", "www.example.com");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();

// let itemStr = JSON.stringify(myLead);  
// itemStr = localStorage.getItem(myLead); s
// JSON.parse(itemStr);

console.log(itemStr); 

if(itemStr){
    myLead = itemStr; 
    render(myLead); 
    unEl.innerHTML = `<li><p>There is no current value</p></li>`;
} 

function render(lead){
    let listItems =""; 
    for(i = 0; i < lead.length; i++){
        // listItems += "<li><a href='" + myLead[i] + "' target='__blank'>"+ myLead[i] + "</a></li>";
        listItems +=   
        `<li>
            <a href="${lead[i]}" target="__blank">${lead[i]}</a>
        </li>`

    }
    unEl.innerHTML = listItems;     
}

inputBtn.addEventListener("click", () => {
    myLead.push(inputEl.value)
    inputEl.value = ""; // myLead = JSON.stringify(myLead); 
    localStorage.setItem("myLead", JSON.stringify(myLead))// myLead = JSON.parse(myLead)
    render(myLead);  
}); 

btnDelEl.addEventListener("dblclick", () => {
    localStorage.clear()
    myLead = []; 
    render(myLead); 
    //mine is shorter by one so it's better (joking but whatever)
    //video solution (mine works, but it works in environment where not many data is being used, if there is an input of 100000 elements it will be slower, beacuse i am only elimnating what is being shown not the process. the empytiness of the array will work better beacuse it will work with 0 items as there is nothing inside, mine is just eliminating what is being shown but working on the bakend (now i understand alittle bit this shit a litt emore, such a bothersome sun of a bitch)
    // localStorage.clear();
    // unEl.innerHTML = ""; 
})

saveBtn.addEventListener("click", () => {
    // chrome.tabs.query({active : true, currentWindow: true}, function (tab){
    // });
    chrome.tabs.query({active: true, currentWindow: true}, (tab) => {
            tab[0].url;
            myLead.push(tab[0].url);
            localStorage.setItem("myLead", JSON.stringify(myLead)); //i can also myLead => value, but for the sake of globality we can not do that
            render(myLead); 
    });
});