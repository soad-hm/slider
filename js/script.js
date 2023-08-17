let $ = document
let sliderimg = $.querySelector('img')
let next = $.querySelector('.next')
let perivous = $.querySelector('.prev')
let imagearray=['image/1.jpg','image/2.png','image/3.jpg']
let index=0

function nextbtn(){
index++
if(index>imagearray.length-1){
 index= 0
}
sliderimg.setAttribute('src',imagearray[index])
console.log(index+1,imagearray[index])
}
function prevbtn(){
index--
if(index<0){
  index=imagearray.length-1
}
sliderimg.setAttribute('src',imagearray[index])
console.log(index+1,imagearray[index])

}
next.addEventListener('click',nextbtn)
perivous.addEventListener('click',prevbtn)
setInterval(prevbtn,2000)