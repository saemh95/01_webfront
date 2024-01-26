const userInput = document.querySelector("#userInput-num");
const keyPad = document.querySelectorAll(".num-keypad").innerHTML;
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const telList = document.getElementById("tel-list");
const numberContainer = document.getElementById("number-digit");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const num10 = document.getElementById("num#");
const num11 = document.getElementById("num*");


let result = 0;

document.addEventListener("keydown", e => {
    // console.log(numberContainer.children);
    /* for(let i=0;i<keyPad.length;i++) {
        if ()
    }
    userInput.innerHTML =  ""; */
    // userInput.innerHTML += "";
    if(e.key == "1") {
        num1.style.backgroundColor = "#c2c2c2";
        userInput.value += "1";
        this.addEventListener("keyup", function(){
            num1.style.backgroundColor = null;
        });
    }
    else if(e.key == "2") {
        num2.style.backgroundColor = "#c2c2c2";
        userInput.value += "2";
        this.addEventListener("keyup", function(){
            num2.style.backgroundColor = null;
        });
    }
    else if(e.key == "3") {
        num3.style.backgroundColor = "#c2c2c2";
        userInput.value += "3";
        this.addEventListener("keyup", function(){
            num3.style.backgroundColor = null;
        });
    }
    else if(e.key == "4") {
        num4.style.backgroundColor = "#c2c2c2";
        userInput.value += "4";
        this.addEventListener("keyup", function(){
            num4.style.backgroundColor = null;
        });
    }
    else if(e.key == "5") {
        num5.style.backgroundColor = "#c2c2c2";
        userInput.value += "5";
        this.addEventListener("keyup", function(){
            num5.style.backgroundColor = null;
        });
    }
    else if(e.key == "6") {
        num6.style.backgroundColor = "#c2c2c2";
        userInput.value += e.key;
        this.addEventListener("keyup", function(){
            num6.style.backgroundColor = null;
        });
    }
    else if(e.key == "7") {
        num7.style.backgroundColor = "#c2c2c2";
        userInput.value += "7";
        this.addEventListener("keyup", function(){
            num7.style.backgroundColor = null;
        });
    }
    else if(e.key == "8") {
        num8.style.backgroundColor = "#c2c2c2";
        userInput.value += "8";
        this.addEventListener("keyup", function(){
            num8.style.backgroundColor = null;
        });
    }
    else if(e.key == "9") {
        num9.style.backgroundColor = "#c2c2c2";
        userInput.value += "9";
        this.addEventListener("keyup", function(){
            num9.style.backgroundColor = null;
        });
    }
    else if(e.key == "0") {
        num0.style.backgroundColor = "#c2c2c2";
        userInput.value += "0";
        this.addEventListener("keyup", function(){
            num0.style.backgroundColor = null;
        });
    }
    else if(e.key == "#") {
        num10.style.backgroundColor = "#c2c2c2";
        userInput.value += "#";
        this.addEventListener("keyup", function(){
            num10.style.backgroundColor = null;
        });
    }
    else if(e.key == "*") {
        num11.style.backgroundColor = "#c2c2c2";
        userInput.value +="*";
        this.addEventListener("keyup", function(){
            num11.style.backgroundColor = null;
        });
    }
    else if(e.key == "Enter") {
        addBtn.style.backgroundColor = "green";
        addBtn.style.color = "white";
        userInput.value = null;
        this.addEventListener("keyup", function(){
            addBtn.style.backgroundColor = null;
            addBtn.style.color = "green";
        });
    }
    else if(e.key == "Backspace") {
        resetBtn.style.backgroundColor = "#c2c2c2";
        resetBtn.style.color = "white";
        userInput.value = null;
        this.addEventListener("keyup", function(){
            resetBtn.style.backgroundColor = null;
            resetBtn.style.color = "#c2c2c2";
        });
    }

});
