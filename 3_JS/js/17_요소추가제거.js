const add = document.querySelector(".container");

// 추가 버튼 클릭 시
document.querySelector("#add").addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("row");
    add.append(div);

    const input = document.createElement("input");
    input.classList.add("input-number");
    input.setAttribute("type", Number); // input.type = "number";
    div.append(input);

    const span = document.createElement("span");
    span.classList.add("remove-row");
    div.append(span);

    span.innerHTML = `&times;`;
    
    // 제준이형 스타일
    /* span.addEventListener("click", () => {
        span.previousElementSibling.remove();
        span.remove();
    }); */
    /* 슨생님 스타일 */
    span.addEventListener("click", e => {
        const parent = e.target.parentElement;
        parent.remove();
    });
   
});
// const remove = document.querySelectorAll("remove-row");

/* remove.addEventListener("click", () => {
    span.classList.remove("input-number");
}); */
const calc = document.querySelector("#calc");
calc.addEventListener("click", () => {
    const userInput = document.querySelectorAll(".input-number");
    let result = 0;

    for (let i=0;i<userInput.length;i++) {
        result += Number(userInput[i].value);
    }
    console.log(result);
    alert(result);
});