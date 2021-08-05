setInterval(clock, 1000);

const hours = document.querySelector('[data-hour]');
const minutes = document.querySelector('[data-minute]');

const secondsCog = document.querySelector('[data-secondsCog]');
const minuteCog = document.querySelector('[data-minuteCog]');
const hourCog = document.querySelector('[data-hourCog]')

function clock() {
    const date = new Date();
    const secondsDeg = date.getSeconds() / 60;
    const minutesDeg = (secondsDeg + date.getMinutes()) / 60;
    const hoursDeg = (minutesDeg + date.getHours()) / 12;
    animate(hours, hoursDeg);
    animate(minutes, minutesDeg)
    animate(hourCog, minutesDeg)
    animate(minuteCog, secondsDeg)
    animate(secondsCog, secondsDeg)
}

function animate(ele, deg) {
    ele.style.setProperty('--rotation', deg * 360)
}

clock();