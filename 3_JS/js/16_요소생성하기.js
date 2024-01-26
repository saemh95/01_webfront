const createBox = document.querySelector("createBox");
const container = document.querySelector(".container test box-container");

createBox.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("box");
    // const input = document.createElement("input");   
    container.append(div);
});
const innerHTMLBox = document.querySelector("#innerHTRMLBox");
innerHTMLBox.addEventListener("click", )
/* createBox.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
}) */

/* 
.classList
.classList.contains("class name")
.classList.add("class name")
.classList.remove("class name")
 */