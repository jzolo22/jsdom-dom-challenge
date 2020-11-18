
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
    let number = parseInt(counter.textContent)
    if (stop == 0) {
        counter.textContent = number - 1
    } else {
        clearInterval(minus)
    }
})

const plus = plusButton.addEventListener("click", function(){
    let number = parseInt(counter.textContent)
    if (stop == 0){
        counter.textContent = number + 1
    } else {
        clearInterval(plus)
    }
})

const heart = heartButton.addEventListener("click", function(){
    if (stop == 0){
        const ul = document.querySelector("ul.likes")
        let number = counter.textContent
        
        if (ul.querySelector("li") != undefined){
            const list = ul.querySelectorAll("li")
            list.forEach(function(li){
                if (li.textContent.split(" ")[0] == number){
                    li.textContent = number + `${li.textContent.split(" ")[2]+1}` + "Likes"
                } else {
                    const newLi = document.createElement("li")
                    newLi.textContent = number + "has 1 Likes"
                    ul.append(newLi)
                }
            })
        } else {
            const newLi = document.createElement("li")
                    newLi.textContent = number + "has 1 Likes"
                    ul.append(newLi)
        }
    } else {
        clearInterval(heart)
    }
})

// if a li in the ul exists with the current number 
// then: check the likes amount on that li and increment by 1 
// if it doesn't exist 
// then: create an li in the ul with likes starting at 1

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



// document.addEventListener("click", function(event){
//     if (event.target.matches("button") && stop == 0){
//         let number = parseInt(counter.textContent)
//         if (event.target.matches("#minus")){
//             counter.textContent = number - 1
//         } else if (event.target.matches("#plus")){
//             counter.textContent = number + 1
//         } else {
//             clearInterval
//         }
//     }
// })