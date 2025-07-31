let char = 'X'
let turn = 1
let area = [
    ['*', '*', '*'],
    ['*', '*', '*'],
    ['*', '*', '*']
]
function changeChar(){
    if (turn%2==0){
        char = 'O'
    }
    else{
        char = 'X'
    }
    document.querySelector('span').innerHTML = char
}
function checkWinner(){
    if (area[0][0]==area[0][1] && area[0][0]==area[0][2]){
        return area[0][0]
    }
    if (area[1][0]==area[1][1] && area[1][0]==area[1][2]){
        return area[1][0]
    }
    if (area[2][0]==area[2][1] && area[2][0]==area[2][2]){
        return area[2][0]
    }
    if (area[0][0]==area[1][0] && area[0][0]==area[2][0]){
        return area[0][0]
    }
    if (area[0][1]==area[1][1] && area[0][1]==area[2][1]){
        return area[0][1]
    }
    if (area[0][2]==area[1][2] && area[0][2]==area[2][2]){
        return area[0][2]
    }
    if (area[0][0]==area[1][1] && area[1][1]==area[2][2]){
        return area[0][0]
    }
    if (area[0][2]==area[2][2] && area[2][0]==area[2][2]){
        return area[2][2]
    }
    return false
}
function newGame(){
    char = 'X'
    turn = 1
    let rows = document.querySelectorAll("tr")
    for (let i = 0; i < 3; i++){
        let cells = rows[i].querySelectorAll("td")
        for (let j = 0; j < 3; j++){
            area[i][j] = "*"
            cells[j].innerHTML = ''
            cells[j].style.backgroundColor = "white"
        }
    }

}
document.querySelector(".cell").onclick = function(){
    let col = document.querySelector(".column").value-1
    let row = document.querySelector(".row").value-1
    if (area[row][col]!='X' && area[row][col]!='O'){
        let rows = document.querySelectorAll("tr")
        let cells = rows[row].querySelectorAll("td")
        let cell = cells[col]
        area[row][col]= char
        cell.innerHTML = char  
        document.querySelector(".column").value = '' 
        document.querySelector(".row").value = '' 
        turn+=1
        cell.style.color = "white"
        if (char == 'X'){
            cell.style.backgroundColor = "gray"
        }else{
            cell.style.backgroundColor = "red"
        }
        if (checkWinner() == 'X'){
            alert("Победили Х")
            newGame()
        }
        else if (checkWinner() == 'O'){
            alert("Победили O")
            newGame()
        }
        else{
            if (turn==10){
                alert("Ничья")
                newGame()
            }
        }
        changeChar()
    }
}