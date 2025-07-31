let isTimeOn = false
let interval 
let clock =document.querySelector('.time')
function timer(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    if (hours<10){
        hours.toString()
        hours = '0'+hours
    }
    if (minutes<10){
        minutes.toString()
        minutes = '0'+minutes
    }
    if (seconds<10){
        seconds.toString()
        seconds = '0'+seconds
    }
    clock.innerHTML = hours+":"+minutes+":"+seconds
    document.body.style.background = '#'+hours+minutes+seconds
    document.body.style.color = '#'+minutes+'FFFF'
}

function disableTimer(){
    clearInterval(interval)
    clock.innerHTML = "00:00:00"
    document.body.style.background = '#FFFFFF'
    document.body.style.color = '#000000'

}
function enableTimer(){
    interval = setInterval(timer, 1000)
}
document.querySelector('.button').onclick = function(){
    isTimeOn = !isTimeOn
    timer()
    if (isTimeOn){
        disableTimer()

    }else{
        enableTimer()

    }

}

let a = [1, 2, 3, 4, 5]
a.forEach(element => {
    console.log(element)
    
});
let b= a.map(x=>{
    return x*x
})
console.log(b)

let s = '1 2 3 4 5'
let arr = s.split(" ")
console.log(arr)