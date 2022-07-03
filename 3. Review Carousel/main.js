// add html element with html selector
var imgs = document.querySelector('.images')
var names = document.querySelector('.names')
var jobs = document.querySelector('.jobs')
var textReviews = document.querySelector('.text-review')
var btns = document.querySelectorAll('button.btn')
console.log(btns)

var reviews = [
    {
        imgPerson : 'images/photo1.jpg',
        namePerson : 'Sarah',
        jobPerson : 'Digital Marketing',
        textReview : 'WordPress.com works really well with Google fora great SEO ranking. Ican also embed YouTube videos, Google Maps, and other content easily and without any coding ability.'
    },
    {
        imgPerson : 'images/photo2.jpg',
        namePerson : 'Rudi',
        jobPerson : 'Business',
        textReview : 'If you want to be the first who have a 5G smartphone, then yes, this Samsung Galaxy S20 Ultra is definitely yours. I still recommend you to buy this Samsung Galaxy S20 Ultra as it offers great features.'
    },
    {
        imgPerson : 'images/photo3.jpg',
        namePerson : 'Jammy',
        jobPerson : 'Manager',
        textReview : 'Van Gogh painting describes the deep feelings of the painter. I feel like I can enter the world of Van Gogh. I also made the painting “The Starry Night” as my desktop wallpaper and seeing it made me happy.'
    },
    {
        imgPerson : 'images/photo4.jpg',
        namePerson : 'Lorenz',
        jobPerson : 'Photograph',
        textReview : 'Bali is beautiful place, but it\'s not just a beautiful place it\'s frendly people place. You must go visit into bali.'
    }
]

// to default index
var currentIndex = 0

// to default display content
window.addEventListener('DOMContentLoaded',function(){
    var person = reviews[currentIndex]
    imgs.src = person.imgPerson
    names.textContent = person.namePerson
    jobs.textContent = person.jobPerson
    textReviews.textContent = person.textReview
})

function showPerson(){
    var person = reviews[currentIndex]
    imgs.src = person.imgPerson
    names.textContent = person.namePerson
    jobs.textContent = person.jobPerson
    textReviews.textContent = person.textReview
}


btns.forEach(function(btn){
    btn.addEventListener('click',function(even){
        var target = even.currentTarget.classList
        console.log(target)

        if(target.contains('btn-before')){
            currentIndex--
        }else if(target.contains('btn-after')){
            currentIndex++
        }else{
            currentIndex = Math.floor(Math.random()*reviews.length)
        }

        if(currentIndex>=reviews.length){
            currentIndex = 0
        }else if(currentIndex<0){
            currentIndex = reviews.length-1
        }

        showPerson()
    })
})

