h1 = document.querySelector("h1")
function changeColor(color){
    h1.style.color = color
}
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        random_num = Math.floor(Math.random()*10)+1
        if(random_num<4){
            reject("color change rejected")
        }
        setTimeout(()=>{
            h1.style.color = color
            resolve("color changed")
        },delay)
    })
    
    
}
async function demo(){
    try{
    await changeColor("red",1000)
    await changeColor("green",1000)
    await changeColor("blue",1000)
    await changeColor("yellow",1000)
    await changeColor("orange",1000)
    }
    catch(err){
        console.log(err)
    }
    let num = 5;
    console.log(3+num)
    console.log("the square of number is",num*num)
 }
 demo();
 
 