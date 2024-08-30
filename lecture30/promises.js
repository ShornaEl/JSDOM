/*function saveToDB(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1
    if(internetSpeed>4){
     success();
    }
    else{
     failure();
    }
}
saveToDB("apna College",()=>{
    console.log("data1 saved successfully ")
    saveToDB("hello world",()=>{
        console.log("data2 saved successfully")
        saveToDB("hi punam",()=>{
            console.log("data2 saved successfully")
        },()=>console.log("weak connection data do not saved"))
    },()=>console.log("weak connection data do not saved"))

,()=>console.log("weak connection data do not saved"));*/
function saveToDB(data){
    return new Promise((resolve,reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1
    if(internetSpeed > 4){
     resolve("data was saved")
    }
    else{
     reject("weak connection");
    
    }
});

}
//saveToDB("shorna")
//reslove the rejected promise error
/*let request = saveToDB("shorna")
request.then(()=>{
    console.log("promised fullfilled")
})
.catch(()=>{
    console.log("promised was not fullfilled")
})*/
/*saveToDB("shorna").then(()=>{
    console.log(" data1 saved. promised fullfilled")
    saveToDB("takia").then(()=>{
        console.log(" data 2 saved. promised fullfilled")
        
    })
})
.catch(()=>{
    console.log("promised was not fullfilled")
})*/
//promise chaining imoroved version
/*saveToDB("shorna")
.then(()=>{
    console.log(" data1 saved")
     return saveToDB("takia")
}).then(()=>{
  console.log("data 2 saved")
  return saveToDB("tahsina")
}).then(()=>{
    console.log("data 3 saved") 
})
.catch(()=>{
    console.log("promised was not fullfilled")
})*/
//if Promise are resolve of rejected with some data it will return (result or error)
saveToDB("shorna")
.then((result)=>{  //result = data of resolve funtion
    console.log(" data1 saved")
    console.log("data 1 promised result:",result)
     return saveToDB("takia")
}).then((result)=>{
  console.log("data 2 saved")
  console.log("data 2 promised result:",result)
  return saveToDB("tahsina")
}).then((result)=>{
    console.log("data 3 saved") 
    console.log("data 3 promised result:",result)
})
.catch((error)=>{//error = data of reject function
    console.log("promised was not fullfilled")
    console.log("promised return error:",error)
})