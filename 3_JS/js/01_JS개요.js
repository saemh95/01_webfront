function externalFn() {
    alert("external file JS!");
}
// JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색을 변경
const body = document.querySelector("body");
function darkMode() {
    body.style.color = "white";
    body.style.backgroundColor = "black";
}
function lightMode() {
    body.style.color = "black";
    body.style.backgroundColor = "white";
}