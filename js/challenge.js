
function timer() {
    const increment = window.setInterval(function() {
        if (stop == 0){
        let number = parseInt(counter.textContent)
        counter.textContent = number + 1
        } else {
            clearInterval(increment)
        }
    }, 1000);
}

timer()

const counter = document.querySelector("#counter")
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const heartButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")
let likes = 0
let stop = 0



const minus = minusButton.addEventListener("click", function(){
    if (stop == 0) {
        let number = parseInt(counter.textContent)
        counter.textContent = number - 1
    } else {
        clearInterval(minus)
    }
})

const plus = plusButton.addEventListener("click", function(){
    if (stop == 0){
        let number = parseInt(counter.textContent)
        counter.textContent = number + 1
    } else {
        clearInterval(plus)
    }
})

const heart = heartButton.addEventListener("click", function(){
    if (stop == 0){
        likes ++
        const ul = document.querySelector("ul.likes")
        let number= counter.textContent
        const li = document.createElement("li")
        li.textContent = number + ` has ${likes}` + " Likes"
        ul.append(li)
    } else {
        clearInterval(heart)
    }
})

pauseButton.addEventListener("click", function(){
    if (stop == 0){
        stop = 1
        pauseButton.textContent = "resume"
    } else {
        stop = 0
        pauseButton.textContent = "pause"
        timer()
    }
})


const form = document.querySelector("#comment-form")
const commentSection = document.querySelector("#list")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const entry = event.target.comment.value
    const pTag = document.createElement("p") 
    pTag.textContent = entry
    commentSection.append(pTag)
    event.target.reset()
})