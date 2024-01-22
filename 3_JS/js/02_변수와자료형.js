// console.log(값)
// browser console () 내부의 값을 출력

console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표를 작성해야 한다!")
console.log('JS는 홀따옴표도 문자열로 취급한다!')

// 
// 변수 선언 : 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류 변수명;
var number1;
// 변수에 값 대입 : 선언된 변수에 값을 대입
// 작성법 : 변수명 = 값;
number1 = 10;   
console.log(number1);
// 변수 선언 + 대입
// 작성법 : 변수종류 변수명 = 값
var number2 = 20;
console.log(number2);
console.log(number1 + number2);
console.log(number1 / number2);
console.log(number1, number2);
// 변수에 대입한 값 변경하기
var number1 = 300;
var number2 = 400;
console.log(number1);
console.log(number2);
console.log(number1+number2);
console.log("number1의 값 : " + number1);

// var, let, const의 차이점
// 1. var (변수, 변수 선언시 중복되는 변수명으로 선언 간능)
//          -> 먼저 선언된 변수가 나중에 선언된 변수에 덮어 씌워짐

var menu = "삼겹살";
console.log("menu : " + menu);
var menu = "초밥";
console.log("men    u : " + menu);
// 변수명이 중복되어 덮어쓰기 되면
// 이전에 선언 해놓은 변수를 쓸 수 없게 되는 문제가 발생

// 2. let (변수, var의 변수명 중복 문제 해결)
let number3 = 25;
// let number3 = 250;
console.log(number3);
number3 = 500;
console.log(number3);

// 3. const (constant, always same)
// 한번 값이 대입되면 새로운 값을 대입할 수 없다
const PI = 3.141592;

// PI = 1.23; TypeError: Assignment to constant variable.
console.log("PI", PI);

// 함수 레벨 스코프 : 함수 내에서 선언된 변수는 함수 내에서만 유효하며, 함수 외부에서는 팜조할 수 없다.
// 함수 내부에서 선언한 변수는 지역 변수, 함수 외부에서 선언한 변수는 모두 전역 변수이다.

// 블록 레벨 스코프 : 모든 코드 블록 내에서 선언된 변수는 코드블록 내에서만 유효하며, 코드 블록 외부에서는 참조할수 없다.
// 코드 블록 내부에서 선언한 변수는 지역 변수이다.

// block-level (let/const)
let foo = 123; //전역 변수
{   let foo = 456; //지역 변수
    let bar= 456;  // 지역 변수
    console.log(foo);
    console.log(bar);
}
console.log(foo);
// 함수-level
var test = 123;
{
    var test = 135;
}
console.log(test);
// JS 자료형 확인하기
//typeof 연산자 : 변수/값의 자료형을 출력하는 연산자

// undefined : 정의되지 않는 변수/값이 아직 대입되지 않았다
let undef;
console.log(undef, typeof undef);
console.log(typeof test);

//string : "" 내부에 작성된 값
const name1 = "홍길동";
console.log(name1, typeof name1);

const tel = '01012341234';
console.log(tel, typeof tel);

const gender = "M";
console.log(gender, typeof gender);

//number : 정수, 실수, 양수, 음수 0 등 모든 숫자
const age = 25;
const height = 178.9;
console.log(age, typeof age, height, typeof height);

//boolean : True/False
const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue, isFalse, typeof isFalse);

//object : 객체, 값을 여러개 저장할 수 있는 형태
// 1) Array : 여러 값이 나열되어 있는 것의 묶음
const number4 = [1,2,3,4,5];
console.log(number4[0], typeof number4[0])
console.log(number4, typeof number4);
const userInput = ["가위","바위","보"]
console.log(userInput);

// 2) JS 객체
// 값을 k:v (map) 형식으로 여러개 저장하는 형태
// {k:v, k:v, k:v ..}
// k(key) : 값을 구분하는 이름 (변수명 비슷)
// v(value) : K에 대응되는 값 (변수에 대입되는 값 비슷)

const user = { id : "user01", pw : "pass01", userName : "홍길동"};
console.log(user);
// 객체에 존재하는 값 하나씩 얻어오기
// 방법 1 : (변수명["key"])
console.log(user["id"]);
console.log(user["pw"]);
console.log(user["userName"]);
// 방법 2 : (변수명.key)
console.log(user.id);
console.log(user.pw);
console.log(user.userName);

//함수 (function)
// const 변수명 = function () {};
// 변수명 == 함수명

const sumFn = function (a, b) {
    return a+b
};
/* function sumFn(a, b) {
    return a+b;
};
is the same thing
*/ 
console.log(typeof sumFn);
console.log(sumFn(3, 5),);