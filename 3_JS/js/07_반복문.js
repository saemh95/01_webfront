// for(let num=1;num<=5; num++) {
//     // 조건식이 true; 일 경우만 반복 수행할 코드;
//     console.log("통과!");
// }
function check1() {
    let result = "";
    for(let num=1;num<=5;num++) {
        // console.log(num);
        result += num; //string
        // result = result + num;
        //  "1"   =  ""    + 1 ;
        //  "12"   =  "1"    + 2 ;
        //  "123"   =  "12"    + 3 ;
        //  "1234"   =  "123"    + 4 ;
        //  "12345"   =  "1234"    + 5 ;
    }
    console.log(result); //only 5th one
}
function check2() {
    //1부터 10까지 1씩 증가하며 출력
    for(let num=1;num<=10;num++) {
        console.log(num);
    }
}
function check3() {
    for(let num=1;num<=20;num++) {
        console.log(num);
    }
}
function check4(){
    for(let num=5;num<=15;num++) {
        console.log(num);
    }
}
function check5() {
    let final;
    for(let num=1;num<=15;num++) {
        final = (num+num);
        console.log(final);
    }
    // for(let num=1;num<=30;num+=2) {
    //
    //}
}
function check6() {
    let number1 = 0;
    for(let num=1;num<=10;num++) {
        number1 += num;
    }
    console.log(number1);
}
// 입력 받은 범위 내 모든 정수의 합 구하기
function sumFn() {
    // input에 작성된 값을 얻어와 저장
    const number1 = Number(document.getElementById("inputNumber1-1").value);
    const number2 = Number(document.getElementById("inputNumber1-2").value);
    const result = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;
    // 1 부터 2 까지 1씩 증가하는 for문
    for(let num=number1;num<=number2;num++) {
        sum += num;
        // num 값을 num 에 누적
    }
    result.innerText = sum;
}
// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);
    // 결과 추가할 ul 요소
    const ul = document.getElementById("result2");
    ul.innerHTML = '';
    // start 부터 end까지 vla씩 증가
    for(let num=start; num<=end; num+=val) {
        ul.innerHTML+=`<li>${num}</li>`;
    }
}
function executeFn3() {
    const input = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");

    ul.innerHTML = '';
    if (input < 2 || input > 9 ) {
        alert ("")
        return;
    }
    for (let num = 1; num <=9; num++ ) {
        ul.innerHTML += `<li>${input} x ${num} = ${input*num}`;
    }
}
function check8() {

    for (let num=1;num<=4;num++) {
        let str = "";
        for(let num2=1; num2<=5; num2++) {
            str += num2;
            console.log(str);
        }
    }
}
/* function check9() {
    let result = "";
    for (let num=1; num<=5; num++) {
        result += num;
        console.log(result);
    }
} */
function check9() {
    for (let num1=1; num1<=5; num1++) {
        let result = "";
        for (let num2=1; num2<=num1; num2++) {
            result += num2;
        }
        console.log(result);
    }
}
// while 문 확인
function check16() {
    let val;
    // prompt 창에 취소를 누르기 전까지 반복
    // == 취소를 누르면 반복하지 않겠다
    while(val !== null) {
        // (!==) 동일 비교 연산자: 값, 자료형이 모두 다른경우
        // (===) 값, 자료형이 모두 같은 경우
        // (!=) 값이 다른경우
        val = prompt("입력 후 확인");
        // 확인 -> 입력한 값
        // 취소 -> null
        console.log(val);
    }
}
function check17() {
    const menu1 = 3000;
    const menu2 = 3500;
    const menu3 = 5000;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    let val; //prompt로 입력한 값을 저장할 변수 선언

    while(val !== null) {
        val = prompt("메뉴를 번호를 입력하세요");

        switch (val) {
            case "1" : count1++; break;
            case "2" : count2++; break;
            case "3" : count3++; break;
            case null : alert("주문 완료"); break;
            default : alert("없는 메뉴입니다"); break;
        }
    }
    alert(`김밥 : ${count1}, 라면 : ${count2}, 돈가스 : ${count3}`);
    let sum = (count1*menu1) + (count2*menu2) + (count3*menu3);
    alert(`총 가격 : ${sum}원`);
}
// while => for
function check18() {
    // 1부터 10까지 출럭
    // let num = 1;
    // while(num <= 10) {
    //     console.log(num);
    //     num++;
    // }
    // 10 부터 1까지 1씩 감소
    let num2 = 10;
    while(num2 >= 1) {
        console.log(num2);
        num2--;
    }
}