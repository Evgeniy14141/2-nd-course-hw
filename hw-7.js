//Задание 1:

let str = 'js'; 
console.log(str.toUpperCase());


//Задание 2:

function filtersItems (elementArray,elementLetter) {
    return elementArray.filter((element) => element.toLocaleLowerCase().startsWith(elementLetter.toLocaleLowerCase()));
  }
  
  filtersItems(['Tyrannosaurus','Stegosaurus','Triceratops','Diplodocus','Pterodactyl','Velociraptor'],'T');



//Задание 3:

let number = 32.58884;

let roundedDown = Math.floor(number);
console.log(roundedDown); 

let roundedUp = Math.ceil(number);
console.log(roundedUp); 

let roundedClosest = Math.round(number);
console.log(roundedClosest); 



//Задание 4: 

Math.floor(32.58884) // 32
Math.ceil(32.58884) // 33
Math.round(32.58884) // 33



//Задание 5:

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
  
getRandomIntInclusive(1, 10)


//Задание 6:

function getRandomArrNumbers(num) {
  const length = Math.floor(num / 2); 
  let result = [];
  for (let i = 0; i < length; i++) {
      result.push(Math.floor(Math.random() * (num + 1))); 
  }
  return result;
}

console.log(getRandomArrNumbers(7)); 
console.log(getRandomArrNumbers(12));

//Задание 7:

function randDifNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
randDifNum(5, 88)


//Задание 8:

let currentDate = new Date();
console.log(currentDate);


//Задание 9:

function getFutureDate(daysAhead) {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + daysAhead);
  return currentDate
}

const manyDays = getFutureDate(72)
console.log(manyDays)



//Задание 10:

let d = new Date();

function formatRusTime(d) {
    const a = 'Дата:';
    const date = d.getDate().toString().padStart(2, "0");

    const month = d.getMonth()
    const monthTitle = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const c = ' - это';
    const year = d.getFullYear();
    const day = d.getDay();
    const dayTitle = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const t = 'Время:';
    const h = d.getHours().toString().padStart(2, "0");
    const m = d.getMinutes().toString().padStart(2, "0");
    const s = d.getSeconds().toString().padStart(2, "0");
    return ` ${a} ${date} ${monthTitle[month]} ${year}${c} ${dayTitle[day]} 
 ${t} ${h}:${m}:${s} `
}

console.log(formatRusTime(d))



//Задание 11: код в script.js

