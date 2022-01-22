// Шапка =======================================================================
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}


// Обратный отсчет =============================================================
// Время обратного отсчета (В new Date("Месяц число (29), 2021 21:55:00") вводим необходимую дату)
var countDownDate = new Date("Aug 30, 2025 21:55:00").getTime();

// Обновление таймера (каждую секунду)
var countDownFunction = setInterval(function () {

    // Время на данный момент
    var now = new Date().getTime();

    // Высчитываем промежуток времени между установленным и сегодняшним времени
    var distance = countDownDate - now;

    // Время для дней, часов, минут и секунд
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Результат
    document.getElementById("timer").innerHTML = 
        days + "д " + hours + "ч " + minutes + "м " + seconds + "с ";

    // Отсчет равен 0
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("timer").innerHTML = "Время истекло";
    }
}, 1000)
