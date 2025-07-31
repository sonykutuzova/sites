let secretNumber = getRandomInt(1, 10);
let attempts = 3;
document.querySelector(".check").onclick=function(){
    attempts--
    document.querySelector(".attempts").innerHTML =attempts
    if (attempts<=0){
        document.querySelector('.input').disabled = true
        document.querySelector('.check').disabled = true
    }
    let userNumber = +document.querySelector('.input').value
    if (userNumber>secretNumber){
        document.querySelector('.hint').innerHTML='Секретное число меньше'
    }
    else if (userNumber<secretNumber){
        document.querySelector('.hint').innerHTML='Секретное число больше'
    }
    else{
        document.querySelector('.hint').innerHTML='Вы угадали'
        document.querySelector('.input').disabled = true
        document.querySelector('.check').disabled = true
    }

        
}

document.querySelector(".start").onclick=function(){
    secretNumber = getRandomInt(1, 10);
    attempts = 3;
    document.querySelector(".attempts").innerHTML =attempts
    document.querySelector('.input').disabled = false
    document.querySelector('.check').disabled = false
    document.querySelector('.input').value=''
    document.querySelector('.hint').innerHTML='Здесь будут подсказки'

}

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min
}

let a = ['1', '2', '3']
console.log(a.join(', '))
let b = 'Mast Deck Engine Water Fire'
function f(s){
    return s.split(" ").map(elem => elem =="Fire"?"~~":elem).join(" ")
}
console.log(f(b))


let n = 1222223457777
function insertDash(num){
    let arr = num.toString().split("")
    for (let i = 1; i < arr.length; i++) { 
        if (Number(arr[i])%2!=0 && Number(arr[i-1])%2!=0){
            arr.splice(i, 0, "-")
            i++
        }
    }
    return arr.join("")
}
console.log(insertDash(n))
let v = [1, 2, 3]
v.splice(0, 2, 0)
console.log(v)

let ab = ["3:1","3:1","3:1", "2:2", "0:1"]
function win(arr){
    let points = 0
    for (let i = 0; i < arr.length; i++){
        if (Number(arr[i][0])>Number(arr[i][2])){
            points+=3
        }
        else if (Number(arr[i][0])==Number(arr[i][2])){
            points+=1
        }
    }return points
}
console.log(win(ab))


function win2(arr){
    return arr.reduce((sum, curr) => sum+=curr[0]>curr[2]?3:curr[0]==curr[2]?1:0, 0)
}
console.log(win2(ab))

let abv = [1, 2, 3, 4, '3','5', '8', 5]
function fu(arr){
    return arr.reduce((sum, curr)=>typeof(curr)=="number"?sum+=curr:sum-= +curr, 0)
}
console.log(fu(abv))


let abvg = ['64','51', '85']
function fnu(arr){
    return arr.reduce((sum, curr)=>sum+=+curr[0]-curr[1], 0)
}
console.log(fnu(abvg))


