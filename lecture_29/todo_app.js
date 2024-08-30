inp = document.querySelector("input")
btn = document.querySelector("#button1")
ul = document.querySelector("ul")
btn.addEventListener("click",function(){
 let li = document.createElement("li")
 li.innerText = inp.value
 let del_btn = document.createElement("button") 
 del_btn.innerText = "X"
 del_btn.classList.add("delete") 
 li.appendChild(del_btn) 
 ul.appendChild(li)
 inp.value=""
})
/*let del_btns = document.querySelectorAll(".delete")
for(btn of del_btns){
    btn.addEventListener("click",function(){
        let par = this.parentElement;
        par.remove()

    })
}*/
// Event Delegation
//using eventbubbling to solve this problem
//if an addeventListener set to parent it will automatically applied to it's childrens
//here is the modified code to solve the problem
ul.addEventListener("click",function(event){
    //console.dir(event.target)
    //event.target.Nodename ---to identify which node was clicked
    if(event.target.nodeName == "BUTTON"){
        listnode = event.target.parentElement;
        listnode.remove();
    }
})

