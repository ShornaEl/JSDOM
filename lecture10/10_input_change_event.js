form = document.querySelector("form")
form.addEventListener("submit",function(event){event.preventDefault()})
inp = document.querySelector("#user")
inp.addEventListener("change",()=>console.log("chage event occur"))
inp.addEventListener("input",function(){
    p = document.querySelector("p")
    p.innerText = this.value
})