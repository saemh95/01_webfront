//변수 선언
const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");
// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
    // 값을 얻어오는 방법 : input요소.value
    const value1 = number1.value;
    const value2 = number2.value;
    // console.log(value1, value2);
    // console.log("두 수의 합 : ", value1+value2);
    // -> input 요소에 작성된 값 무조건 문자열(string)
    // 더했을 때 이어쓰기 되는 문제가 발생
    // [해결방법]
    // string -> number == Number("value")
    // console.log("두 수의 합 : ", Number(value1)+Number(value2));
    
    // 내부 글자 (innerText, HTML 요소 내용)
    result.innerText = Number(value1)+Number(value2);
};
function minusFn() {
    const value1 = Number(number1.value)
    const value2 = Number(number2.value)
    result.innerText = value1-value2;
}
function multiFn() {
    const value1 = Number(number1.value)
    const value2 = Number(number2.value)
    result.innerText = value1*value2;
}
function divFn() {
    const value1 = Number(number1.value)
    const value2 = Number(number2.value)
    result.innerText = value1/value2;
}
function modFn() {
    const value1 = Number(number1.value)
    const value2 = Number(number2.value)
    result.innerText = value1%value2;
}
//
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total")

function totalFn() {
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);
    total.innerText = value1+value2+value3;
}
// 증그/감소 연산자 (++,--)
// 증가, 감소할 수를 저장할 변수 선언
let count = 0;
const result2 = document.getElementById("result2")
function increase() {
    count++;
    result2.innerText = count;
}
function decrease() {
    count--;
    result2.innerText = count;
}
// 전위, 후위 연산 확인하기
function check() {
    let count = 100;
    // CPU에게 연산이란 : 코드를 하나하나 실행하는 행위
    // 전위 연산(++count, --count)
    // console.log("++count : ", ++count);
    // 후위 연산(count++, count--)
    count = 50;
    console.log("count++ : ", count++);

    console.log("-------------")
    let a = 10;
    let b = 5;
    let c = ++a * b--;
    // 최종적으로 a,b,c,에 저장된 값은 얼마?
    // a == 11
    // b == 4
    // c == 55
}