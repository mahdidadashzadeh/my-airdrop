let coinContainer = document.querySelector(".coin")
message = document.querySelector(".message")
let scoreTag = document.querySelector(".score")
let score = 0
coinContainer.addEventListener("click",function (){
    score += 1
    scoreTag.innerHTML = score
    if (score == 2){
        coinContainer.style.display = "none"
        message.style.display = "block"
        

    }
})

