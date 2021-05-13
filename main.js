let date = new Date();
let calendar = document.querySelector('.calendar');
let leftBtn = calendar.querySelector('.arrow_left');
let rightBtn = calendar.querySelector('.arrow_right');
let infoYear = calendar.querySelector('.info_year');
let infoMonth = calendar.querySelector('.info_month');
let infoDay = calendar.querySelector('.info_day');
let infoWrap = calendar.querySelector('.info_wrap');
let dayItem = document.createElement('div');
    dayItem.classList.add('day');

let month = new Date().getMonth() +1;
let infoChangeMonth = new Date().getMonth();
let year = new Date().getFullYear();

function fun(){
    
    if(date.getDate() > 0 && date.getDate() < 10){
        infoDay.textContent = '0' + date.getDate();
    }else{
        infoDay.textContent = date.getDate();
    }

    let allDaysMonth = new Date(
        date.getFullYear(),
        month,
        0
    ).getDate();

    let datePrevMonth = new Date(
        date.getFullYear(),
        month -1,
        0
    ).getDate() +1;

    let dayPrevMonth = new Date(
        date.getFullYear(),
        month -1,
        0
    ).getDay();

    let daysNextMonth = new Date(
        date.getFullYear(),
        month,
        0
    ).getDay();

    let createPrevDay = function(){  
        let arrPrevDay = [];
        for(let j = dayPrevMonth; j > 0; j--){
            dayItem.textContent = datePrevMonth - j;
            arrPrevDay.push(dayItem.cloneNode(true));
        }
        return arrPrevDay;
    }

    let createDay = function(dayEl){
        let arrDays = [];
        for(let i = 1; i <= dayEl; i++){
            dayItem.innerText = i;
            arrDays.push(dayItem.cloneNode(true));
        }
        return arrDays;
    };

    let createNextDay = function(){
        let arrNextDay = [];
        for(let y = 1; y <= 14 - daysNextMonth; y++){
            dayItem.textContent = y;
            arrNextDay.push(dayItem.cloneNode(true));
        }
        return arrNextDay;
    }

    let calendarResult = function(arrPrevMonthDays, arrThisMonthDays, arrNextMonthDays){
        let calendarDate = calendar.querySelector('.calendar_date');
        calendarDate.innerHTML = '';
        arrPrevMonthDays.forEach(elPrevDay => {
            elPrevDay.classList.add('prev_day');
            calendarDate.appendChild(elPrevDay);
        });

        arrThisMonthDays.forEach(elDay => {
            calendarDate.appendChild(elDay);
            if(elDay.textContent == date.getDate()){
                elDay.classList.add('today');
            }
        });

        arrNextMonthDays.forEach(elNextDay => {
            elNextDay.classList.add('next_day');
            calendarDate.appendChild(elNextDay);
        });
    }

    return calendarResult(createPrevDay(), createDay(allDaysMonth), createNextDay());

}

let changeMonth = function(a){
    let allMonth = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
    infoMonth.textContent = allMonth[a];
}

let changeYear = function(b){
    let infoChangeYear = new Date(
        date.getFullYear(),
        month,
        0
    ).getFullYear();
    infoYear.textContent = infoChangeYear;
}

leftBtn.addEventListener('click', () => {
    infoChangeMonth -= 1;
    month -= 1;
    fun();
    if(infoChangeMonth < 0){
        infoChangeMonth = 11;
    }
    changeMonth(infoChangeMonth);
    changeYear();
})
rightBtn.addEventListener('click', () => {
    infoChangeMonth += 1;
    month += 1;
    fun();
    if(infoChangeMonth > 11){
        infoChangeMonth = 0;
    }
    changeMonth(infoChangeMonth);
    changeYear();
})

fun();
changeMonth(infoChangeMonth);
changeYear();
