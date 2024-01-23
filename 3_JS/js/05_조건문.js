//  if - 양수인지 검사하기
const input1 = document.getElementById("input1")
function check1() {
    const input = Number(input1.value);
    if(input>0) {
        alert("양수입니다");
    }
    if(input<=0) {
        alert("음수입니다");
    }
}
// if else 홀짝 판별하기
function check2() {
    // 난수 발생 : Math.random()
    // 난수 발생 : 0 <= 1
    
    // 0~100 사이 난수
    const randomNumber = Math.floor(Math.random()*101);
    if(randomNumber%2==1) {
        alert(`${randomNumber}는 홀수 입니다`);
    } else {
        alert(`${randomNumber}는 짝수 입니다`);
    }
}
// if - else if - if
function check3() {
    const randomNumber = Math.floor(Math.random()*7)-3;
    let message = `${randomNumber} 은/는 `;
    if(randomNumber==0) {
        message += `0입니다`;
    } else if(randomNumber>0) {
        message += `양수입니다`;
    } else {
        message += `음수입니다`;
    }
    alert(message);
}
const userInput = document.getElementById("inputAge");

function check4() {
    const age = Number(userInput.value);

    if(userInput.value.length==0) {
        message = `값을 입력해주세요`;
    }  else {
        if(age<0||age>150) {
            message = `잘못 입력 하셨습니다`;
        } else if(age>=0 && age<=13) {
            message = `어린이`;
        } else if(age<=19) {
            message = `청소년`;
        } else {
            message = `성인`;
        }
    }
    alert(message)
}
// switch 문을 이용한 계산기
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const result = document.getElementById("calcResult")

function calc(calBtn) {
    // cal(매개변수 (parameter))
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    let result;

    // switch (calBtn) {
    //     case "+" : result = value1+value2;
    //     break;
    //     case "-" : result = value1-value2;
    //     break;
    //     case "*" : result = value1*value2;
    //     break;
    //     case "/" : result = value1/value2;
    //     break;
    //     case "%" : result = value1%value2;
    //     break;
    //     default : result = 'stopstopstop'; 
    //     break;
    // }

    if(calBtn=="+") {
        result = value1+value2
    } else if (calBtn=="-") {
        result = value1-value2
    } else if (calBtn=="*") {
        result = value1*value2
    } else if (calBtn=="/") {
        result = value1/value2
    } else if (calBtn=="%") {
        result = value1%value2
    } else {
        result = "stopstopstop"
    }

    calcResult.innerText = result;
}
