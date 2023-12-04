

var day1 = document.querySelector('.day');
var month1 = document.querySelector('.month');
var year1 = document.querySelector('.year');
var hour1 = document.querySelector('.hour');
var minute1 = document.querySelector('.minute');
var second1 = document.querySelector('.second');
function timeClock(){

    let data = new Date();
    let day = data.getDate();
    let month = data.getMonth()+1;
    let year = data.getFullYear();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    if(day<10){
        day = "0"+day;
    }
    if(month<10){
        month = "0"+month;
    }
    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    day1.innerHTML = day;
    month1.innerHTML = month;
    year1.innerHTML = year;
    hour1.innerHTML = hours;
    minute1.innerHTML = minutes;
    second1.innerHTML = seconds;
    
}

setInterval(timeClock,10)


