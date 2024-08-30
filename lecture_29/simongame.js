let started = false
let level = 0
h2 = document.querySelector("h2")
btns = ["red","green","blue","yellow"]
gameSequence = []
userSequence = []
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started")
        started = true
        levelUP();
    }
})
function gameflash(btn){
    btn.classList.add("flash")
    setInterval(function(){
         btn.classList.remove("flash")
    },250)
}
function userflash(btn){
    btn.classList.add("userflash")
    setInterval(function(){
         btn.classList.remove("userflash")
    },700)
}
function levelUP(){
    userSequence = []
    level++
    h2.innerText = `Level ${level}`
    //choose random button
    ranIndx = Math.floor(Math.random()*(btns.length -1))
    random_btn_class = btns[ranIndx]
    random_btn = document.querySelector(`.${random_btn_class}`)
    gameflash(random_btn);
    gameSequence.push(random_btn_class)
}
function checSequence(idx){
   if(userSequence[idx]==gameSequence[idx]){
    if(userSequence[level -1]==gameSequence[level-1]){
        levelUP()
    }
   }
   else{
    h3.innerText = "game over ! Press any key to start"
    reset()
   }
}


acess_btns = document.querySelectorAll(".el")
for(btn of acess_btns){
    btn.addEventListener("click",function(){
        userflash(this)
        console.dir(this)
        userSequence.push(this.classList[1])
    })
    checSequence(userSequence.length - 1)
}
function reset(){
    gameSequence = []
    userSequence = []
    started = false
}

console.log(gameSequence)
console.log(userSequence)