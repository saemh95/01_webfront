/* MY STUPID CODE */

// const outline = document.getElementById("outline");
// const bomberman = document.getElementById("bomberman");
// const test = document.getElementById("test");

// test.addEventListener("keyup", function(e) {
//     console.log(e);
//     switch (bomberman) {
//     case "ArrowLeft": 
//         moveLeft(); 
//         console.log("Arrow Left Key Pressed")
//         break;
//     case "ArrowUp": moveUp(); break;
//     case "ArrowRight": moveRight(); break;
//     case 40: moveDown(); break;
//     }
//     bomberman.style.left += "5px";
// });
    /* if(e.key, "keypress") {
        if(e.key, "ArrowRight")
        bomberman.style.right += "5px";
        }
    }); */
// console.log(bomberman);


            
// console.log(outline);
/* outline.addEventListener("keydown", function(e) {
    // console.log(e);
    bomberman.addEventListener("keydown", function() {
        // i = true;
        if(e.key == "ArrowRight") {
            bomberman.addEventListener(); {
                bomberman.style.right += "5px";
            }
        }
    }) }); */

    /* TEACHER CODE */
let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown", function(e) {
    // console.log(e);
    const bomberman = document.getElementById("bomberman");

    switch (e.key) {
        case "ArrowRight" : xindex += 10; break;
        case "ArrowLeft" : xindex -= 10; break;
        case "ArrowUp" : yindex -= 10; break;
        case "ArrowDown" : yindex += 10; break;
        case "x" : 
        const box = document.getElementById("outline");
            box.innerHTML += 
            `<img src="/01_Webfront/img/bomberman/boom.png"style="transform: translate3d(${xindex}px, ${yindex}px, 0); position: absolute;">`;
        break;
    } 
    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;
});
