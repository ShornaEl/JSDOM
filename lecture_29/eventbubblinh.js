div = document.querySelector("div")
ul = document.querySelector("ul")
li = document.querySelector("li")
div.addEventListener("click",function(event){
    event.stopPropagation()
    console.log("div was clicked")
})
ul.addEventListener("click",function(event){
    event.stopPropagation()
    console.log("ul was clicked")
})
li.addEventListener("click",function(event){
    event.stopPropagation()
    console.log("li was clickeds")
})