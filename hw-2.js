//Задание 1:

let a = 10;
alert(a);

a = 20;
alert(a);



//Задание 2:

let firstIPhone = 2007;
alert(`Год выпуска первого айфона ${firstIphone}`);



//Задание 3:

let author = 'Brendan Eich';
alert(`${author}-создатель Js`);



//Задание 4:

let x = 10;
let y = 2;

//Сложение
let addition = x + y;
alert(addition);

//Вычитание
let subtraction = x - y;
alert(subtraction);

//Умножение
let multiplication = x * y;
alert(multiplication);

//Деление
let division = x / y;
alert(division);



//Задание 5:

let result = 2 ** 5;
alert(result);


//Задание 6:

let aa = 9;
let bb = 2;
let remainder = aa % bb;

alert(remainder);


//Задание 7:

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);




//Задание 8:

let age=Number (prompt("Сколько Вам лет?"));
alert(age);


//Задание 9:
const user = { 
    name: 'Homer',
    age: 33,
    isAdmin: true}  //Задание 9.1   
    user["city of residence"]='Springfild';
    user.age = 34;  //Задание 9.2
    delete user["city of residence"];  //Задание 9.3
    let info = prompt("Что вы хотите узнать о пользователе?"); //Задание 9.4
    alert(user[info]);



//Задание 10:

let names= (prompt("Привет, как тебя зовут?"));
let greeting= `Привет ${names}!`;
alert (greeting);
let city= (prompt ("Где ты живёшь?"));
let hello= `Приветствую тебя ${names} из города ${city}`
alert (hello);