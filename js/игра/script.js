let isFlipped = false
let firstCard, secondCard
let lockBoard = false

function resetBoard(){
    firstCard = null
    secondCard = null
    isFlipped = false
    lockBoard = false
}
function disableCards(){
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetBoard()
}
function unFlipCards(){
    lockBoard = true
    setTimeout(()=>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetBoard()
    }, 1000)
}

let cards = document.querySelectorAll(".card")
function flipCard(){
    let item = event.target.parentElement
    if (lockBoard) return lockBoard
    if (event.target.parentElement == firstCard) return firstCard

    item.classList.add("flip")
    if (!isFlipped){
        isFlipped = true
        firstCard = event.target.parentElement
        return
    }
    secondCard = event.target.parentElement
    firstCard.dataset.icon==secondCard.dataset.icon?disableCards():unFlipCards()
    
}
cards.forEach(card => card.addEventListener("click", flipCard))

