
function timer(){
    let time = new Date(),
    timeHour = time.getHours(),
    timeMinutes = time.getMinutes(),
    timeSeconds = time.getSeconds(),
    hour = document.querySelector('.time_hour'),
    minute = document.querySelector('.time_minute'),
    second = document.querySelector('.time_second');

    hour.textContent = (timeHour < 10) ? `0${timeHour}` : timeHour;
    minute.textContent = (timeMinutes < 10) ? `0${timeMinutes}` : timeMinutes;
    second.textContent = (timeSeconds < 10) ? `0${timeSeconds}` : timeSeconds;
}

timer();

function changeTimerSeconds(){
    setInterval(timer, new Date().getMilliseconds());
}

setInterval(changeTimerSeconds, 300);