setInterval(electric, 1000);

const electricWatch = document.querySelector('.electric_watch');
const electricWatchData = document.querySelector('.electric_watch_data');

function electric(e) {
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    electricWatch.innerHTML = `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}.${seconds >= 10 ? seconds : '0' + seconds}`
}

const dayObj = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
}

const monthObj = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

function setDate() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth()
    const year = date.getFullYear()
    const utcDay = date.getUTCDate()
    electricWatchData.innerHTML = `${dayObj[day]}, ${utcDay},${monthObj[month]},${year}`
}

setDate()
electric()