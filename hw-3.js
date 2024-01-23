// Задание 1
let password = 'животное';
let inter = prompt ('Введите пароль');
if (password === inter) {
    console.log('Пароль введён верно');
} else {
    console.log('Пароль введён неправильно');
}

// Задание 2
let с = Number (prompt ('Введите число')); // Можно сделать и без prompt, например let c = 2;

if (с > 0 && с < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

// Задание 3
let d = 10;
let e = 747;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
    console.log(typeof a, typeof b);
let p = Number (a);
let q = Number (b);
alert(p + q)

// Задание 5
let monthNumber = String (prompt('Введите номер месяца'));
switch (monthNumber) {
    case '1':
        console.log('Январь')
        break;
    case '2':
        console.log('Февраль')
        break;
    case '3':
        console.log('Март')
        break;
    case '4':
        console.log('Апрель')
        break;
    case '5':
        console.log('Май')
        break;
    case '6':
        console.log('Июнь')
        break;
    case '7':
        console.log('Июль')
        break;
    case '8':
        console.log('Август')
        break;  
    case '9':
        console.log('Сентябрь')
        break;
    case '10':
        console.log('Октябрь')
        break;
    case '11':
        console.log('Ноябрь')
        break;
    case '12':
        console.log('Декабрь')
        break; 
    default:
        console.log('Такого месяца нет!')
}



//Дополнительная часть, упел только одно упражнение, но для себя постараюсь 8 и 9 тоже сделать!
// Задание 7
let g = prompt('Введите любое число');
if (g % 2 === 1){
    alert("Число не четное")
} else {
    alert("Число чётное");
       }

//Второй способ решения       
let k = prompt('Введите любое число');
if (k & 1 == 1) {
    alert("Число не четное")
} else {
    alert("Число чётное");
       }