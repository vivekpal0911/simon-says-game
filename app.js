let gameSeq = [];
let userSeq = [];


let btns = ["red", "green", "yellow", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Is Started");
        started = true;

        levelup();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

    
let randIdx = Math.floor(Math.random() *4);
let randColor = btns[randIdx];
let randbtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
btnFlash(randbtn);

}

function checkAns(idx){
    // console.log("curr level:" , level);
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";    
        },150)
        reset();
    }

}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq=[];
    gameSeq=[];
    level=0;
}


 