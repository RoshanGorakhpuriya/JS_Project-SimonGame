let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");

let btns = ["yellow" , "red" , "green" , "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress" , function(){
    if(started == false)
    {
        console.log("Game has started\n")
        started = true;
    }
    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
    gameSeq.push(randColor);
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp , 1000);
        }
    }
    else
    {
        h2.innerHTML = `Game over,Your score <b>${level}</b> <br> try again\n`;

        let previous = level;

        reset();
    }
}

function pressBtn(){
    let btn = this;
    console.log(btn);
    userFlash(btn);
    
    let userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click" , pressBtn);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
