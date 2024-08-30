let para1 = document.createElement('p')
para1.append("Hi, I am red!")
document.querySelector('body').appendChild(para1)
para1.classList.add("red")
let h3 = document.createElement('h3')
h3.innerText = "I am blue h3"
document.querySelector('body').appendChild(h3)
h3.classList.add("blue")

let div = document.createElement('div')
document.querySelector('body').appendChild(div)
div.classList.add('border_backgroun')
let h1 = document.createElement('h1')
h1.innerText = "Hi, I am in div"
let para = document.createElement('para')
para.innerText = "Me too"
div.append(h1)
div.append(para)