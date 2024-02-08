// Задание 1:
 
const numbs = [1, 5, 4, 10, 0, 3];
for (с of numbs) {
console.log(с);
if (с === 10) {
    break;   
}
}



// Задание 2:

const indexNumbs = [1, 5, 4, 10, 0, 3];

	console.log(indexNumbs.indexOf(4));



// Задание 3:

let numbersWithSpace = [1, 3, 5, 10, 20];

numbersWithSpace = numbersWithSpace.join(' ');
console.log(numbersWithSpace);



// Задание 4:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = 1 // заполняем подмассив числами
	}
}

console.log(arr);



 // Задание 5:

let pro = [1, 1, 1];

pro.push(2, 2, 2);
console.log(pro);



// Задание 6:

let sorting = [9, 8, 7, 'a', 6, 5];

sorting.sort();
sorting.pop();
console.log(sorting);



// Задание 7:

let numbi = [9, 8, 7, 6, 5];
let answ = false;

do {
    let quo = prompt('Введите число');

    if (quo === null) {
        break;
    }

    for (let i = 0; i < numbi.length; i++) {
        if (numbi[i] === Number(quo)) {
            answ = true;
        }
    }

    if (answ) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
} while (!answ);



//Задание 8:

let wordsRev = 'abcdef';
let wordsCut = wordsRev.split('').reverse().join('');
    console.log(wordsCut);



// Задание 9:

let arr1 = [[1, 2, 3,],[4, 5, 6]];
console.log(arr1.flat());



// Задание 10: 

let sequentialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < sequentialArray.length - 1; i++) {
  let num = sequentialArray[i];
  let num2 = sequentialArray[i + 1];
  let sum = num + num2;
  console.log(`Сумма ${num} и ${num2} равна ${sum}`);
}


// Задание 11: 

function squareNum (array) {
    return array.map(xx=>(xx ** 2));
}
 
console.log(squareNum([1, 2, 3, 4, 5]));

//Либо вот так:
const squareNum = (array) => array.map(xx=>(xx ** 2));
    squareNum([1, 2, 3, 4, 5])
  


// Задание 12:

function getLengthWords(arm) {
    return arm.map(aword => aword.length);
  }
  
  let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
  let wordLeng = getLengthWords(words);
  console.log(wordLeng);



// Задание 13:

function filterPositive(array) {
    return array.filter(function(value) {
      return value < 0;
    });
  }
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]







	   
