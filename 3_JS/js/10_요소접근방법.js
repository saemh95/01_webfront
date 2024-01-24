//클래스 접근 테스트
function classTest() {
    const test = document.getElementsByClassName("cls-test");
    console.log(test);
    // HTMLCollection == 유사배열 == index, length (o) / method [push, pop](x)
    test[0].style.backgroundColor = "rgb(230, 230, 230)";
    test[1].style.backgroundColor = "rgb(220, 220, 220)";
    test[2].style.backgroundColor = "rgb(210, 210, 210)";
}
// tag 명으로 접근
function tagNameTest() {
    const tagList = document.getElementsByTagName("li");
    console.log(tagList);

    for (let i=0; i<tagList.length; i++) {
        console.log(tagList[i].innerText);

        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
    // tagList[0].style.backgroundColor = "#ffbe0b";
    // tagList[1].style.backgroundColor = "#fb5607";
    // tagList[2].style.backgroundColor = "#ff006e";
    // tagList[3].style.backgroundColor = "#8338ec";
    // tagList[4].style.backgroundColor = "#3a86ff";
}

// name 으로 요소 접근
function nameTest() {
    const hobbyList = document.getElementsByName("hobby");
    const result = document.getElementById("name-div");
    
    let str = ""; //체크된 값 누적
    let count = 0; //체크된 수
    
    for(let i=0;i<hobbyList.length; i++) {
        // checkbox, radio = .checked
        // input요소.checked -> 요소가 체크되어 있으면 true, 아님 false
        // input요소.checked = true -> 해당 요소를 체크
        // input요소.checked = true -> 해당 요소를 체크해제
        if(hobbyList[i].checked) {
            str += hobbyList[i].value + " ";
            count++;
        }
    }
    //#name-div 요소에 내용 출력
    result.innerHTML = `<br>${str} <br><br>선택된 취미 개수 : ${count}`;
}
//css 선택자로 요소 접근하기
/* 
[요소1개]
1) document.querySelector()
    -> 선택자가 선택한 요소 중 첫번째 요소를 반환
[요소n개 -> 배열]
2) document.querySelectorAll()
    -> 선택한 요소 모두를 배열 반환
*/
// targe-div 속성값 접근 (css-div)
function cssTest() {
    const container = document.querySelector("[target-div='css-div']");

    container.style.border = "10px solid red";
    //첫번째 자식 div -> 내용을 "ccs 선택자로 선택해서 값 변경됨"
    const firstDiv = document.querySelector("[target-div='css-div'] > div");
    console.log(firstDiv);
    firstDiv.innerText = "ccs 선택자로 선택해서 값 변경됨";
    const secondDiv = document.querySelector("[target-div='css-div'] > div:last-child");
    console.log(secondDiv);
    secondDiv.innerText = "hihi";

    const divList = document.querySelectorAll("[target-div='css-div'] > div");
    console.log(divList);
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    for(let i=0; i<divList.length; i++) {
        divList[i].onclick = function() {
            alert(`${i} 번째 요소 입니다!`)
        }
    }
} 
// 카카오톡 채팅 화면 만들기
function readValue() {
    //채팅이 출렬되는 배경
    const bg = document.querySelector("#chatting-bg");

    //채팅 내용 입력 input
    const input = document.querySelector("#userInput");

    //입력된 값이 없을 경우
    // 1) 진짜 안적음
    // 2) 공백만 적음

    //문자열.trim() : 문자열 좌우 공백 제거
    if(input.value.trim().length==0) {
        alert("채팅 내용을 입력해주세요");

        input.value =""; 
        input.focus(); //input에 커서 활성화
        return; // 현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
    }
    //채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`
    //bg.scrollHeight == bg의 스크롤 전체 높이
    //bg.scrollTop  == bg의 스크롤 윗부분 위치
    //bg.scrollTop = 값; == 스크롤 윗부분을 값 위치로 이동
    //(값이 너무 크면 제일 밑으로 이동)
    bg.scrollTop = bg.scrollHeight;
    input.value = "";
    input.focus();
}
/* 아이디가 userInput인 요소에서
키카 올라오는 동작이 발생했을 때
올라온 키카 "Enter"이라면 readValue()함수를 호출 */
// keydow == (event) when key is pressed -> function run
// keyup == (even) when key is unpressed after pressed (pressed 1time)
document.querySelector("#userInput")
.addEventListener("keyup", function(e) {
    //e == (발생한 event 정보를 담고있는 type)
    // console.log(e);
    if (e.key == "Enter") {
        readValue();
    }
}); 