//Задание 1:

const difPeople = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(difPeople.sort((a, b) => a.age - b.age));



 //Задание 2:

 function filter(array, ruleFunction) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

console.log(filter([3, -4, 1, 9], isPositive)); // 

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 



//Задание 3:

let interval = setInterval(() => {
    console.log(new Date().toString());
}, 3000); // Вывод текущей даты каждые 3 секунды

setTimeout(() => {
    clearInterval(interval); // Остановить вывод даты
    console.log('30 секунд прошло');
}, 30000); // Завершить программу через 30 секунд


//Задание 4:

function delayForSecond(callback) {
    setTimeout(callback, 1000); // Вызов callback спустя 1 секунду (1000 миллисекунд)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


//Задание 5:

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    return function () {
        console.log(`Привет, ${name}!`);
    };
}

delayForSecond(sayHi('Глеб'));



