//async or asynchronous function 
// syntax 
 async function greet(sec){
    //ab.abc();//rejected case
    //throw error by throw keyword
    if(sec > 5)
    throw "error promise was not executed"
    else
    return "hello" //by default always return a promise
}
// if ruturn satement executed promise will fullfilled and promise result will be the
//return element
//otherwise promise was rejected
let promise_obj = greet(6);
promise_obj.then((result)=>console.log("result: ",result))
.catch((error)=>console.log("error: ",error))
let demo = async ()=>{
   return "ayns hello"
}
///-------------------------------await------------------
// pauses the execution of its surrounding asyc funtion untill the promise was setteled
//(resolved or rejected)
// always use inside async funtion
// example
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            randomnumber = Math.floor(Math.random()*10)+1
            console.log(randomnumber)
            resolve("promise resolve") 
        }, 1000);
    })
    }

async function printNum(){
      await getNum();
      await getNum();
      getNum();
}