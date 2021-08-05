let status = false

const play = function() {
    this.audio = document.getElementById('audio');
    this.btnText = document.querySelector('.audio_switch__txt')
    return (() => {
        if(!status) {
            this.audio.volume = 0.5;
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
