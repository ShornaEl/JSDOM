inp = document.querySelector("input")
inp.addEventListener("keyup",function(event){ 
    console.log("key was realesed")
    console.dir(event)
    console.dir(event.key)//key which button was pressed
    console.dir(event.code)

})
/*inp.addEventListener("keydown",function(event){
    if(event.key == "ArrowUp"){
        console.log("move the character forward")
    }
    else if(event.key == "ArrowDown"){
        console.log("move the character backward")
    }
    else if(event.key == "ArrowRight"){
        console.log("move the character right")
    }
    else if(event.key == "ArroLeft"){
        console.log("move the character left") 
    }
})*/