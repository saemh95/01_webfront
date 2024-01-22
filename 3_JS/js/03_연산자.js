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
    const value1 = number1.value
    const value2 = number2.value
    result.innerText = Number(value1)-Number(value2);
}
function multiFn() {
    const value1 = number1.value
    const value2 = number2.value
    result.innerText = Number(value1)*Number(value2);
}
function divFn() {
    const value1 = number1.value
    const value2 = number2.value
    result.innerText = Number(value1)/Number(value2);
}
function modFn() {
    const value1 = number1.value
    const value2 = number2.value
    result.innerText = Number(value1)%Number(value2);
}