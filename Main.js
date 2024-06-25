const slider = document.querySelector("#slider")
const nextbtn = document.querySelector('#nextBtn')
const prevtbtn = document.querySelector('#prevBtn')
const h1 = document.querySelector('#h1')

const images = [
    "https://img.freepik.com/premium-photo/modern-stylish-muslim-woman-hijab-leather-jacket-black-abaya-walking-city-street_285396-9498.jpg?w=360"
    ,
    "https://img.freepik.com/premium-photo/stylish-portrait-young-european-woman-with-sexy-beautiful-lips-trendy-sunglasses-coat-with-elegant-silk-scarf-head-city-modern-business-girl-fashion-model-retro-fashion-beauty-lady_338491-9399.jpg?w=900"
    ,
    "https://img.freepik.com/free-photo/fashion-model-long-dress-with-floral-patterns-black-head-cover_114579-8574.jpg?t=st=1719294075~exp=1719297675~hmac=a418c815e9ce9bc274e00d501a58549f407076d8758c909b1852650655c85cbe&w=360",
    " https://img.freepik.com/free-photo/women-shopping-ramadan-front-view_23-2150154481.jpg?t=st=1719295195~exp=1719298795~hmac=f7231b1139b4fb09e05a1b14bca433305781175bfeeea3761d7b05951ac794d9&w=360",
]
let currentImges = 0

nextbtn.addEventListener("click",function(){
    if(currentImges<=images.length -1){
    slider.src=images[currentImges]
    h1.innerHTML=currentImges
    currentImges++
    if(currentImges==images.length){
        h1.innerHTML="End"
    }

}
})


prevtbtn.addEventListener("click",function(){
    if(currentImges >0){
        currentImges--
    h1.innerHTML=currentImges
    if(currentImges==0){
        h1.innerHTML="End"
    }

    slider.src=images[currentImges] 
   }
    
})


