// prompt 사용 연습
function test() {
    const password = prompt("비밀번호를 입력하세요");
    // 확인 -> string
    // 취소 -> null
    if(password==null) {
        alert("취소");
    } else {
        if(password=="1234") {
            alert("확인 되었습니다");
        } else {
            alert("비밀번호 다시 입력해주세요");
        }
    }
}

let balance = 10000;
const password1 = '1234';
output.innerText = balance;
// 입금
function deposit() {
    if(amount.value.length==0) {
        alert("금액을 입금해주세요.")
    } else {
        balance += Number(amount.value);
        output.innerText = balance;
        alert(`입금하셨습니다. 잔액 : ${balance}`)
        amount.value = "";
    }
}
// 출금
function withdrawal() {
    if(amount.value.length==0) {
        alert("금액을 입력해주세요.");
    } else { //비밀번호가 일치하지 않을경우
        const password1 = prompt("비밀번호를 입력하세요.");
        if(password1==null) {
            alert(`취소`);
        } else { //비밀번호가 일치하는 경우
            if(password1!='1234') {
                alert("비밀번호를 다시 입력하시오.");
            } else {
                const money = Number(amount.value);
                // 출금할 금액이 잔액보다 큰경우
                if(money>balance) {
                    alert("츨금 금액이 잔액보다 클 수 없습니다.");
                } else {
                    alert(`${money}원이 출금 되었습니다. 남은 잔액 ${balance}`)
                    balance -= money;
                    output.innerText = balance;
                    amount.value = ''; //input에 작성된 값 제거
                }
            }
        } 
    }
}