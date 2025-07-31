
function task1(){
    let a = 3
    
    let b = "3"
    
    let aType = "Число"
    let bType = "Строка"

   
    let task1Btn = document.querySelector('.task1__btn')
    
    task1Btn.onclick = function(){
        
        console.log(a + ":" + aType + ", " + b + ":" + bType)
    }
}
task1()

function task2(){    

    let task2Btn = document.querySelector('.task2__btn')
    task2Btn.onclick = function(){
        let input = document.querySelector('.task2__input')
        let value = input.value
        
        if (value.length > 0){
            alert(value)
        }else{
            alert("инпут пустой")
        }
    }
}
task2()

function task3(){    
    let checkbox = document.querySelector('.task3__chbx')
    checkbox.onclick = function(){
        let button = document.querySelector('.task3__btn')
        if (checkbox.checked === true){
             // Тут возможно ошибка
            button.disabled = true
            // Тут возможно ошибка
            button.innerHTML = "Нажать нельзя"
        }else{
             // Тут возможно ошибка
            button.disabled = false
            // Тут возможно ошибка
            button.innerHTML = "Нажми на меня"
        }
    }

}
task3()

function task4(){
        let button = document.querySelector('.task4__btn')
        button.onclick = function(){
            
            let num1 = Math.floor(Math.random()*100)
            let num2 = Math.floor(Math.random()*100)
            let num3 = Math.floor(Math.random()*100)
            let num4 = Math.floor(Math.random()*100)

            
            let password = ""+ num1 + num2 +num3 + num4 +""

            let input = document.querySelector('.task4__input')
            
            input.focus()

            input.value = password
        }
    }
task4()

function task5(){
    let button = document.querySelector('.task5__btn')
    button.onclick = function(){
        let input = document.querySelector('.task5__input')
        let result = document.querySelector('.task5__result')
        let value = input.value

        
        result.innerHTML = parseInt(value, 2)
    }
}
task5()

function task6(){
    
    let arr = [1,2,3,4,5,6,7,8,9]
    
    let length = arr.length

    let reversed = document.querySelector('.task6__reverseArr')
    let arrLength = document.querySelector('.task6__length')

    for(let i = arr.length; i>0; i--){
        reversed.innerHTML = reversed.innerHTML + i
    }
    arrLength.innerHTML = length
}
task6()


function task7(){
   let arr = [1,2,3,5,7,12,101,22,38,14,20,10,3,1,6]
   let input = document.querySelector('.task7__input')
   let button = document.querySelector('.task7__btn')

   button.onclick = function(){
        let value = parseInt(input.value)
        switch(arr.indexOf(value)){
            
            case -1:
                alert('Данного числа нет в массиве')
            break;
            
            default:
                alert('Данное число в массиве присутствует')
            break;
        }
   }

}
task7()


function task8(){
    let squres = document.querySelectorAll('.task8__item')
    let button = document.querySelector('.task8__btn')
    button.onclick = function(){
         let color = prompt("Введите название цвета: красный, синий, зеленый")
      
         switch(color){
             case "красный":
                  
                squres.forEach(function(e){
                    
                    e.style.background = 'red'
                })
             break;
             case "синий":
                  
                squres.forEach(function(e){
                    
                    e.style.background = "blue"
                })
            break;
            case "зеленый":
               
                squres.forEach(function(e){
                
                    e.style.background = "green"
                })
            break;
             default:
                console.log('такого цвета нету')
             break;
         }
    }
 
 }
 task8()
 

//  function task9(){
//     let items = document.querySelectorAll('.task9__item')
//     items.forEach(function(element){
//          // Тут возможно ошибка
//         element.onmouseinside = function(){
//             element.style.border = "1px solid red"
//         }
//          // Тут возможно ошибка
//         element.onmouseoutside = function(){
//             element.style.border = "1px solid black"
//         }
//     })
//     items.forEach(function(element){
//          // Тут возможно ошибка
//         element.addEventListener(function(event){
//              // Тут возможно ошибка
//             console.log(event)

//             let item = element.querySelector('.task9__text')
//              // Тут возможно ошибка
//             if(item.class.contains('show-text')){
//                  // Тут возможно ошибка
//                 item.class.remove('show-text')
//             }else{
//                  // Тут возможно ошибка
//                 item.class.add('show-text')
//             }
//         })
//     })
//   }
// task9()



// function task10(){
//     let input1 = document.querySelector('.task10__input1')
//     let input2 = document.querySelector('.task10__input2')
//     let input1label = document.querySelector('.task10__label1')
//     let input2label = document.querySelector('.task10__label2')
//      // Тут возможно ошибка
//     input1label.addEventListener('click', ()>{
//         let input1val = input1.value
//          // Тут возможно ошибка
//         let stringLetters = input1val.substringIndex(input1val.length-1, input1val.length)
//         console.log(stringLetters)
//     }
//      // Тут возможно ошибка
//     input2label.addEventListener('click', ()>{
//         let input2val = input2.value
//          // Тут возможно ошибка
//         console.log(input2val / 2)
//     })
//   }
// task10()


// function task11(){
//     let input = document.querySelector('.task11__input')
//     let button = document.querySelector('.task11__btn')
//     let list = document.querySelector('.task11__list')

//      // Тут возможно ошибка
//     button.addEventListener('click', ()>{
//         let value = input.value
//          // Тут возможно ошибка
//         let listItem = document.createHtml('li')
//         listItem.innerHTML = value
//          // Тут возможно ошибка
//         list.appendParent(listItem)
//         input.value = ''
//     })
//   }
// task11()



// function task12(){
//     let сlock = document.querySelector('.task12__clock')
//     let timer = document.querySelector('.task12__timer-body')
//     let timerStartBtn = document.querySelector('.task12__btn-start')
//     let timerStopBtn = document.querySelector('.task12__btn-stop')
//     let alertBtn = document.querySelector('.task12__btn-alert')

   

//     alertBtn.addEventListener('click', ()=>{
//         // Тут возможно ошибка
//         let timeout = (()=>{
//             alert('прошло 5 секунд с момента нажатия на кнопку')
//         }, 5000)
//     })

//     // Тут возможно ошибка
//     setTimerRepeat(()=>{
//         // Тут возможно ошибка
//         сlock.innerHTML = date.toLocaleTimeString()
//     }, 1000)
    
//     let interval
//     let counter = 0

//     timerStartBtn.addEventListener('click', ()=>{
//         timer.innerHTML = counter
//         interval = setInterval(()=>{
//             counter = counter + 1
//             timer.innerHTML = counter
//         }, 1000)
//     })
//     timerStopBtn.addEventListener('click', ()=>{
//          // Тут ошибка нету удаления интервала
//         timer.innerHTML = ''
//         counter = 0
//     })
// }
// task12()


// function task13(){
//     let inputName = document.querySelector('.task13__name')
//     let inputMail = document.querySelector('.task13__mail')
//     let inputPassword = document.querySelector('.task13__pass')

//     let createUserBtn = document.querySelector('.task13__btn')

//     let User = function(name, mail, password){
//          // Тут возможно 3 ошибки в каждой строке
//         is.name = name
//         is.mail = mail
//         is.password = password
//     }
//     createUserBtn.addEventListener('click', ()=>{
//          // Тут возможно ошибка
//         let newUser = create user(inputName.value, inputMail.value, inputPassword.value)
//         console.log(newUser)

//         document.querySelectorAll('.task13 input').forEach((e)=>{e.value = ""})
//     })
// }
// task13()

