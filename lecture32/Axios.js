// Library to make HTTP request
//why we use axios instead of fetch?
//because axios directly return the response with data so wee do not need to use res.json()
//use CDN link to use axios
//get facts about cat  
/*url = "https:catfact.ninja/fact"
async function getFact(){
    try {
        let res =  await axios.get(url)
         return res.data.fact;
    } catch (error) {
      return "No fact recieved" ;
    }
}
btn = document.querySelector("button")
btn.addEventListener("click",async()=>{
   let fact = await  getFact()
   para = document.querySelector("p")
   para.innerText = fact
})*/
//get jokes
//send header with api request----------
/*url = "https://icanhazdadjoke.com/"
async function getJokes(){
  try {
    const config = {headers : {Accept : "application/json"}}
    let jokes = await axios.get(url,config)
    console.log(jokes.data.joke)
    
  } catch (error) {
    console.log("Error - ",error)
    //return "NO jokes found"
  }
}*/
//updating query string-------------------------
url = "http://universities.hipolabs.com/search?name="
btn = document.querySelector("#search_university")
btn.addEventListener("click",async ()=>{
let inp = document.querySelector("input")
let country = inp.value
  let dataArray = await getUniversity(country)
  show_data(dataArray,inp)
})
function show_data(dataArray,inp){
  list = document.querySelector("ul")
  list.innerText = ""
 for(data of dataArray){
  console.log(data.state-province)
  let li = document.createElement("li")
  li.innerText = data.name
  list.appendChild(li)
  }
 }

async function getUniversity(country){
 try {
  let res = await axios.get(url+country)
    console.log(res.data)
    return res.data
  
 } catch (error) {
  console.log("Error", error)
  return "data not found"
 }
}