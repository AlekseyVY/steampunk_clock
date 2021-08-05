setInterval(electric, 1000);

const electricWatch = document.querySelector('.electric_watch');

function electric(e) {
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    let formattedMinutes
    electricWatch.innerHTML = `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}.<span>${seconds >= 10 ? seconds : '0' + seconds}</span>`
    console.log(electricWatch.innerHTML)
}