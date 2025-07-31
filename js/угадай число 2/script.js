let secretNumber = getRandomInt(1, 10);
let attempts = 3;
function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min
}
document.querySelector('.container').onclick = function(){
    let a = event.target.classList.contains('number');
    if (a){
        attempts--
        document.querySelector("span").innerHTML =attempts
        if (attempts<=0){
            document.querySelectorAll('.number').forEach(el => el.style.display = 'none');
        }
        let userNumberClasses = event.target.classList
        let userNumber = 0;
        if (userNumberClasses.contains('1')){
            userNumber = 1
        }
        if (userNumberClasses.contains('2')){
            userNumber = 2
        }
        if (userNumberClasses.contains('3')){
            userNumber = 3
        }
        if (userNumberClasses.contains('4')){
            userNumber = 4
        }
        if (userNumberClasses.contains('5')){
            userNumber = 5
        }
        if (userNumberClasses.contains('6')){
            userNumber = 6
        }
        if (userNumberClasses.contains('7')){
            userNumber = 7
        }
        if (userNumberClasses.contains('8')){
            userNumber = 8
        }
        if (userNumberClasses.contains('9')){
            userNumber = 9
        }
        if (userNumberClasses.contains('10')){
            userNumber = 10
        }
        if (userNumber>secretNumber){
            document.querySelector('.result').innerHTML='Секретное число меньше'
        }else if (userNumber<secretNumber){
            document.querySelector('.result').innerHTML='Секретное число больше'
        }
        else{
            document.querySelector('.result').innerHTML='О! Угадал! Ещё?'
            document.querySelectorAll('.number').forEach(el => el.style.display = 'none');
        }
    }
}
document.querySelector(".new").onclick=function(){
    secretNumber = getRandomInt(1, 10);
    attempts = 3;
    document.querySelector("span").innerHTML =attempts
    document.querySelectorAll('.number').forEach(el => el.style.display = 'inline');
    document.querySelector('.result').innerHTML='Здесь будут подсказки'

}