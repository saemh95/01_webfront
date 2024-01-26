// node 확인하기

document.querySelector("#btn1").addEventListener("click", () => {
    const test = document.querySelector("#test");
    const list = test.childNodes;
    console.log(list);
    // 자식 노드중 첫번째 li 요소
    const li1 = list[3]
    // 1. 부모노들찾기 .parentNode
    li1.parentNode.style.backgroundColor = "black";
    // 2.1st child
    console.log(test.firstChild);
    // 3.last child
    console.log(test.lastChild);
    // 4.children
    console.log(test.childNodes[9]);
    test.childNodes[9].style.backgroundColor = "white";
    // before
    console.log(test.previousSibling);
    // after
    console.log(test.nextSibling);
    console.log(test.nextElementSibling);
    test.nextElementSibling.style.backgroundColor = "magenta";
    // 노드 추가
    // 1. 마지막 자식 노드로 추가
    list[9].appendChild(document.createTextNode(" zzz"));
    // 2. last child 추가 (apprend("내용" 또는 노드 또는 요소*n))
    list[9].append("1234",1234);
    // 3.first child
    list[9].prepend("hello");
    // 4.before/after brothers
    test.before("before");
    test.after("after");
});

/* [Element만 탐색하는 방법]

children : 자식 요소만 모두 선택
parentElement : 부모 요소 선택

firstElementChild : 첫 번째 자식 요소 선택
lastElementChild  : 마지막 자식 요소 선택

previousElementSibling : 이전 형제 요소 선택
nextElementSibling     : 다음 형제 요소 선택

    */
   const btn2 = document.querySelector("#btn2");
   btn2.addEventListener("click", () => {
    const test2 = document.querySelector("#test");
    const list = test2.children;
    console.log(test2.children);
    console.log(test2.parentElement);
    console.log(test2.firstElementChild);
    console.log(test2.lastElementChild);
    console.log(test2.previousElementSibling);
    console.log(test2.nextElementSibling);
    console.log(list);
    
   });