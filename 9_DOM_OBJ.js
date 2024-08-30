//getEelemetById
let spider_img = document.getElementById("mainImg")
console.dir(spider_img)
spider_img.src = "assets/creation_1.png"
console.dir(spider_img)
// getEelementByClassName
let old_img = document.getElementsByClassName("oldImg")
for(let i=0;i<old_img.length;i++){
    console.dir(old_img[i])
    old_img[i].src = "assets/spiderman_img.png"
}