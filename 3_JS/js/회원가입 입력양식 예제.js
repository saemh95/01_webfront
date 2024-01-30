const id = document.getElementById("user-id")
const tag = document.getElementsByClassName("first");


id.addEventListener("keydown", (e) => {
    const idInput = document.getElementById("id-input");
    if (e.target.value.length == 0) {
        // idInput.style.backgroundColor = "red";
        id.classList.remove("confirm");
        id.classList.remove("error");
        
        // idBtn = alert("아이디를 입력하지 않았습니다.")
        return;
    }
    // if(regExp.test(e.target.value))
    const regExp = /[A-Za-z0-9-_]/;
    if (regExp.test(e.target.value)) {
        idInput.style.backgroundColor = "springgreen";
        id.classList.add("confirm");
        id.classList.remove("error");
    }
});

/* const idBtn = id.lastElementChild.firstChild;
idBtn.addEventListener("click", ()=> {
    const idInput = document.getElementById("id-input").value;
    if(idInput == 0) {alert("아이디를 입력하지 않았습니다.")}
    //영어 소문자로 시작하고 영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14글자 사이 문자열인지 검사
    
    // if(regExp.test(e.target.value)) {
        
    // }
})
console.log(idBtn); */
const password = document.getElementById("password");
const pwConfirmCheck = document.getElementById("duplicateCheckpassword");
const pwInput = document.getElementById("passwordInput");
const pwConfirm = document.getElementById("duplicateInput");

pwConfirm.addEventListener("keyup", function() {
    if (pwInput.value.trim() == "") {
        alert("비밀번호를 먼저 작성하세요.");
        pwInput.focus();
        pwConfirm.value = null;
        // console.log(pwInput.value);
    }
    const error = document.createElement("div");
    error.innerHTML = "비밀번호 불일치";
    error.style.color = "red";
    
    const confirm = document.createElement("div");
    confirm.innerHTML = "비밀번호 일치";
    confirm.style.color = "springgreen";

    if(pwInput.value != pwConfirm.value) {
        pwConfirmCheck.lastChild.remove();
        pwConfirmCheck.append(error);
    }
    if(pwInput.value == pwConfirm.value) {
        pwConfirmCheck.lastChild.remove();
        pwConfirmCheck.append(confirm);
    }
});
// console.log(pwConfirm);

const nameContainer = document.getElementById("name");
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keyup", (e) => {
    const regExp = /^[가-힣]{2,5}$/

    const confirm = document.createElement("div")
    confirm.style.color = "springgreen";
    confirm.innerHTML = "정상입력";

    const error = document.createElement("div");
    error.style.color = "red";
    error.innerHTML = "한글만 입력하세요";

    if (regExp.test(e.target.value)) {
        nameContainer.lastChild.remove()
        nameContainer.append(confirm);
    } else {
        nameContainer.lastChild.remove()
        nameContainer.append(error)
    }
});

const gender = document.querySelectorAll("[name=gender]");
const tel = document.querySelectorAll("#tel");

function validate() {
    if(gender[0].checked == false && gender[1].checked == false) {
        alert("성별을 선택해 주세요");
        e.preventDefault();
    }
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    if(tel.value == 0) {
        alert("전화번호를 입력해주세요")
        e.preventDefault();
    } else if (!regExp.test(tel.value)) {
    alert("전화번호의 형식이 올바르지 않습니다")
    } else {alert("회원가입 완료");}
}

console.log(gender);
console.log(tel);

const confirmBtn = document.getElementById("join-btn");
confirmBtn.addEventListener("click", (e) => {
    validate(e);
});

console.log(confirmBtn);