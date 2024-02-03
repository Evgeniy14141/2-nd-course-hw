// Задание 1:

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}  



// Задание 2:

const indexNumbs = [1, 5, 4, 10, 0, 3];

	console.log(indexNumbs.indexOf(4));


// Задание 3:

let numbersWithSpace = [1, 3, 5, 10, 20];

numbersWithSpace = numbersWithSpace.join(' ');
console.log(numbersWithSpace);


// Задание 4:

let threeArrays = [
	[1, 1, 1],
	[1, 1, 1],
	[1, 1, 1],    
 ];
 
 for (let threeArraysIn of threeArrays) {
	 for (let element of threeArraysIn) {
		 console.log(element);
	 }
 }


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

alert([9, 8, 7, 6, 5].includes(+prompt('Угадай число')) ? 'Угадал' : 'Не угадал');


//Задание 8:

let wordsRev = 'abcdef';
let wordsCut = wordsRev.split('');

wordsCut = wordsCut.reverse();

wordsCut = wordsCut.join('');
    console.log(wordsCut);



// Задание 9:

const nested = arrs = [
    [1, 2, 3],
    [4, 5, 6]
];

const flattenArray = arr => {
    const getDepth = a => Array.isArray(a) ?
        1 + Math.max(...a.map(getDepth)) : 0
    return arr.flat(getDepth(arr))
}
console.log(flattenArray(nested))



// Задание 10:

let sequentialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
for (let i = 0; i < sequentialArray.length; i++) {
    sum += sequentialArray[i];
}

console.log('Sum is ' + sum)



// Задание 11:

let fiveArr = [1, 2, 3, 4, 5]
fiveArr = fiveArr.map(el => el ** 2);

    console.log(fiveArr);


	
// Задание 12: 

function getLengthWords(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
       newarr.push( arr[i].length);
    }  return newarr;
}

getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]


// Задание 13:

function filterPositive(array) {
    return array.filter(function(value) {
      return value < 0;
    });
  }
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]







	   
