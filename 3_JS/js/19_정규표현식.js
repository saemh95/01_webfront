document.getElementById("btn1").addEventListener("click", () => {
    const regExp1 = new RegExp("script");

    const regExp2 = /java/;

    const str1 = "저희는 지금 javascript를 공부하고 있습니다";
    const str2 = "jsp(java server page) 도 나중에 할겁니다";
    const str3 = "java, java, java";

    console.log(regExp1.test(str1));
    console.log(regExp1.test(str2));
    console.log(regExp1.test(str3));

    console.log(regExp2.test(str1));
    console.log(regExp2.test(str2));
    console.log(regExp2.test(str3));

});

document.getElementById("btn2").addEventListener("click", () => {
    const div1 = document.getElementById("div1");

    const regExp1 = /\w/;
    div1.innerHTML += "/a/, apple: " + regExp1.test("apple") + "<hr>";
    div1.innerHTML += "/a/, price: " + regExp1.test("price") + "<hr>";
    div1.innerHTML += "/p/, price: " + regExp1.test("price") + "<hr>";

    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/, ssbbss : " + regExp2.test("ssbbss") + "<hr>";
    div1.innerHTML += "/[abcd]/, qwert : " + regExp2.test("qwert") + "<hr>";
    
    const regExp3 = /^group/;
    div1.innerHTML += "/[^group], group100 : " + regExp3.test("group100") + "<hr>";
    
    const regExp4 = /group$/;
    div1.innerHTML += "/[group$], group100 : " + regExp4.test("group100") + "<hr>";
});
document.getElementById("inputName").addEventListener("keyup", function() {
    const span = document.getElementById("inputNameResult");
    const regExp5 = /^[ㄱ-힣]{2,5}$/;

    console.log(this.value);
    if(this.value.length == 0 ){
        span.innerText = "";
        return;
    }
    if(regExp5.test(this.value)) {
        span.innerText = "유효한 이름 형식 입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    }else {
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
});

document.getElementById("inputPno").addEventListener("keyup", (e) => {
    const span = document.getElementById("inputPnoResult");
    if(e.target.value.length == 0 ){
        span.innerText = "주민등록번호를 작성해주세요";
        span.classList.remove("confirm");
        span.classList.remove("error");
        return;
    }
    const regExp = /^\d{6}\-\d{7}$/;
    
    if(regExp.test(e.target.value)) {
        span.innerText = "유효한 주민등록 번호 형식입니다.";
        span.classList.remove("error");
        span.classList.add("confirm");
    }else {
        span.innerText = "유효하지 않습니다.";
        span.classList.remove("confirm");
        span.classList.add("error");
    }
})