btn = document.querySelector("button")
p = document.querySelector("p")
h1 = document.querySelector("h1")
h3 = document.querySelector("h3")
function changeColor(){
    console.dir(this.innerText)
    this.style.backgroundColor = "blue"
}
btn.addEventListener("click",changeColor)
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
