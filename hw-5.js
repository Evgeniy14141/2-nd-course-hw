//Задание 1:
//Первый способ
let a = 4;
let b = 8;

if (a < b) {

    function printMessage() {
        console.log(a);
    }

} else {

    function printMessage() {
        console.log(b);
    }

}

printMessage();

//Второй способ
console.log(Math.min(8, 4));



//Задание 2:

let p = prompt('Введите любое число');

if (p % 2 == 0) {

    function printMessage() {
        console.log('Число чётное');
    }

} else {

    function printMessage() {
        console.log('Число не чётное');
    }

}

printMessage();



//Задание 3:

//Задание 3.1:
let l = prompt('Введите любое число');
    
function printMessage() {
        return(l**2);
    
}

printMessage();

//Задание 3.2:
let с = prompt('Введите любое число');
    
function printMessage() {
        return(Math.sqrt(с));
    
}

printMessage();


//Задание 4:

let age = prompt("Сколько Вам лет?");


if (age < 0) {

    function printMessage() {
        console.log("Вы ввели неправильное число");
    }

} 
    else if (age < 12) {

    function printMessage() {
        console.log("Привет, друг!");
    }

} else {

    function printMessage() {
        console.log("Добро пожаловать!");
    }

}

printMessage();



//Задание 5:

let v = prompt('Введите первое число');
let z = prompt('Введите второе число');


if (isNaN(v) || isNaN(z)) {

    function printMessage() {
        return("Одно или оба значения не являются числом");
    }

} else {

    function printMessage() {
        return(v * z);
    }

}

printMessage();


//Задание 6:

let m = prompt('Введите число');

if (isNaN(m)) {

    function printMessage() {
        return('Переданный параметр не является числом');
    }

} else {

    function printMessage() {
        return(`${m} в кубе равняется ${(m ** 2)}`);
    }

}

printMessage();


//Задание 7:

function getArea() {
	console.log(Math.PI * this.radius ** 2);
};

function getPerimeter() {
	console.log(2 * Math.PI * this.radius);
};

const circle1 = {
	radius: 7,
	getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
	radius: 4,
	getArea: getArea,
    getPerimeter: getPerimeter,
}

circle1.getArea();
circle1.getPerimeter(); 
circle2.getArea();
circle2.getPerimeter(); 


//Задание 8:

//В файле script.js