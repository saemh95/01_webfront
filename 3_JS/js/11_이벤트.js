// inline event model
function check(btn) {
    console.log(btn);
    const bgColor = btn.style.backgroundColor;
    // 버튼이 클릭 될때 마다 change color from original to input color from JS
    if(bgColor == "darkcyan") {
        btn.style.backgroundColor = "darkred";
        btn.style.color = "white";
    } else {
        btn.style.backgroundColor = "darkcyan";
    }
}
// 고전 이벤트 모델

// bring id = "test 1-1" from html to "test1a" in JS
const test1a = document.querySelector("#test1-1");
test1a.onclick = function() {
    alert("HIHIHIHIHI");
}
// 고전 이벤트 모델 제거
const test1b = document.querySelector("#test1-2");
test1b.onclick = function() {
    // null = (event remove)
    test1a.onclick = null;
    alert("event removed");
}

// 선생님 방법
/*  document.querySelector("test1-2").onclick = function () {
    document.querySelector("test1-1").onclick = null;
} */

// 고전 이벤트 모델 단점
const test1c = document.querySelector("#test1-3");
test1c.onclick = function() {
    test1c.style.backgroundColor = "lightgreen";
}
//  -6개월 후-
/* const test1d = document.querySelector("#test1-3");
test1d.onclick = function() {
    test1d.style.color = "white";
} */
test1c.onclick = function() { 
    test1c.style.color = "white";
}
// original event model
const test2 = document.querySelector("#test2");
test2.addEventListener("click", function() {
    
    let curr = test2.style.opacity; //normaly opacity does not have a amount
    if(curr == '') {
        test2.style.opacity = 1;
        curr = 1;
    }
    test2.style.opacity = curr - .1;
    if(test2.style.opacity == 0) {
        test2.style.opacity=1;
    }
});
// #test2 onclick click count
let count = 0;
test2.addEventListener("click", function() {
    count ++;
    // document.getElementById("test2").innerText = count;
    // test2.innerText = count;
    this.innerText = count;
});

// change background-color
const userInput = document.querySelector("#input3");
const box = document.querySelector("#box3");

userInput.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        box.style.backgroundColor = userInput.value;
        userInput.value = "";
        userInput.focus();
        return;
    }
});

box.addEventListener("click", function(e) {
    // box.style.backgroundColor = "white";
    alert(`Color : ${e.target.style.backgroundColor}`);
});
/* userInput.addEventListener("keyup", function readValue(){}); */

/* userInput.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        userInput.onclick = function readValue(){};
    }
    console.log(userInput);
}); */


/* box.addEventListener("keyup", function() {
    if(userInput.key == "Enter") {
        readValue();
        box.style.backgroundColor =
    }
});  */

