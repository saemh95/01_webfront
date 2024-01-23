const compareValue1 = document.getElementById("compareValue1")
const compareValue2 = document.getElementById("compareValue2");
const result1 = document.getElementById("result1");

function compareFn1() {
    const value1 = compareValue1.value;
    const value2 = compareValue2.value;
    
    // console.log(value1 == value2);
    result1.innerText = (value1 == value2);
}
const compareValue3 = document.getElementById("compareValue3");
const compareValue4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");

function compareFn2() {
    const value1 = Number(compareValue3.value);
    const value2 = Number(compareValue4.value);

    result2.innerText = (value1>value2);
}
// 배수 확인
const input1 = document.getElementById("input3_1");
const input2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3");

function checkFn3() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    // vectic (``)
    // 문자열 전체를 vectic(`)으로 감싼후
    // 변수, 연산결과 등이 출력되는 자리에 ${변수명} 또는 ${연산삭}을 작성
    result3.innerText = `${value1}은/는 ${value2}의 배수 : ${value1%value2==0}`;
}
// 입력된 값 만큼 누적/차감
let count4 = 0;
const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4");

function minus4() {
    const v1 = Number(input4.value);
    //count4 = count4 - v1;
    count4 -= v1;
    result4.innerText = count4;
}
function plus4() {
    const v1 = Number(input4.value);
    count4 += v1;
    result4.innerText = count4;
}
// 논리 연산자 확인하기
function checkFn5() {
    // and (&&) 연산자
    const bool1 = (104 >= 100) && (104%2==0);
    console.log(`104는 100이상의 수 이면서, 짝수인가? ${bool1}`)

    const bool2 = (50<=70) && (50%4==0);
    console.log(`50은 70이하이고, 4의 배수인가? ${bool2}`);

    const bool3 = (1<=13) && (13<=10);
    console.log(`13은 1부터 10사이의 수가 맞는가? ${bool3}`)

    // or (||) 연산자
    const bool4 = (4>10) || (4%2==0)
    console.log(`4는 10을 초과 하거나, 짝수인가? ${bool4}`);

    const bool5 = (50<=0) || (50>=40)
    console.log(`50은 0 이하 또는 40이상인가 ${bool5}`);

    // Not(!) 연산자
    let test = true;
    console.log(`!true= ${!test}`);
    console.log(`!false= ${!false}`);

    const bool6 = false
    console.log(!(bool6!=true));
}
// 삼항 연산자
const id = document.getElementById("inputId");
const pw = document.getElementById("inputPw");

function login() {
    const id1 = id.value;
    const pw1 = pw.value;

    const success = "로그인 성공!";
    const fail = "로그인 틀림~!";

    const message = 
        (id1=='member01') && (pw1=='pass01!') ? success : fail;
    alert(message);
}
function checkFn5() {

}