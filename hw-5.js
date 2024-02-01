//Задание 1:
//Первый способ
function twoNumbers(a, b) {
    
    if (a < b) {
         return a;

    } else {
        return b;
    }
}

console.log(twoNumbers(8, 6));
alert(twoNumbers(33, 56));
twoNumbers(4, 5)


//Второй способ
console.log(Math.min(8, 4));



//Задание 2:

function oddEven() {
    let p = prompt('Введите любое число');
    
        if (p % 2 == 0) {
    
        return ('Число чётное');
    
        } else {
        return ('Число не чётное');
        }
    
}
    
oddEven();



//Задание 3:

//Задание 3.1:
function squareOfNumber() {

    let l = prompt('Введите любое число');
            return(l**2);
        
}
    
squareOfNumber();



//Задание 3.2:
function rootOfNumber() {

    let с = prompt('Введите любое число');
            return(Math.sqrt(с));
        
}
    
rootOfNumber();




//Задание 4:


function yourAge() {

    let age = prompt("Сколько Вам лет?");
    
        if (age < 0) {
            return ("Вы ввели неправильное число");
    
        } else if (age < 12) {
           return ("Привет, друг!");
    
        } else  {
            return ("Добро пожаловать!");
        }
    
    }
    
    yourAge();




//Задание 5:

function numberFilter() {

    let v = prompt('Введите первое число');
    let z = prompt('Введите второе число');
    
    
        if (isNaN(v) || isNaN(z)) {
            return("Одно или оба значения не являются числом");
    
        } else 
            return(v * z);
    
    }
    
    numberFilter();



//Задание 6:

function cubeOfNumber() {

    let m = prompt('Введите число');
    
        if (isNaN(m)) {
            return('Переданный параметр не является числом');
    
        } else
            return(`${m} в кубе равняется ${(m ** 2)}`);
    
}
    
cubeOfNumber();



//Задание 7:

function getArea() {
	return (Math.PI * this.radius ** 2);
};

function getPerimeter() {
	return (2 * Math.PI * this.radius);
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

console.log(circle1.getArea());
console.log(circle1.getPerimeter()); 
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
//Либо можно вывести без console.log, но будет выходить по одному значению, например:
circle1.getArea()



//Задание 8:

//В файле script.js