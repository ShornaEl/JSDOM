h1 = document.querySelector("h1")
function changeColor(color){
    h1.style.color = color
}

/*setTimeout(() => {
    h1.style.color = "green";
}, 1000);
setTimeout(() => {
    h1.style.color = "Orange";
}, 2000);
setTimeout(() => {
    h1.style.color = "Blue";
}, 3000);*/
//setTimeout(changeColor("green"),1000)
//setTimeout(changeColor("yellow"),2000)
//setTimeout(changeColor("orange"),3000)
//only one time cahngeColor method execute
/*function changeColor(color,delay){
    setTimeout(() => {
        h1.style.color = color
    }, delay);
}
changeColor("green",1000)
changeColor("orange",2000)
changeColor("blue",3000)
changeColor("yellow",4000)*/
/*function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color = color
        if(nextColor){
            nextColor();
        }
    },delay)
    
}
changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("blue",1000,()=>{

            })

        })
    })
})*/
//refactoring the code using promise chaining(then() , catch())
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color
            resolve("color changed")
        },delay)
    })
    
    
}
/*
let promise = changeColor("red",1000)
promise.then((result)=>{//whenever promise resolve executed it reutrn to then 
      console.log(result,"to red")
      return changeColor("green",1000)
}).then((result)=>{
    console.log(result,"to green")
    return changeColor("orange",1000)
}).then((result)=>{
    console.log(result,"to orange")
    return changeColor("yellow",1000)
}).then((result)=>{
    console.log(result,"to yellow")
})
.catch((error)=>console.log("promise was not fullfilled"))
console.log(promise)*/
//refactoring code using async and await 
async function demo(){
   await changeColor("red",1000)
   await changeColor("green",1000)
   await changeColor("blue",1000)
   await changeColor("yellow",1000)
         changeColor("orange",1000)
}

