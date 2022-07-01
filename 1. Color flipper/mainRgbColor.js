var clickMe = document.getElementById('click-me') // get button
var hexaTextHtml = document.querySelector('p') // get text
var container = document.getElementById('container') // get container

function generateRgbColor(){
    var a = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var c = Math.floor(Math.random()*255)

    var rgbCode = `rgb(${a},${b},${c})`
    
    hexaTextHtml.textContent = rgbCode
    clickMe.style.backgroundColor = rgbCode
    container.style.backgroundColor = rgbCode
    
}


clickMe.addEventListener('click',function(){
    generateRgbColor()
})