function hello(){
    console.log("inside hello function")
    console.log("hello")
    console.log("calling print function")
    print()
    console.log("print funtion executed inside hello funtion")
}
function print(){
    console.log("inside print function")
    console.log("returning from print function")
}
function demo(){
    console.log("calling hello funtion")
    hello();
    console.log("hello executed inside demu funtion")
}
console.log("calling demo function")
demo()
console.log("demo function executed inside main funtion")
