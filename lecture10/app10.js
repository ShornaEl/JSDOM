let btns = document.querySelectorAll("button");
for(btn of btns){
    console.dir("btn")
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",print);
}
function  sayhello(){
    alert("hello")
}
function print(){
    alert("apnacollege")
}
