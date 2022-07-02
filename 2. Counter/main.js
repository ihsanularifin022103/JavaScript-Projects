// get button
var btns = document.querySelectorAll('.btn')
// console.log(btns)

// text p
var text = document.querySelector('p')

// count
var count = 0

btns.forEach(function(btn){
    // console.log(btn)
    btn.addEventListener('click',function(event){
        // console.log(event)
        var click = event.currentTarget.classList
        console.log(click)
        if(click.contains('btn-decrease')){
            count--
        }else if(click.contains('btn-increase')){
            count++
        }else{
            count = 0
        }

        if(count<0){
            text.style.color = 'red'
        }else if(count>0){
            text.style.color = 'green'
        }else{
            text.style.color = 'black'
        }

        text.textContent = count
    })
})

