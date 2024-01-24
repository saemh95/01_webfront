// 배열 선언 및 기초 사용법
function check1() {
    // 배열 선언
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["apple", "bannana", "straberry"];
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    // Array.length : array length (칸수/데이터 수)
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);
    // Array index
    // - each line of array
    // - starts with 0 ->
    // - can't be disrupted in the middle == numbering is continuem
    // - last index number == array list -1

    // array[index#] ->  the numbering of index#
    console.log('arr4[0] : ', arr4[0]);
    // array[index#] = 값; override index
    arr2[0] = 100;
    arr2[1] = "hello world";
    arr2[2] = true;
    // 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[4] = "나나";
    console.log(arr1);

    // 원하는 index에 값을 마음대로 추가
}
// Array & for -1

function check2() {
    // for문을 이용해서 배열 요소 초기화
    // 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것
    
    const arr1 = []

    arr1[0] = 1;
    arr1[1] = 2;
    arr1[2] = 3;
    arr1[3] = 4;

    const arr2 = []

    for(let i=0; i<=3; i++) {
        arr2[i] = i;
    }
    console.log(arr2);
}
// array & for - 2
function check3() {
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    const arr = [10,20,50,100,500,100];
    for(let i=0; i<arr.length; i++) {
        console.log(`arr[${i}] == ${arr[i]}`);
    }
}

// arry & for -3
function check4() {
    //for문은 이용해서 배열을 순서대로 초기화 한 후
    //다른 for문을 이용해서 배열 요소를 하나씩 모두 출력
    const arr = new Array(5);
    //1. 배열을 순서대로 초기화
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Number(prompt(`${i} 번째 숫자 입력`));
    }
    //2. 배열 요소를 하나씩 모두 출력 + sum
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        console.log(`arr[${i}] : ${arr[i]}`);
        sum += arr[i];
    }
    console.log("sum : ",sum);
}
// 저녁 메뉴 뽑기
function selectMenu() {
    const menuResult = document.getElementById("menuResult");
    // 저녁 메뉴로 초기화된 배열 생성
    const menu = ["찜닭", "닭강정", "닭볶음탕", "백숙", 
                    "치킨", "통닭", "닭갈비", "삼계탕"];
    //menu array index 범위 내애서 random(난수) 생성
    const randomNumber = Math.floor(Math.random()*menu.length);
    
    menuResult.innerText = menu[randomNumber];
}
//2차원 배열
function check5() {
    const arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12]]
    console.log(arr[1][3]);
    console.log(arr[2][2]);
    // const arr1 = [];
    const arr2 = [,,,600];
    // arr[3] = arr1
    arr[4] = arr2;
    console.log(arr[4][3]); //600
}
// 2부터 2씩 증가하는 수를
// 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6() {
    
    let count=2;
    const arr = []
    for (let row=0;row<5;row++) {
        arr[row] = [];
        // for (let i2)
        // console.log(i);
        for (let col=0;col<5;col++) {
            arr[row][col] = count;
            count += 2;
        }
    }
    console.log(arr);
}