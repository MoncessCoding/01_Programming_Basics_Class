console.log("Running")

let blueShoes = document.querySelector('.blue-shoes')
console.log(blueShoes)
console.log(blueShoes.src)

//List of images' path 
//                   0                       1                    2
let images = ['images/blue-shoes.jpg', 'images/nikes.jpg', 'images/shoes.jpg']


let idx = 1 // initial index for image



setInterval(function(){

    if(images.length == idx){
        idx = 0
    }

    blueShoes.src = images[idx] //0 1 2
    idx++ // 1 2 3

}, 3000)
