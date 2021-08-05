const holo = document.querySelector('.holo');
holo.addEventListener('click', setDialog);

function setDialog(e) {
    const holoDialog = document.querySelector('.holo_dialog');
    if (holoDialog.classList[2] === 'none') {
        holoDialog.classList.remove('none')
    } else {
        holoDialog.classList.add('none')
    }
}