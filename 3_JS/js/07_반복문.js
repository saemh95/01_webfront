for(let num=1;num<=5; num++) {
    // 조건식이 true; 일 경우만 반복 수행할 코드;
    console.log("통과!");
}
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