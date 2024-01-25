const container = document.getElementsByClassName("container");
const box = document.getElementsByClassName("box");
const userInput = document.getElementsByClassName("color-input");
const btn = document.getElementById("changeButton");

document.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
    }
})
userInput[0].addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        box[0].style.backgroundColor = userInput[0].value;
        userInput[0].value = "";
    }
});
userInput[1].addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        box[1].style.backgroundColor = userInput[1].value;
        userInput[1].value = "";
    }
});
userInput[2].addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        box[2].style.backgroundColor = userInput[2].value;
        userInput[2].value = "";
    }
});
userInput[3].addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        box[3].style.backgroundColor = userInput[3].value;
        userInput[3].value = "";
    }
});
userInput[4].addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        box[4].style.backgroundColor = userInput[4].value;
        userInput[4].value = "";
    }
});
document.addEventListener("click", function(){
    if (btn.addEventListener("click", function(){
        userInput[0].value = "";
        box[0].style.backgroundColor = userInput[0].value;
    }));
});

// button
document.querySelector("#changeButton").addEventListener("click", function() {

    for(let i=0;i<box.length;i++) {
        box[i].style.backgroundColor = userInput[i].value;
    }
});