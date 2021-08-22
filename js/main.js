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
console.log("Clock 30/30 points:\n1. Electric clock is accessible when you click on Holo, same for closing. + 10\n2. Weather functionality, top-left side. + 10\n3. Plays music when clicked on play button top-right. + 10");