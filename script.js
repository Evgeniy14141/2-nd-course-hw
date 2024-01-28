let month = prompt("Введите месяц");


if (month == 1 || month == 2 || month == 12) {

    function seasonsOfYears() {
        alert("Время года - Зима");
    }

} else if (month == 3 || month == 4 || month == 5) {

    function seasonsOfYears() {
        alert("Время года - Весна");
    }

} else if (month == 6 || month == 7 || month == 8) {

    function seasonsOfYears() {
        alert("Время года - Лето");
    }

}  else if (month == 9 || month == 10 || month == 11) {

        function seasonsOfYears() {
            alert("Время года - Осень");
        }
} else {

    function seasonsOfYears() {
        alert("Такого месяца не существует");
    }
}

seasonsOfYears();