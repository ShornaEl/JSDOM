/*url = "https:catfact.ninja/fact"
//fetch(url) return a promis
fetch(url).then((res)=>{console.log("res : ", res)
    return res.json()// return an object reable stream of json data
}
).then((data)=>{console.log("data = ",data.fact)
   return fetch(url)
}).then((res)=>{console.log("res : ", res)
return res.json()// return an object reable stream of json data
}
).then((data1)=>{console.log("data1 = ",data1.fact)
})
.catch((error)=>console.log("error: ",error)) 
//when some headers from api recieved the promised will be resolved 
// though the whole message donot received yet
console.log("i am happy")*/
//API call using aync and await
url = "https:catfact.ninja/fact"
async function getData(){
  try {
  let res =  await fetch(url)
  let data = await res.json()
  console.log(data.fact)
  let res1 =  await fetch(url)
  let data1 = await res1.json()
  console.log(data1.fact)
  let res2 =  await fetch(url)
  let data2 = await res2.json()
  console.log(data2.fact)   
  } catch (error) {
    console.log("Error : ", error)
  }
  
console.log("hello i am here")
}