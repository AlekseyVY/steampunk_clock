const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    const crd = pos.coords;
    (async function weatherData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=9b05d81a120d9de0cccd64649468334b&units=metric`
        const data = await fetch(url)
        const weather = await data.json()
        const weatherIcon = document.querySelector('.weather_icon');
        const weatherTmp = document.querySelector('.weather_tmp');
        weatherIcon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        const temp = Math.floor(weather.main.temp)
        weatherTmp.innerHTML = temp > 0 ? `+${temp}` : `-${temp}`
        console.log(weather)
    })()
}

function error(err) {
    (async function weatherData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=9b05d81a120d9de0cccd64649468334b&units=metric`
        const data = await fetch(url)
        const weather = await data.json()
        const weatherIcon = document.querySelector('.weather_icon');
        const weatherTmp = document.querySelector('.weather_tmp');
        weatherIcon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        const temp = Math.floor(weather.main.temp)
        weatherTmp.innerHTML = temp > 0 ? `+${temp}` : `-${temp}`
    })()
}

navigator.geolocation.getCurrentPosition(success, error, options);

