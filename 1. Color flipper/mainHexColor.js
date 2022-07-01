var clickMe = document.getElementById('click-me') // get button
var hexaTextHtml = document.querySelector('p')
var container = document.getElementById('container')

var hexaNumber = '0123456789ABCDEF'  // string hexa
var hexaNumberArr = hexaNumber.split('') // conver hexa string to array

function getHexaColor(){
    var hexaCode ='#'
    for(let i=0;i<6;i++){
        hexaCode += hexaNumberArr[getRandomNumber()]
    }

    hexaTextHtml.textContent = hexaCode
    container.style.backgroundColor = hexaCode
    clickMe.style.backgroundColor = hexaCode
}

function getRandomNumber(){
    return Math.floor(Math.random()*hexaNumberArr.length)
}

clickMe.addEventListener('click',function(){
    getHexaColor()
})
