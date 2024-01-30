function seasonsOfYears() {

    let month = prompt("Введите месяц");
    
    if (month == 1 || month == 2 || month == 12) {
            alert("Время года - Зима");
    
    } else if (month == 3 || month == 4 || month == 5) {
            alert("Время года - Весна");
    
    } else if (month == 6 || month == 7 || month == 8) {
            alert("Время года - Лето");
        
    }  else if (month == 9 || month == 10 || month == 11) {
                alert("Время года - Осень");   
    } else {
        alert("Такого месяца не существует");
    } 
}
    
seasonsOfYears();