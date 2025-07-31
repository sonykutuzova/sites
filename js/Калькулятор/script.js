document.querySelector(".buttons").onclick = function(){

    let target = event.target
    let input = document.querySelector(".input")
    let value = ""
    let operators = ['+', '-', '*', '/', '=']
    if (target.classList.contains('number')){

        value = target.innerHTML
        if (input.value=='0'){
            input.value = value
        }else{
            input.value += value
        }
    }else if(target.classList.contains('operation')){
        let expression = input.value
        let lastChar = expression[expression.length-1]
        value = target.innerHTML
        // if (lastChar==value){
            
        // }
        // else if (lastChar){
        //     input.value[expression.length-1] = value
        // }else if (lastChar.classList.contains("number")){
        //     input.value+=value
        // }
        if (operators.indexOf(lastChar) != -1){
            expression = expression.replace(/.$/, value)
            input.value = expression
        }else{
            input.value+=value
        }
    }
    else if(target.classList.contains("calculation")){
        let expression = input.value
        let result = eval(expression)
        input.value = result
    }
    else if(target.classList.contains("clear")){    
        input.value = ''
    }
    else if(target.classList.contains("clearone")){    
        let expression = input.value
        let result = expression.substring(0, expression.length-1) 
        input.value = result
    }
}






