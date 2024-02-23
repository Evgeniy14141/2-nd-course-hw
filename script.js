//const block = document.querySelector('#block');

//block.addEventListener('click');


function seasonsOfYears() {
  
    let month = prompt("Введите месяц");

    if (month == 1 || month == 2 || month == 12) {
        alert("Время года - Зима");

    } else if (month == 3 || month == 4 || month == 5) {
        alert("Время года - Весна");

    } else if (month == 6 || month == 7 || month == 8) {
        alert("Время года - Лето");

    } else if (month == 9 || month == 10 || month == 11) {
        alert("Время года - Осень");
    } else {
        alert("Такого месяца не существует");
    }
}

//block.seasonsOfYears();



//Игра на память:

function gameMemory() {


    //Сначала создаем массив случаных чисел

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    

    const yourArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const myArray = yourArray.map(element => {
        return element.toLocaleLowerCase();
    });
    shuffle(myArray);
    alert(myArray);

    //Создаём функцию для отображения первого елемента в массиве

    function first(array) {
        let firstItem = myArray[0];
        return firstItem;
    }


    //Создаём функцию для отображения последнего елемента в массиве

    function last(array) {
        let lastItem = myArray[myArray.length - 1];
        return lastItem;
    }


    //Создаём цикл

    let answ = false;
    let answer = false;

    

    do {
        let quo = String(prompt('Чему ровнялся первый элемент массива'));
        quo = quo.toLocaleLowerCase();
        let quos = String(prompt('Чему ровнялся последний элемент массива'));
        quos = quos.toLocaleLowerCase();

        if (quo === null) {
            break;
        }

        if (quos === null) {
            break;
        }

        for (let i = 0; i < 7; i++) {
            if (myArray[0] === String(quo)) {
                answ = true;
            }
            if (myArray[6] === String(quos)) {
                answer = true;
            }
        }

        if (answ && answer === true) {
            alert('Поздравляем вы победили!'); break;
        } else if (answ === false && answer === true) {
            alert('Вы были близки к победе!'); break;
        } else if (answ === true && answer === false) {
            alert('Вы были близки к победе!'); break;
        } else {
            alert('Все ответы не верны!'); break;
        }

    } while (!answ, !answer)
}

//gameMemory();


//block.addEventListener('click',gameMemory);
