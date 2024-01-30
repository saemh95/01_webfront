document.getElementById("btn1").addEventListener ("click", () => {
    setTimeout(() => {
        alert("3초후 출력!")
    }, 1000); //1000마다 1초
});

// 현재 시간을 문자열로 반환하는 함수를 만들것이다
function currentTime (){
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hour <10) {
        hour = "0" + hour;
    }
    if(min <10) {
        min = "0" + min;
    }
    if(sec <10) {
        sec = "0" + sec;
    }

    return hour + " : " + min + " : " + sec;
}

function clockFn() {
    const clock = document.getElementById("clock")
    clock.innerText = currentTime();

    internal = setInterval(function() {
        clock.innerText = currentTime(); 
    }, 1000);
}

clockFn();

document.getElementById("stop").addEventListener("click", ()=> {
    clearInterval(internal);
})