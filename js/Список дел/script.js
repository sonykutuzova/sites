let input = document.querySelector('.add')
let ul = document.querySelector(".tasks")

input.onkeypress = function(event){
    if (event.keyCode==13){
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.innerHTML = input.value

        let img = document.createElement("img")
        img.setAttribute("src", 'garbage.svg')
        img.classList.add("img")

        li.classList.add("task")
        li.appendChild(img)
        li.appendChild(span)
        ul.appendChild(li)
        input.value = ''
    }
}
document.querySelector(".tasks").onclick = function(){
    let target = event.target
    if (target.tagName == 'SPAN'){
        target.classList.toggle('span')
    }
    if (target.tagName == 'IMG'){
        target.parentElement.remove()
    }
}
document.querySelector('.finish').onclick = function(){
    let tasks = document.querySelectorAll(".task")
    tasks.forEach(element => {
        element.classList.add('span') 
    });
}
document.querySelector('.clear').onclick = function(){
    ul.innerHTML = ''
}