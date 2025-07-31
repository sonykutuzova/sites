let min = 1;
let max = 9;
let correct = 0;
let mistake = 0;
let number1;
let number2;
document.querySelector(".select").onchange= function(){
    let value = document.querySelector(".select").value
    switch(value){
        case "easy":{
            min = 1;
            max = 9;
            break;
        }
        case "medium":{
            min = 10;
            max = 99;
            break;
        }
        case "hard":{
            min = 100;
            max = 999;
            break;
        }
    }
}

document.querySelector(".plus").onclick = function(){
    number1 = getRandomInt(min, max);
    number2 = getRandomInt(min, max);
    let userAnswer = prompt(number1+'+'+number2+'=')
    if (userAnswer==number1+number2){
        alert("Ты прав")
        correct++
    }else{
        alert("Ответ неправильный, правильный ответ:"+parseInt(number1+number2))
        mistake++
    }
}
document.querySelector(".minus").onclick = function(){
    number1 = getRandomInt(min, max);
    number2 = getRandomInt(min, max);
    let userAnswer = prompt(number1+'-'+number2+'=')
    if (userAnswer==number1-number2){
        alert("Ты прав")
        correct++
    }else{
        alert("Ответ неправильный, правильный ответ:"+parseInt(number1-number2))
        mistake++
    }
}

document.querySelector(".multiply").onclick = function(){
    number1 = getRandomInt(min, max);
    number2 = getRandomInt(min, max);
    let userAnswer = prompt(number1+'*'+number2+'=')
    if (userAnswer==number1*number2){
        alert("Ты прав")
        correct++
    }else{
        alert("Ответ неправильный, правильный ответ:"+parseInt(number1*number2))
        mistake++
    }
}

document.querySelector(".divide").onclick = function(){
    number1 = getRandomInt(min, max);
    number2 = getRandomInt(min, max);
    let userAnswer = prompt("(Округлите до целого числа)"+number1+'/'+number2+'=')
    if (userAnswer==Math.round(number1/number2)){
        alert("Ты прав")
        correct++
    }else{
        alert("Ответ неправильный, правильный ответ:"+Math.round(parseInt(number1/number2)))
        mistake++
    }
}
document.querySelector(".check").onclick = function(){
    alert("Правильных ответов:"+correct+"\n"+"Неправильных ответов:"+mistake)
}
document.querySelector(".reset").onclick = function(){
    correct = 0
    mistake= 0
}

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min
}