//Задание 1:

let str = 'js'; 
console.log(new String(str).toUpperCase());


//Задание 2:

function filtersItems (elementArray,elementLetter) {
    return elementArray.filter((element) => element.toLocaleLowerCase().startsWith(elementLetter.toLocaleLowerCase()));
  }
  
  filtersItems(['Tyrannosaurus','Stegosaurus','Triceratops','Diplodocus','Pterodactyl','Velociraptor'],'T');



//Задание 3:

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};
Array.prototype.min = function() {
    return Math.min.apply(null, this);
};
let numArr = [52,53,49,77,21,32];

console.log(`Max value is: ${numArr.max()}` +
    `\nMin value is: ${numArr.min()}`);



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

function getRandomArrNumbers(max,min) {
  arr = [];
  min = 0;
  for (i = 0; i < max; i++) {
      x = Math.floor(Math.random() * max) + min;
      if (arr.includes(x) == true) {
          i = i -1;
      } else {
          if (x > max == false) {
              arr.push(x);
          }
      }
  }
  return arr.filter((el, i) => i >= arr.length/2);
}

getRandomArrNumbers(7)


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

