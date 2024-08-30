let h3 = document.querySelector('h3')
let button = document.querySelector('button')
let div = document.querySelector('div')
button.addEventListener('click',function(){
    h3.innerText = randomColor();

    div.style.backgroundColor = randomColor();
})

function randomColor(){
    let red = Math.floor((Math.random()*255)+1)
    let green = Math.floor((Math.random()*255)+1)
    let blue = Math.floor((Math.random()*255)+1)
    let color = `rgb(${red},${green},${blue})`
    return color;
}