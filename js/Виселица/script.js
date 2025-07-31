let att = 3
let word = 'алгоритм'
let b = []
document.querySelector('.start').onclick = function(){
    document.querySelector('.letter').disabled = false
    document.querySelector('.check').disabled = false
    let out = ''
    b= []
    for(let i = 0; i<word.length; i++){
        out+='*';
    }
    document.querySelector('.word').value = out;
    document.querySelector('.start').innerHTML = "Новая игра";
    document.querySelector('.letter').value = '';
    document.querySelector('.letter').focus();
    att = 3;
    document.querySelector('.attempts').innerHTML = att;
}

document.querySelector('.check').onclick = function(){
    let letter = document.querySelector('.letter').value;
    let out = ''

    let lb = b.length
    for(let i = 0; i< word.length; i++){
        if (word[i]==letter){
            if (b.indexOf(i)==-1){
                b.push(i);
            }
            else{
                alert('Эта буква уже найдена')
                att++;
            }
        }
        if(b.indexOf(i)!=-1){
            out+=word[i];
            f = true;
        }
        else{
            out+='*';
        }  
    }
    document.querySelector('.word').value = out;
    if (b.length==lb){
        att--;
    }
    if (b.length==word.length){
        document.querySelector('.letter').value = 'Вы выиграли';
        document.querySelector('.letter').disabled = true
        document.querySelector('.check').disabled = true
    }
    else if (att==0){
        document.querySelector('.letter').value = 'Игра закончена';
        document.querySelector('.letter').disabled = true
        document.querySelector('.check').disabled = true
    }
    document.querySelector('.attempts').innerHTML = att;
}

let age = 32;

//alert(!(age>=14 && age<=90)?1:0)
//alert((age<14 || age>90)?1:0)

let a = prompt('Введите логин', '')
if (a===null || a==='' || a.toLowerCase()=="отмена" ){
    alert("Отменено")
}

else if (a.toLowerCase()=="админ"){
    let p = prompt('Введите пароль', '')
    if (p.toLowerCase()=="отмена"){
        alert("Отменено")
    }else if (p.toLowerCase()=="я главный"){
        alert("Здравствуйте")
    }else{
        alert("Неверный пароль")
    }
}else{
    alert("Я вас не знаю")
}

