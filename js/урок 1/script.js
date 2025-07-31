// console.log("Hello, world");
// let name = 'd15';//string
// let age = 15;//number
// console.log(`Ваш возраст ${age}`);
// let x = 121212121212121212121212121222222222222222222222222222222222n;//bigInt
// let isBig=true;//boolean
// let y = null;//null
// let a;
// console.log(typeof(y))//тип данных
// console.log(a)//undefined
// //symbol
// //object
// //alert("Hello world");
// //let b = prompt("Как вас зовут?", "Имя")
// //console.log(b);
// //confirm("Вы здесь?")
// let a1 = parseInt(prompt("Введите первое число"))
// let a2 = parseInt(prompt("Введите второе число"))
// let a3 = parseInt(prompt("Введите операцию"))
// if (a3=='+'){
//     alert(a1+a2);
// }else if (a3=='-'){
//     alert(a1-a2);
// }else if (a3=='*'){
//     alert(a1*a2);
// }else if (a3=='/'){
//     alert(a1/a2);
// }
// document.querySelector(".plus").onclick=function(){
//     let num1 = parseInt(document.querySelector('.input1').value);
//     let num2 = +document.querySelector('.input2').value;
//     alert(num1+num2);
// }

// document.querySelector(".minus").onclick=function(){
//     let num1 = parseInt(document.querySelector('.input1').value);
//     let num2 = +document.querySelector('.input2').value;
//     alert(num1-num2);
// }

// document.querySelector(".multiplay").onclick=function(){
//     let num1 = parseInt(document.querySelector('.input1').value)
//     let num2 = +document.querySelector('.input2').value
//     alert(num1*num2)
// }

// document.querySelector(".divide").onclick=function(){
//     let num1 = parseInt(document.querySelector('.input1').value)
//     let num2 = +document.querySelector('.input2').value
//     alert(num1/num2)
// }
// let login = ''
// let message = login=="Сотрудник"?"Привет":login=='Директор'?"Здравствуйте":login==''?'нет логина':'';
// let a=0
// while(a <=2){
//     console.log(a);
//     a++;
// }
let a = prompt("Введите число")
let k = []
for (let i = 2; i < a; i++){
    let f = true
    for (let j = 2; j*j<=i; j++){
        if (i%j==0){
            f = false
            break
        }
    }
    if (f){
        k.push(i)   
    }
}
alert(k)



