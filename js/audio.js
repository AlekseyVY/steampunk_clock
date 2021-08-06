let status = false

const playList = ['01', '02'];

const play = function() {
    this.audio = document.getElementById('audio');
    this.btnText = document.querySelector('.audio_switch__txt');
    return (() => {
        if(!status) {
            const shuffle = Math.floor(Math.random() * playList.length);
            this.audio.src = `./assets/${playList[shuffle]}.mp3`;
            this.audio.volume = 0.3;
            this.audio.loop = true;
            this.audio.play()
            status = true
            this.btnText.innerHTML = 'stop'
        } else {
            this.audio.pause()
            this.audio.currentTime = 0
            status = false
            this.btnText.innerHTML = 'play'
        }
    })()
}
