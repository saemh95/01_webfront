// 분기문 break 확인
function check1() {
    // 1부터 10까지 1씩 증가하다가 5되면 멈춤
    for (let i = 1; i <= 10; i++) {
        console.log('i : ', i);
        if(i == 5) break;
    }
}
// 문한 반복하는 while문 멈추기
function check2() {
    let i = 1;
    // 10 초과시 멈춤
    while(true) {
        console.log('i :', i++);
        if(i == 11) break;
    }
}
// continue 확인하지
function check3() {
    // 1부터 20까지 출력, 단 3의 배수 건너뛰기
    for (let i = 1 ; i<=20; i++) {
        // 3의 배수인 경우
        if (i%3==0) continue;
        console.log('i : ', i);
    }
}
function check4() {
    // 1부터 30까지 1씩 증가; 단 홀수 또는 10의 배수는건너뛰기
    for (let i = 1; i<=30; i++) {
        if (i%2==1 || i%10==0) continue;
        // if (i%10==0) continue;
        console.log('i : ', i);
    }
}

function check5() {
    // 0부터 9까지 5줄 출력 
    // - 각 줄에서 4의 배수는 건너뛰기
    // - 3번째 줄 출력후 멈추기
    for (let row = 1; row <= 5; row++) {
        let val = "";
        for (let col=0;col=9;col++) {
            if (col != 0 && col % 4 == 0) continue;
            val += col;
        }
        console.log(val);
        if (row == 3)break;
    }
    // console.log('i : ', result);
}

function startGame() {
    // 1~100사이 나ㄴ수를 몇 회만에 맞추는지 카운트하는 게임
    // 1. while = promt 
    // 2. if userInput == cpuNum end
    let userInput;
    const cpuNum = 50;
    while(userInput !== null) {
        
        userInput = prompt("업다운 게임 1~100")
        for (count = 0; count <=100; count++) {
            if(userInput > 1 || userInput <50) {
                prompt(`UP : count ${count}`);
            } else if (userInput > 50 || userInput <=100) {
                prompt(`DOWN : count ${count}`);
            } else {
                prompt("잘못 입력하셨습니다");
            }

        }
    }
}