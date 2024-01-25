// 문자열.toLowerCase() : all capital to lowercase
// 문자열.toUpperCase() : all lowercase to capital
const key = document.getElementsByClassName("key");

document.addEventListener("keydown", function(e) {
    if(e.key, "qwer") {
        if(e.key == "q") {
            key[0].style.backgroundColor = "green";
            this.addEventListener("keyup", function(){
                key[0].style.backgroundColor = null;
            });
        } else if(e.key == "w") {
            key[1].style.backgroundColor = "green";
            this.addEventListener("keyup", function(){
                key[1].style.backgroundColor = null;
            });
        } else if(e.key == "e") {
            key[2].style.backgroundColor = "green";
            this.addEventListener("keyup", function(){
                key[2].style.backgroundColor = null;
            });
        } else if(e.key == "r") {
            key[3].style.backgroundColor = "green";
            this.addEventListener("keyup", function(){
                key[3].style.backgroundColor = null;
            });
        } 
    }
});