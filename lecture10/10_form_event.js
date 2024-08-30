form = document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(this)
   // user = document.querySelector("#user")
   // pass = document.querySelector("#pass")
    user = form.elements[0]
    pass = form.elements[1]
    if(user.value == "shorna" && pass.value =="2001" ){
        alert("correct password")
    }
    else{
        alert("wrong password")
    }
})
